import React, { useState } from "react";
import Link from "next/link";
import { handleAddToCard } from "../functions";
import { useMediaQuery } from "react-responsive";

const ImgProduct = (props) => {
  const [isShown, setIsShown] = useState(false);
  const {
    image,
    slug,
    thisPrice,
    name,
    cat,
    slugProduct,
    product,
    cart,
    toggleCart,
    price,
    togglePrice,
    count,
    toggleCount,
  } = props;

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1170px)",
  });

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isDesktopOrLaptop === true ? (
        <>
          {isShown === true ? (
            <div>
              <img className="card-img-top  img-fluid" src={image} alt={slug} />
              <div className="cardHoverInfo">
                <h5>{name}</h5>
                <div className="borderH5"></div>
                <h6>{thisPrice}</h6>
                <button
                  className="addToCardWhite"
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
                <Link href="/[cat]/[id]" as={`/${cat}/${slugProduct}`}>
                  <button className="addToCardWhite">ZOBACZ</button>
                </Link>
              </div>
            </div>
          ) : (
            <img className="card-img-top img-fluid" src={image} alt={slug} />
          )}
        </>
      ) : (
        <Link href="/[cat]/[id]" as={`/${cat}/${slugProduct}`}>
          <img className="card-img-top  img-fluid" src={image} alt={slug} />
        </Link>
      )}
    </div>
  );
};

export default ImgProduct;
