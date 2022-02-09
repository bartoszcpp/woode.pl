import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useState, useEffect } from "react";

const POSTS_QUERY = gql`
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

const ContactContainer = () => {
  const [content, setContent] = useState([]);

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "kontakt",
    },
  });

  useEffect(() => {
    const computed_data = data ? data.post.contact_acf : null;
    setContent(computed_data);
  }, [loading]);

  return (
    <>
      <div className="container ContactContainer row">
        <div className="col-md-6 formularz">
          <ContactForm />
        </div>
        <div className="col-md-6 daneKontaktowe contact">
          <h3>Woode</h3>
          <p className="font-weight-bold">Adres</p>
          <p>{content ? content.address1 : null}</p>
          <p>{content ? content.address2 : null}</p>
          <br />
          <p className="font-weight-bold">E-mail</p>
          <p>{content ? content.email : null}</p>
          <br />
          <p className="font-weight-bold">Telefon</p>
          <p>{content ? content.phoneNumber1 : null}</p>
          <p>{content ? content.phoneNumber2 : null}</p>
          <div className="ContactContainer__social-icons">
            <a href={content ? content.facebook : ""}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={content ? content.instagram : ""}><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
