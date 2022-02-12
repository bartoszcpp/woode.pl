import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      about_us_acf {
        image {
          sourceUrl
        }
        subtitle1
        subtitle2
        subtitle3
        subtitle4
        subtitle5
        subtitle6
        subtitle7
        subtitle8
        text1
        text2
        text3
        text4
        text5
        text6
        text7
        text8
        title
        title2
      }
    }
  }
`;

const AboutUsContainer = () => {
  const [content, setContent] = useState([]);

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "o-nas",
    },
  });

  useEffect(() => {
    const computed_data = data ? data.post.about_us_acf : null;
    setContent(computed_data);
  }, [loading]);

  //   if (loading)
  //     return (
  //       <div className="lds-ring">
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //       </div>
  //     );

  return (
    <div className="AboutUs">
      <div className="container">
        <div className="AboutUs__heading">
          <h1>{content ? content.title : null}</h1>
        </div>
        <div className="AboutUs__content-text">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle1 : null}
              <br />
              {content ? content.text1 : null}
            </div>
          </div>
        </div>
        <div className="AboutUs__content-text AboutUs__content-black">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle2 : null}
              <br />
              {content ? content.text2 : null}
            </div>
          </div>
        </div>
        <div className="AboutUs__image">
          <img className="img-fluid" src={content ? ( content.image ? content.image.sourceUrl : null) : null}></img>
          <div className="AboutUs__image--names">
            <span>Dominik Tkacz</span>
            <span>Lucjan Szmuc</span>
          </div>
        </div>
        <div className="AboutUs__content-text">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle3 : null}
              <br />
              {content ? content.text3 : null}
            </div>
          </div>
        </div>
        <div className="AboutUs__content-text AboutUs__content-black">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle4 : null}
              <br />
              {content ? content.text4 : null}
            </div>
          </div>
        </div>
        <div className="AboutUs__heading">
          <h1>{content ? content.title2 : null}</h1>
        </div>
        <div className="AboutUs__content-text">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle5 : null}
              <br />
              {content ? content.text5 : null}
            </div>
          </div>
        </div>
        <div className="AboutUs__content-text AboutUs__content-black">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle6 : null}
              <br />
              {content ? content.text6 : null}
            </div>
          </div>
        </div>
        <div className="AboutUs__content-text">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle7 : null}
              <br />
              {content ? content.text7 : null}
            </div>
          </div>
        </div>
        <div className="AboutUs__content-text AboutUs__content-black">
          <div className="AboutUs__content-text--left row">
            <div className="col-sm-10">
              {content ? content.subtitle8 : null}
              <br />
              {content ? content.text8 : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
