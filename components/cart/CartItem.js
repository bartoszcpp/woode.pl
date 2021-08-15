import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  const {
    item,
    cart,
    toggleCart,
    price,
    togglePrice,
    count,
    toggleCount,
  } = props;

  const productPrice = parseInt(item.price.match(/[+-]?\d+(\.\d+)?/g)[0]);
  const [productCount, setProductCount] = useState(item.totalProductCount);

  const handleCountChange = (event) => {
    setProductCount(event.target.value);
    let allStorageProduct = cart; //objekt wszystkich produktów
    let totalLocalCount = count;
    let totalLocalPrice = price;

    const first = allStorageProduct.findIndex(
      (product) => product["product"].slug === event.target.name
    );

    //cena nacisnietego produktu
    let priceProduct = parseInt(
      allStorageProduct[first]["product"].price.match(/[+-]?\d+(\.\d+)?/g)[0]
    );

    if (first > -1) {
      let totalProductCount = event.target.value;
      let totalProductPrice = event.target.value * priceProduct;

      totalLocalCount = totalLocalCount - item["totalProductCount"];
      totalLocalPrice = totalLocalPrice - item["totalProductPrice"];
      totalLocalPrice = totalLocalPrice + totalProductPrice;

      item["totalProductCount"] = totalProductCount;
      item["totalProductPrice"] = totalProductPrice;

      if (totalProductCount !== "") {
        totalLocalCount = totalLocalCount + parseInt(totalProductCount);
      }

      toggleCount(totalLocalCount);
      // localStorage.setItem("totalPrice", totalLocalPrice);
      togglePrice(totalLocalPrice);

      allStorageProduct[first] = { product: item };
      localStorage.setItem("item", JSON.stringify(allStorageProduct));
      console.log(allStorageProduct);
    }
  };

  const handleRemoveProduct = (e, slug) => {
    //let existProduct = localStorage.getItem("item");
    let allStorageProduct = cart;
    let totalLocalCount = count;
    let totalLocalPrice = price;

    const first = allStorageProduct.findIndex(
      (product) => product["product"].slug === slug
    );

    if (first > -1) {
      let totalCount =
        totalLocalCount - allStorageProduct[first]["product"].totalProductCount;
      toggleCount(totalCount);

      let totalPrice =
        totalLocalPrice - allStorageProduct[first]["product"].totalProductPrice;
      togglePrice(totalPrice);

      allStorageProduct.splice(first, 1);
      toggleCart(allStorageProduct);
    }
  };

  return (
    <div className="row justify-content-center przedmioty">
      <div className="col-sm-2 order-sm-2">
        <img width="64" src={item.image.sourceUrl} alt={item.image.slug} />
      </div>
      <div className="col-sm-4 order-sm-3">{item.name}</div>
      <div className="col-sm-2 order-sm-4">
        <p>Cena: </p>
        {productPrice}
      </div>
      {/* Qty Input */}
      <div className="col-sm-2 order-sm-5 numberProducts">
        <input
          type="number"
          min="1"
          value={productCount}
          name={item.slug}
          className="woo-next-cart-qty-input form-control"
          onChange={(event) => handleCountChange(event)}
        />
      </div>
      <div className="col-sm-2 deleteItem order-sm-1">
        <span onClick={(e) => handleRemoveProduct(e, item.slug)}>
          <FontAwesomeIcon icon={faTimesCircle} />
          <span className="deleteSpan"> Usuń produkt</span>
        </span>
      </div>
      {/* <div className="col-sm-2">
        <p>Łącznie: </p>
        {item.totalProductPrice}
      </div> */}
    </div>
  );
};

export default CartItem;
