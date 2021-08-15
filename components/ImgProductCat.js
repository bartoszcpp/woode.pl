import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const ImgProductCat = (props) => {
  const { src, name } = props;
  const [isShown, setIsShown] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1170px)",
  });
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="imgProductHover"
    >
      {isDesktopOrLaptop === true ? (
        <>
          {isShown === true ? (
            <div className="imgProductHover">
              <img className="imgProduct img-fluid " src={src} alt="produkt1" />
              <div className="cardHoverInfo">
                <h5>{name}</h5>
                <div className="borderH5"></div>
              </div>
            </div>
          ) : (
            <img className="imgProduct img-fluid" src={src} alt="produkt1" />
          )}
        </>
      ) : (
        <img className="imgProduct img-fluid" src={src} alt="produkt1" />
      )}
    </div>
  );
};

export default ImgProductCat;
