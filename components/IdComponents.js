import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AppContext } from "./contex/AppContex";
import { handleAddToCard } from "../functions";
import Flickity from "react-flickity-component";
import Select from "./Select";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    product(idType: SLUG, id: $data) {
      name
      slug
      image {
        slug
        sourceUrl
      }
      description
      ... on SimpleProduct {
        price
      }
      galleryImages {
        nodes {
          sourceUrl
          slug
        }
      }
      attributes {
        nodes {
          name
          options
        }
      }
    }
  }
`;

const IdComponents = (props) => {
  const { cart, toggleCart, price, togglePrice, count, toggleCount } =
    useContext(AppContext);

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: props.id,
    },
  });

  if (loading)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  const product = data.product;
  const gallery_images = data.product.galleryImages;
  console.log(data.product, "product");

  let select;
  if (data.product.attributes) {
    select = data.product.attributes.nodes.map((attribute) => (
      <Select select={attribute.options} name={attribute.name} />
    ));
  } else {
    select = null;
  }

  const flickity_options = {
    cellAlign: "left",
    contain: true,
    lazyLoad: 1,
    fullScreen: true,
    pageDots: false,
    prevNextButtons: false,
  };

  const flickity_options_thumbns = {
    cellAlign: "left",
    contain: true,
    groupCells: 3,
    asNavFor: ".products-carousel",
  };

  const gallery = gallery_images.nodes.map((image) => (
    <div className="carousel-cell">
      <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
    </div>
  ));

  let floatValue = parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0]);

  return (
    <div className="container">
      <div className="ProductOverview">
        <div className="row products">
          <div className="col-md-7">
            <Flickity
              className={"products-carousel"}
              options={flickity_options}
            >
              <div className="carousel-cell">
                <img
                  className="img-fluid"
                  src={product.image.sourceUrl}
                  alt=""
                />
              </div>
              {gallery}
            </Flickity>
            <Flickity
              className={"thumbns-carousel"}
              options={flickity_options_thumbns}
            >
              <div className="carousel-cell">
                <img
                  className="img-fluid"
                  src={product.image.sourceUrl}
                  alt=""
                />
              </div>
              {gallery}
            </Flickity>
          </div>
          <div className="col-md-5 ProductOverview__info">
            <h3>{product.name}</h3>
            <h4>{floatValue} zł</h4>

            {/* Select options */}
            {select}

            <button
              className="addToCard"
              onClick={() =>
                handleAddToCard(
                  product.slug,
                  product,
                  price,
                  count,
                  cart,
                  togglePrice,
                  toggleCount,
                  toggleCart
                )
              }
            >
              DO KOSZYKA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdComponents;
