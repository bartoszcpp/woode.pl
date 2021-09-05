import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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

const Header = () => {
  let cms_data = {
    logo: "",
  };

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "home_page",
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

  if (data) {
    cms_data = {
      logo: data.post.home_page_acf.logo.sourceUrl,
    };
  }

  return (
    <>
      <Navbar className="Header navbar" fixed="top" expand="lg">
        <div className="container justify-content-between">
          <Navbar.Brand className="Header__logo" href="/">
            <img className="img-fluid logoPng" src={cms_data.logo} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="Header__collapse" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">STRONA GŁÓWNA</Nav.Link>
              <Nav.Link href="/collections/obuwie">KATEGORIA 1</Nav.Link>
              <Nav.Link href="/collections/akcesoria">KATEGORIA 2</Nav.Link>
              <Nav.Link href="/contact">KONTAKT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
