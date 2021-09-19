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
    productCategories {
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

const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

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

  if (loading || loading_cat)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  const cms_data = data
    ? {
        logo: data.post.home_page_acf.logo.sourceUrl,
      }
    : null;

  const categories = data_cat ? data_cat.productCategories.nodes : null;

  const dropdowns_elements =
    categories.length > 0
      ? categories.map((category) => {
          if (category.slug === "bez-kategorii") return null;
          return (
            <NavDropdown.Item className="Header__dropdown--element">
              <Link href="/kolekcje/[cat]" as={`/kolekcje/${category.slug}`}>
                {category.name}
              </Link>
            </NavDropdown.Item>
          );
        })
      : null;

  return (
    <>
      <Navbar className="Header navbar" fixed="top" expand="lg">
        <div className="container justify-content-between">
          <Navbar.Brand className="Header__logo" href="/">
            <img
              className="img-fluid logoPng"
              src={cms_data ? cms_data.logo : ""}
              alt=""
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="Header__collapse" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">STRONA GŁÓWNA</Nav.Link>
              <NavDropdown
                id="basic-nav-dropdown"
                show={show}
                onMouseLeave={hideDropdown}
              >
                {dropdowns_elements}
              </NavDropdown>
              <div className="Header__dropdown" onMouseEnter={showDropdown}>
                <Link href="/[collections]" as={`/kolekcje`}>
                  OFERTA
                </Link>
              </div>
              <Nav.Link href="/contact">O NAS</Nav.Link>
              <Nav.Link href="/contact">KONTAKT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
