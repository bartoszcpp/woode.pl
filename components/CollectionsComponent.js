import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import Link from "next/link";

const POSTS_QUERY = gql`
  {
    productCategories(first: 1000) {
      nodes {
        id
        image {
          altText
          sourceUrl
        }
        slug
        name
      }
    }
  }
`;

const CollectionsComponent = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  const categories = data ? data.productCategories.nodes : null;

  const list_of_categories = categories
    ? categories.map((category) => {
        if (category.slug === "bez-kategorii" || category.slug === "home_page")
          return null;
        return (
          <div className="col-md-4 CategoryTile">
            <Link href="/kolekcje/[cat]" as={`/kolekcje/${category.slug}`}>
              <div className="CategoryTile__container">
                {category.image ? (
                  <div
                    className="CategoryTile__image"
                    style={{
                      backgroundImage: `url(${category.image.sourceUrl})`,
                    }}
                  >
                    <div className="CategoryTile__image--placeholder">
                      <h3>{category.name}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="CategoryTile__image"></div>
                )}
                <h3></h3>
              </div>
            </Link>
          </div>
        );
      })
    : "";

  return (
    <>
      <div className="container">
        <div className="row CollectionsContainer">{list_of_categories}</div>
      </div>
    </>
  );
};

export default CollectionsComponent;
