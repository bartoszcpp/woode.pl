import React from "react";
import Link from "next/link";
import Flickity from "react-flickity-component";

const ProductTile = (props) => {
  const { image, name, price, slug, gallery_images } = props;

  const computed_price = price
    ? parseInt(price.match(/[+-]?\d+(\.\d+)?/g)[0])
    : null;

  const flickity_options = {
    cellAlign: "left",
    contain: true,
    lazyLoad: 1,
    fullScreen: true,
    pageDots: false,
    prevNextButtons: true,
  };

  const gallery = gallery_images.nodes.map((image) => (
    <div className="carousel-cell">
      <img className="img-fluid" src={image.sourceUrl} alt={image.slug} />
    </div>
  ));

  return (
    <div className="ProductTile col-md-6 row">
      <div className="col-md-7 ProductTile__img">
        <img className="img-fluid" src={image} alt={name} />
      </div>
      <div className="col-md-5 ProductTile__content">
        <div className="ProductTile__texts">
          <div className="ProductTile__name">
            <h3>{name}</h3>
          </div>
          {computed_price ? (
            <div className="ProductTile__price">Cena: {computed_price} zł</div>
          ) : (
            ""
          )}
        </div>
        <Link href="/produkty/[id]" as={`/produkty/${slug}`}>
          <div className="ProductTile__view-more">OBEJRZYJ</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductTile;
