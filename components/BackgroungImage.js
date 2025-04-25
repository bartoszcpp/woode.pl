import React from "react";
import Flickity from "react-flickity-component";

const BackgroundImage = () => {
  const flickity_options = {
    pageDots: false,
    wrapAround: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false,
  };

  const backgroundImages = [
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2022/02/stol-okragly-kuchenny-jadalniany-orzech-wloski-niebieska-zywica-3.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/stolik-kawowy-czeczota-topoli-niebieska-zywica-5-e1648665387720.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/lozko-stara-belka-stara-deska-1.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2022/02/zegar-orzech-wloski-biala-metalowa-obrecz-2.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/10/stolik-nocny-stolik-kawowy-orzech-wloski-plastry-miodu-10.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/stara-beczka-debowa-szklo-hartowane-15.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/lustro-czeczot-topola-naturalny-oflis-2.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/stolik-kawowy-orzech-wloski-czarna-zywica-nogi-blacha-4.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2021/09/toaletka-loft-stary-stol-stolarski-stare-belki-oswietlenie-15.jpg)`,
    },
    {
      backgroundImage: `url(https://wordpress.woode.pl/wp-content/uploads/2022/02/stol-do-jadalni-czeczota-topoli-szyba-hartowana-9.jpg)`,
    },
  ];

  const backgroundImagesContent = backgroundImages.map((item) => (
    <div className="carousel-cell">
      <div className="Hero" style={item || null}>
        <div className="Hero__overlay"></div>
        <div className="Hero__content"></div>
      </div>
    </div>
  ));

  return (
    <Flickity className={"background-carousel"} options={flickity_options}>
      {backgroundImagesContent}
    </Flickity>
  );
};

export default BackgroundImage;
