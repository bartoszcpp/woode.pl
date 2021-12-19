import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ProductTile from "./ProductTile";
import ImgProductCat from "./ImgProductCat";

const POSTS_QUERY = gql`
  query MyQuery($data: String!) {
    products(where: { category: $data }, first: 1000) {
      nodes {
        name
        slug
        ... on SimpleProduct {
          price
        }
        image {
          sourceUrl
        }
        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

const POSTS_QUERY_CATEGORY = gql`
  query MyQuery($data: ID!) {
    productCategory(id: $data, idType: SLUG) {
      name
    }
  }
`;

const Products = (props) => {
  const { category, pcp } = props;

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: category,
    },
  });

  const {
    loading: loading_cat,
    error: error_cat,
    data: data_cat,
  } = useQuery(POSTS_QUERY_CATEGORY , {
    variables: {
      data: category,
    },
  });

  //let count = 1;
  if (loading)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (error) return <p>Something wrong happened!</p>;

  console.log(data, "data4567");
  //const categories = data.productCategories.nodes;

  const products = data.products.nodes.map((product, index) => (
    <ProductTile
      key={index}
      image={product.image.sourceUrl}
      name={product.name}
      price={product.price}
      slug={product.slug}
      gallery_images={product.galleryImages}
    />
  ));

  const all_collections = "wszystkie";
  const category_name = category === "home_page" ? "Bestsellery" : data_cat.productCategory.name;

  return (
    <>
      <div className="Products container">
        <h1 className="Products__title">{category_name}</h1>
        <div className="Products__container row">{products}</div>
        {!pcp ? (
          <div className="Products__read-more">
            <div className="Products__read-more--container">
              <div className="Products__read-more--background">
                <Link
                  href="/kolekcje/[cat]"
                  as={`/kolekcje/${all_collections}`}
                >
                  Zobacz więcej
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Products;
