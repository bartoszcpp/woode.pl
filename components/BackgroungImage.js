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
  // let div_style1 = {
  //   backgroundImage: "",
  // };

  // let div_style2 = {
  //   backgroundImage: "",
  // };

  // let div_style3 = {
  //   backgroundImage: "",
  // };

  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {
      data: "home_page",
    },
  });

  const flickity_options = {
    pageDots: false,
    wrapAround: true,
    autoPlay: true,
  };

    const div_style1 = {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2022/02/stol-okragly-kuchenny-jadalniany-orzech-wloski-niebieska-zywica-3.jpg)`,
    };
    const div_style2 = {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/stolik-kawowy-czeczota-topoli-niebieska-zywica-5-e1648665387720.jpg)`,
    };
    const div_style3 = {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/lozko-stara-belka-stara-deska-1.jpg)`,
    };
    // const div_style4 = {
    //   backgroundImage: `url(${data.post.home_page_acf.backgroundImage3.sourceUrl})`,
    // };
    // const div_style5 = {
    //   backgroundImage: `url(${data.post.home_page_acf.backgroundImage3.sourceUrl})`,
    // };

  return (
    <Flickity className={"background-carousel"} options={flickity_options}>
      <div className="carousel-cell">
        <div className="Hero" style={div_style1 || null}>
          <div className="Hero__overlay"></div>
          <div className="Hero__content"></div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="Hero" style={div_style2 || null}>
          <div className="Hero__overlay"></div>
          <div className="Hero__content"></div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="Hero" style={div_style3 || null}>
          <div className="Hero__overlay"></div>
          <div className="Hero__content"></div>
        </div>
      </div>
    </Flickity>
  );
};

export default BackgroundImage;
