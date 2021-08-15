import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "./contex/AppContex";
import { handleAddToCard } from "../functions";

const POSTS_QUERY = gql`
  query MyQuery($data: String!) {
    products(where: { category: $data }, first: 12) {
      nodes {
        name
        slug
        shortDescription
        image {
          slug
          sourceUrl
        }
        ... on SimpleProduct {
          price
        }
      }
    }
  }
`;

const CategoryComponent = (props) => {
  const { cart, toggleCart, price, togglePrice, count, toggleCount } =
    useContext(AppContext);
  console.log(props.cat);

  let cat;

  if (props.cat === "all") {
    cat = "";
  } else {
    cat = props.cat;
  }

  console.log(cat, "cat");
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: cat,
    },
  });

  if (loading)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  const products = data.products.nodes;

  const allProducts = products.map((product) => {
    let thisPrice = product.price.replace(/&nbsp;/i, " ");
    product["totalProductCount"] = 1;

    return (
      <div
        key={product.productId}
        className="col-lg-4 col-sm-6 oneOfProduct-border"
      >
        <Link href="/products/[id]" as={`/products/${product.slug}`}>
          <div className="card">
            {product.image ? (
              <img
                className="card-img-top"
                src={product.image.sourceUrl}
                alt={product.image.slug}
              />
            ) : (
              <img
                className="card-img-top"
                src="https://wordpress.deniscarpe.pl/wp/wp-content/uploads/woocommerce-placeholder.png"
                alt="woocommerce-placeholder"
              />
            )}

            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6>{thisPrice}</h6>
            </div>
          </div>
        </Link>
        <button
          className="addToCard"
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
      </div>
    );
  });

  return (
    <div className="container containerProdukty">
      <div className="row containerProducts-border">{allProducts}</div>
    </div>
  );
};

export default CategoryComponent;
