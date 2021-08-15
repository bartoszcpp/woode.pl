import Header from "../Header";
import BackgroundImage from "../BackgroungImage";
import CartItem from "./CartItem";
import { useContext } from "react";
import { AppContext } from "../contex/AppContex";
import Footer from "../Footer";

const CartContainer = () => {
  const { cart, toggleCart, price, togglePrice, count, toggleCount } =
    useContext(AppContext);

  console.log(cart);
  console.log(price);
  return (
    <>
      <Header />
      <BackgroundImage id="home_page" />
      <div className="content-wrap-cart">
        {cart ? (
          <div className="cart-wrapper">
            <h1 className="woo-next-cart-heading mt-5">Koszyk</h1>

            {cart.map((item) => {
              if (item !== null)
                return (
                  <CartItem
                    key={item["product"].productId}
                    item={item["product"]}
                    cart={cart}
                    price={price}
                    count={count}
                    togglePrice={togglePrice}
                    toggleCount={toggleCount}
                    toggleCart={toggleCart}
                  />
                );
            })}
            <div className="total">
              <p>Łącznie: {price}</p>
            </div>
          </div>
        ) : (
          <div>
            <p>Brak produktów w koszyku</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartContainer;
