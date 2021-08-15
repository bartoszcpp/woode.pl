import React from "react";
import Link from "next/link";

const ProductTile = (props) => {
  const { image, name, price, slug } = props;

  return (
    <Link href="/products/[id]" as={`/products/${slug}`}>
      <div className="ProductTile col-4">
        <img className="img-fluid ProductTile__img" src={image} alt={name} />{" "}
        <div className="ProductTile__name">{name}</div>
        <div className="ProductTile__polish-product">
          <div className="Polish__flag">
            <div className="Polish__flag--red"></div>
            <div className="Polish__flag--white"></div>
          </div>
          <p>Polski produkt</p>
        </div>
        <div className="ProductTile__price">{price} zł</div>
      </div>
    </Link>
  );
};

export default ProductTile;
