import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import LazyImage from "./LazyImage";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        aboutImage {
          sourceUrl
          slug
        }
        aboutDescription
      }
    }
  }
`;

const ContentBlock = (props) => {
  const { id } = props;
  let cms_data = {
    aboutImage: "",
    aboutDescription: "",
  };

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: id,
    },
  });

  // if (loading)
  //   return (
  //     <div className="lds-ring">
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </div>
  //   );

  if (data) {
    cms_data = {
      aboutImage: data.post.home_page_acf.aboutImage.sourceUrl,
      aboutDescription: data.post.home_page_acf.aboutDescription,
    };
  }

  return (
    <div className="ContentBlock">
      <div className="row">
        <div className="col-md-6 ContentBlock__description">
          <h2>O nas</h2>
          <p>{cms_data.aboutDescription}</p>
        </div>
        <div className="col-md-6 ContentBlock__image">
          <img
            src={cms_data.aboutImage}
            className="img-fluid ContentBlock__img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
