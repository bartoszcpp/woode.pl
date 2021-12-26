import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AppContext } from "./contex/AppContex";
import Flickity from "react-flickity-component";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";

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
        stockStatus
      }
      galleryImages(first: 1000) {
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

  const [isFullScreen, setIsFullScreen] = useState(false);

  const scrollToElement = require("scroll-to-element");

  // if (loading)
  //   return (
  //     <div className="lds-ring">
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </div>
  //   );

  const product = data ? data.product : null;
  const gallery_images = data ? data.product.galleryImages.nodes : null;

  const flickity_options = {
    cellAlign: "left",
    contain: true,
    lazyLoad: 1,
    fullScreen: true,
    pageDots: false,
    prevNextButtons: true,
  };

  const handleFullScreen = (close_fullscreen) => {
    if (!close_fullscreen) {
      setIsFullScreen(true);
      return;
    }
    setIsFullScreen(false);
  };

  const gallery = gallery_images ?
    gallery_images.length > 0
      ? gallery_images.map((image) => (
          <div className="carousel-cell">
            <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
            <div
              className="fullscreen-icon"
              onClick={() => handleFullScreen(false)}
            >
              <FontAwesomeIcon icon={faExpandAlt} />
            </div>
          </div>
        ))
      : null
    : null;

  const gallery_fullscreen = gallery_images ?
    gallery_images.length > 0
      ? gallery_images.map((image) => (
          <div className="carousel-cell">
            <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
            <div
              className="fullscreen-icon"
              onClick={() => handleFullScreen(true)}
            >
              <FontAwesomeIcon icon={faWindowClose} />
            </div>
          </div>
        ))
      : null
    : null;

  const handleScrollToSection = () => {
    scrollToElement("#contact_form", {
      offset: -100,
      duration: 1000,
    });
  };

  let floatValue = product
    ? (product.price ? parseInt(product.price.match(/[+-]?\d+(\.\d+)?/g)[0]) : null)
    : null;

  return (
    <>
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
                    <div
                      className="fullscreen-icon"
                      onClick={() => handleFullScreen(false)}
                    >
                      <FontAwesomeIcon icon={faExpandAlt} />
                    </div>
                  </div>
                  {gallery}
                </Flickity>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-5 ProductOverview__info">
              <h3>{product ? product.name : null}</h3>
              {floatValue ? <h4>Cena: {floatValue} zł</h4> : ""}
              <div className="ProductOverview__stock">
                {product ? (product.stockStatus === "ON_BACKORDER" ? (
                  <div>
                    <span className="ProductOverview__status--backorder"></span>
                    <p>Produkt dostępny na zamówienie, kliknij zamów i opisz na czym Ci zalezy a my wykonamy podobny produkt w terminie od 3 do 8 tygodni</p>
                  </div>
                ) : (
                  <div>
                    <span className="ProductOverview__status--active"></span>
                    <p>Produkt dostępny od ręki. Czas realizacji do 5 dni roboczych</p>
                  </div>
                )) : null}
              </div>
              {product ? 
                <div
                  className="ProductOverview__short-description"
                  dangerouslySetInnerHTML={{ __html: product.shortDescription }}
                ></div>
                : null
              }

              <button className="addToCard" onClick={handleScrollToSection}>
                ZAMÓW
              </button>
            </div>
          </div>
          {product ? 
            <div
              className="ProductOverview__description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            : null
          }
          {product ? 
            <ContactForm name={product.name} is_pdp={true} />
            : null
          }
        </div>
      </div>
      <div
        className={
          isFullScreen
            ? "flickity-placeholder flickity-placeholder-active"
            : "flickity-placeholder"
        }
      >
        {gallery_fullscreen ? (
          <Flickity className={"products-carousel"} options={flickity_options}>
            <div className="carousel-cell">
              <img
                className="img-fluid"
                src={product.image ? product.image.sourceUrl : ""}
                alt=""
              />
              <div
                className="fullscreen-icon"
                onClick={() => handleFullScreen(true)}
              >
                <FontAwesomeIcon icon={faWindowClose} />
              </div>
            </div>
            {gallery_fullscreen}
          </Flickity>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default IdComponents;
