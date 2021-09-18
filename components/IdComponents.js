import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AppContext } from "./contex/AppContex";
import { handleAddToCard } from "../functions";
import Flickity from "react-flickity-component";
import Select from "./Select";
import ContactForm from "./ContactForm";

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
      shortDescription
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

  const scrollToElement = require("scroll-to-element");

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
  const gallery_images = data.product.galleryImages.nodes;
  console.log(gallery_images === null ? "1" : "2", "product");
  console.log(gallery_images.nodes, "product");

  // let select;
  // if (data.product.attributes) {
  //   select = data.product.attributes.nodes.map((attribute) => (
  //     <Select select={attribute.options} name={attribute.name} />
  //   ));
  // } else {
  //   select = null;
  // }

  const flickity_options = {
    cellAlign: "left",
    contain: true,
    lazyLoad: 1,
    fullScreen: true,
    pageDots: false,
    prevNextButtons: true,
  };

  const gallery =
    gallery_images.length > 0
      ? gallery_images.map((image) => (
          <div className="carousel-cell">
            <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
          </div>
        ))
      : null;

  const handleScrollToSection = () => {
    scrollToElement("#contact_form", {
      offset: -100,
      duration: 1000,
    });
  };

  let floatValue = product.price
    ? parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0])
    : null;

  return (
    <div className="container">
      <div className="ProductOverview">
        <div className="row products">
          <div className="col-md-7">
            {gallery ? (
              <Flickity
                className={"products-carousel"}
                options={flickity_options}
              >
                <div className="carousel-cell">
                  <img
                    className="img-fluid"
                    src={product.image ? product.image.sourceUrl : ""}
                    alt=""
                  />
                </div>
                {gallery}
              </Flickity>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-5 ProductOverview__info">
            <h3>{product.name}</h3>
            {floatValue ? <h4>Cena: {floatValue} zł</h4> : ""}
            <div
              className="ProductOverview__short-description"
              dangerouslySetInnerHTML={{ __html: product.shortDescription }}
            ></div>

            <button className="addToCard" onClick={handleScrollToSection}>
              ZAMÓW
            </button>
          </div>
        </div>
        <div
          className="ProductOverview__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <ContactForm name={product.name} is_pdp={true} />
      </div>
    </div>
  );
};

export default IdComponents;
