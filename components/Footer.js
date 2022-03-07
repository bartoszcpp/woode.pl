import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import Link from "next/link";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        logo {
          sourceUrl
        }
      }
    }
  }
`;

const POSTS_QUERY_CATEGORIES = gql`
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

const Footer = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "home_page",
    },
  });

  const {
    loading: loading_cat,
    error: error_cat,
    data: data_cat,
  } = useQuery(POSTS_QUERY_CATEGORIES);

  const cms_data = data
    ? {
        logo: data.post.home_page_acf.logo.sourceUrl,
      }
    : null;

  const categories = data_cat ? data_cat.productCategories.nodes : null;

  const categories_elements =
    categories && categories.length > 0
      ? categories.map((category, index) => {
          if (category.slug === "bez-kategorii" || category.slug === "home_page") return null;
          return (
            <Link key={index} href="/kolekcje/[cat]" as={`/kolekcje/${category.slug}`}>
              {category.name}
            </Link>
          );
        })
      : null;

  return (
    <footer>
      <div className="Footer container">
        <div className="row">
          <div className="Footer__row col-md-4">
            <img
              className="img-fluid logoPng"
              src={cms_data ? cms_data.logo : ""}
              alt=""
            />{" "}
          </div>
          <div className="Footer__row col-md-4">
            <div className="Footer__menu">
              <Link href="/">STRONA GŁÓWNA</Link>
              <Link href="/[collections]" as={`/kolekcje`}>
                KOLEKCJE
              </Link>
              <Nav.Link href="/onas">O NAS</Nav.Link>
              <Nav.Link href="/kontakt">KONTAKT</Nav.Link>
            </div>
          </div>
          <div className="Footer__row col-md-4">
            <div className="Footer__menu">{categories_elements}</div>
          </div>
        </div>
      </div>
      <p>studio-web.pl</p>
    </footer>
  );
};

export default Footer;
