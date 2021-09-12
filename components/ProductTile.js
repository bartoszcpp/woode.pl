import React from "react";
import Link from "next/link";
import Flickity from "react-flickity-component";

const ProductTile = (props) => {
  const { image, name, price, slug, gallery_images } = props;

  const computed_price = parseInt(price.match(/[+-]?\d+(\.\d+)?/g)[0]);

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
    <div className="ProductTile col-6 row">
      <div className="col-7 ProductTile__img">
        <Flickity className={"products-carousel"} options={flickity_options}>
          <div className="carousel-cell">
            <img className="img-fluid" src={image} alt={name} />
          </div>
          {gallery}
        </Flickity>
      </div>
      <div className="col-5 ProductTile__content">
        <div className="ProductTile__texts">
          <div className="ProductTile__name">
            <h3>{name}</h3>
          </div>
          <div className="ProductTile__price">Cena: {computed_price} zł</div>
        </div>
        <Link href="/products/[id]" as={`/products/${slug}`}>
          <div className="ProductTile__view-more">Zamów</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductTile;
