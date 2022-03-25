import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        logoBlack {
          sourceUrl
        }
        facebook
        instagram
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

const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  let is_tablet;

  if (typeof window !== "undefined") {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    is_tablet = width <= 991;
  } else {
    is_tablet = false;
  }

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
        logo: data.post.home_page_acf.logoBlack.sourceUrl,
        facebook: data.post.home_page_acf.facebook,
        instagram: data.post.home_page_acf.instagram,
      }
    : null;

  const categories = data_cat ? data_cat.productCategories.nodes : null;

  const categoriesInne = categories?.findIndex(category => category.slug === 'inne');
  const categoriesWszystkie = categories?.findIndex(category => category.slug === 'wszystkie');
  categories?.push(categories?.splice(categoriesInne, 1)[0]);
  categories?.push(categories?.splice(categoriesWszystkie, 1)[0]);

  const  dropdowns_elements = categories ?
    categories.length > 0
      ? categories.map((category, index) => {
          if (category.slug === "bez-kategorii" || category.slug === "home_page") return null;
          return (
            <NavDropdown.Item key={index} className="Header__dropdown--element">
              <Link href="/kolekcje/[cat]" as={`/kolekcje/${category.slug}`}>
                {category.name}
              </Link>
            </NavDropdown.Item>
          );
        })
      : null
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
              <div
                className="Header__dropdown Header__dropdown--desktop"
                onMouseEnter={showDropdown}
              >
                <Link href="/[collections]" as={`/kolekcje`}>
                  {is_tablet ? "KOLEKCJE" : "OFERTA"}
                </Link>
              </div>
              {is_tablet ? (
                <div className="Header__dropdown" onClick={showDropdown}>
                  OFERTA
                </div>
              ) : (
                ""
              )}
              <NavDropdown
                id="basic-nav-dropdown"
                show={show}
                onMouseLeave={hideDropdown}
              >
                {dropdowns_elements}
              </NavDropdown>
              <Nav.Link href="/onas">O NAS</Nav.Link>
              <Nav.Link href="/kontakt">KONTAKT</Nav.Link>
              {is_tablet ? (
                <div className="Header__social-icon">
                  <a href={cms_data ? cms_data.facebook : ""}><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href={cms_data ? cms_data.instagram : ""}><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
          {!is_tablet ? (
            <div className="Header__social-icon">
              <a href={cms_data ? cms_data.facebook : ""}><FontAwesomeIcon icon={faFacebook} /></a>
              <a href={cms_data ? cms_data.instagram : ""}><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          ) : (
            ""
          )}
        </div>
      </Navbar>
    </>
  );
};

export default Header;
