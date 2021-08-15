import React, { useState, useEffect } from "react";
export const AppContext = React.createContext([{}, () => {}]);

export const AppProvider = (props) => {
  const [cart, setCart] = useState(null);
  const [price, setPrice] = useState(null);
  const [count, setCount] = useState(null);

  const togglePrice = (value) => {
    setPrice(value);
    if (process.browser) {
      localStorage.setItem("totalPrice", value);
    }
  };

  const toggleCount = (value) => {
    setCount(value);
    if (process.browser) {
      localStorage.setItem("totalCount", value);
    }
  };

  const toggleCart = (value) => {
    setCart(value);
    console.log(value);
    console.log(JSON.stringify(value));
    if (process.browser) {
      localStorage.setItem("item", JSON.stringify(value));
    }
  };

  useEffect(() => {
    if (process.browser) {
      let existProduct = localStorage.getItem("item");
      console.log(existProduct);
      let totalPrice = localStorage.getItem("totalPrice");
      let totalCount = localStorage.getItem("totalCount");

      if (existProduct !== "") {
        let allProductStorage = JSON.parse(existProduct);
        setCart(allProductStorage);
      } else {
        console.log("dsdaddds");
      }

      setPrice(totalPrice);
      setCount(totalCount);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ cart, toggleCart, price, togglePrice, count, toggleCount }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
