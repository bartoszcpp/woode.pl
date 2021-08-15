import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      acf_field {
        homeText1
        homeText2
        backgroundImage {
          sourceUrl
        }
      }
    }
  }
`;

const BackgroundImage = (props) => {
  const { id } = props;

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: id,
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

  const divStyle = {
    backgroundImage: `url(${data.post.acf_field.backgroundImage.sourceUrl})`,
  };

  return (
    <div className="Hero" style={divStyle}>
      <div className="Hero__overlay"></div>
      <div className="Hero__content">
        <div className="Hero__flag Polish__flag">
          <div className="Hero__flag--red Polish__flag--red"></div>
          <div className="Hero__flag--white Polish__flag--white"></div>
        </div>
        <h1>{data.post.acf_field.homeText1}</h1>
        <h2>{data.post.acf_field.homeText2}</h2>
      </div>
    </div>
  );
};

export default BackgroundImage;
