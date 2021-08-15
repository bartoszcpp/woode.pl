import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import LazyImage from "./LazyImage";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      acf_field {
        kontent1Obrazek {
          sourceUrl
        }
        kontent1Tresc
        kontent1Tytul
        kontent2Obrazek {
          sourceUrl
        }
        kontent2Tresc
        kontent2Tytul
      }
    }
  }
`;

const ContentBlock = (props) => {
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

  return (
    <div className="ContentBlock">
      <div className="container ContentBlock__first">
        <div className="row">
          <div className="col-6 ContentBlock__content">
            <h3>{data.post.acf_field.kontent1Tytul}</h3>
            <p>{data.post.acf_field.kontent1Tresc}</p>
          </div>
          <div className="col-6">
            <LazyImage image={data.post.acf_field.kontent1Obrazek} />
          </div>
        </div>
      </div>
      <div className="container ContentBlock__second">
        <h3>{data.post.acf_field.kontent2Tytul}</h3>
        <div className="row">
          <div className="col-6">
            <LazyImage image={data.post.acf_field.kontent2Obrazek} />
          </div>
          <div className="col-6 ContentBlock__content">
            <p>{data.post.acf_field.kontent2Tresc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
