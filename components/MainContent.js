import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        content1Heading
        content1Image {
          sourceUrl
        }
        content1Text
        content2Image {
          sourceUrl
        }
        content2Text
        content3Heading
        content3Image {
          sourceUrl
        }
        content3Text
      }
    }
  }
`;

const MainContent = () => {
  const [content, setContent] = useState([]);

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "home_page",
    },
  });

  useEffect(() => {
    const computed_data = data ? data.post.home_page_acf : null;
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
    <div className="MainContent">
      <div className="container">
        <div class="Main__header">
          <h1>{content ? content.content1Heading : null}</h1>
        </div>
        <div class="Main__row row">
          <div class="Main__content col-6">
            <div class="Main__text">
              {content ? content.content1Text : null}
            </div>
          </div>
          <div class="Main__image col-6">
            <img
              class="img-fluid"
              src={
                content && content.content1Image
                  ? content.content1Image.sourceUrl
                  : null
              }
              alt=""
            />
          </div>
        </div>
        <div class="Main__row row">
          <div class="Main__image col-6">
            <img
              class="img-fluid"
              src={
                content && content.content2Image
                  ? content.content2Image.sourceUrl
                  : null
              }
              alt=""
            />
          </div>
          <div class="Main__content col-6">
            <div class="Main__text">
              {content ? content.content2Text : null}
            </div>
          </div>
        </div>
        <div class="Main__header">
          <h1>{content ? content.content3Heading : null}</h1>
        </div>
        <div class="row">
          <div class="Main__content col-6">
            <div class="Main__text">
              {content ? content.content3Text : null}
            </div>
            <div class="Main__contact-btn">
              <button class="btn-more__container">
                <div class="btn-more__background">
                  <a href="/collections/all">Kontakt</a>
                </div>
              </button>
            </div>
          </div>
          <div class="Main__image col-6">
            <img
              class="img-fluid"
              src={
                content && content.content3Image
                  ? content.content3Image.sourceUrl
                  : null
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
