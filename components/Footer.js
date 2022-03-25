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

const POSTS_QUERY_CONTACT = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      contact_acf {
        address1
        address2
        email
        phoneNumber1
        phoneNumber2
        facebook
        instagram
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

  const { loading: loading_cont, error: error_cont, data: data_cont } = useQuery(POSTS_QUERY_CONTACT, {
    variables: {
      data: "kontakt",
    },
  });

  const cms_data = data
    ? {
        logo: data.post.home_page_acf.logo.sourceUrl,
      }
    : null;

  const contact_data = data_cont
    ? {
        contact: data_cont.post.contact_acf,
      }
    : null;
  

  console.log("contact_data", contact_data)
  console.log("data_cont", data_cont)

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
            <p className="font-weight-bold">E-mail:</p>
            <p>{contact_data?.contact?.email}</p>
            <br />
            <p className="font-weight-bold">Telefon:</p>
            <p>{contact_data?.contact?.phoneNumber1}</p>
            <p>{contact_data?.contact?.phoneNumber2}</p>
          </div>
        </div>
      </div>
      <p>studio-web.pl</p>
    </footer>
  );
};

export default Footer;
