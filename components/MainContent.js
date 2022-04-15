import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import LazyLoad from 'react-lazyload';

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        content1Heading
        content1Image {
          sourceUrl
        }
        content1Text
        content2Heading
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
        <div className="Main__header">
          <h1>RĘCZNA PRODUKCJA</h1>
        </div>
        <div className="Main__row row">
          <div className="Main__content col-md-6">
            <div className="Main__text">
              Starannie dobieramy, wycinamy i łączymy poszczególne elementy, aby mogły tworzyć niezniszczalne, solidne konstrukcje. Z pasją dobieramy odpowiednie dodatki wizualne, aby nasze stolarskie dzieła były jeszcze bardziej wyjątkowe.
            </div>
          </div>
          <div className="Main__image col-md-6">
            <LazyLoad height={200}>
              <img
                className="img-fluid"
                src='https://wordpress.woode.pl/wp-content/uploads/2021/09/stara-beczka-debowa-szklo-hartowane-6.jpg'
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
        <div className="Main__header">
          <h1>SZACUNEK DO NATURY</h1>
        </div>
        <div className="Main__row row">
          <div className="Main__image col-md-6">
            <LazyLoad height={200}>
              <img
                className="img-fluid"
                src='https://wordpress.woode.pl/wp-content/uploads/2021/09/toaletka-loft-stary-stol-stolarski-stare-belki-oswietlenie-10.jpg'
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="Main__content col-md-6">
            <div className="Main__text">
              Do daru natury jakim jest drewno, podchodzimy z pokorą i szacunkiem, dlatego też jedną z głównych idei naszej działalności jest ponowne przetwórstwo.
            </div>
          </div>
        </div>
        <div className="Main__header">
          <h1>MEBLE NA ŻYCZENIE</h1>
        </div>
        <div className="row">
          <div className="Main__content col-md-6">
            <div className="Main__text">
              Staramy się spełniać oczekiwania, a nawet być ponad nimi. Tworzymy na specjalne życzenie klientów, chcąc urzeczywistnić ich wizje.
            </div>
            <div className="Main__contact-btn">
              <button className="btn-more__container">
                <div className="btn-more__background">
                  <a href="/collections/all">Kontakt</a>
                </div>
              </button>
            </div>
          </div>
          <div className="Main__image col-md-6">
            <LazyLoad height={200}>
              <img
                className="img-fluid"
                src='https://wordpress.woode.pl/wp-content/uploads/2022/02/stol-do-jadalni-czeczota-topoli-szyba-hartowana-9.jpg'
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
