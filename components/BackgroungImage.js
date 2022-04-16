import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Flickity from "react-flickity-component";

const POSTS_QUERY = gql`
  query MyQuery($data: ID!) {
    post(id: $data, idType: SLUG) {
      home_page_acf {
        backgroundImage1 {
          sourceUrl
        }
        backgroundImage2 {
          sourceUrl
        }
        backgroundImage3 {
          sourceUrl
        }
      }
    }
  }
`;

const BackgroundImage = (props) => {
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "home_page",
    },
  });

  const flickity_options = {
    pageDots: false,
    wrapAround: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false,
  };

    const backgroundImages = [
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2022/02/stol-okragly-kuchenny-jadalniany-orzech-wloski-niebieska-zywica-3.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/stolik-kawowy-czeczota-topoli-niebieska-zywica-5-e1648665387720.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/lozko-stara-belka-stara-deska-1.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2022/02/zegar-orzech-wloski-biala-metalowa-obrecz-2.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/stolik-nocny-stolik-kawowy-orzech-wloski-plastry-miodu-10.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/stara-beczka-debowa-szklo-hartowane-15.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/lustro-czeczot-topola-naturalny-oflis-2.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/stolik-kawowy-orzech-wloski-czarna-zywica-nogi-blacha-4.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/toaletka-loft-stary-stol-stolarski-stare-belki-oswietlenie-15.jpg)`},
      {backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2022/02/stol-do-jadalni-czeczota-topoli-szyba-hartowana-9.jpg)`},
    ]

    console.log("backgroundImages", backgroundImages)
    console.log("backgroundImages. len", backgroundImages.length)

    const backgroundImagesContent = backgroundImages.map(item => (
      <div className="carousel-cell">
        <div className="Hero" style={item || null}>
          <div className="Hero__overlay"></div>
          <div className="Hero__content"></div>
        </div>
      </div>
    ))

  return (
    <Flickity className={"background-carousel"} options={flickity_options}>
      {backgroundImagesContent}
    </Flickity>
  );
};

export default BackgroundImage;
