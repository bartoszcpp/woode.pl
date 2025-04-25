import "bootstrap/dist/css/bootstrap.css";
import "../style/style.css";
import "cross-fetch/polyfill";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { AppProvider } from "../components/contex/AppContex";
import React, { useEffect, useState } from "react";
import "../style/global.scss";
import "../style/Header.scss";
import "../style/Hero.scss";
import "../style/Products.scss";
import "../style/ContentBlock.scss";
import "../style/ContactForm.scss";
import "../style/Footer.scss";
import "../style/ProductOverview.scss";
import "../style/MainContent.scss";
import "../style/CollectionsComponent.scss";
import "../style/AboutUs.scss";
import "flickity/dist/flickity.min.css";
import "../style/PrivacyPolicy.scss";
//import "../style/flickity.css";

const client = new ApolloClient({
  uri: "https://wordpress.woode.pl/graphql",
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "cookieyes";
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://cdn-cookieyes.com/client_data/4c511732de5201b48af15e9a/script.js";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const checkBanner = () => {
      const banner = document.querySelector(".cky-consent-container");

      if (!banner) {
        setBannerVisible(false);
        return;
      }

      const isHidden = banner.classList.contains("cky-hide");
      setBannerVisible(!isHidden);
    };

    checkBanner();

    const observer = new MutationObserver(checkBanner);
    observer.observe(document.body, { childList: true, subtree: true });

    const interval = setInterval(checkBanner, 1000);
    setTimeout(() => clearInterval(interval), 10000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <AppProvider>
      <ApolloProvider client={client}>
        {bannerVisible && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 9999,
              pointerEvents: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "18px",
              textAlign: "center",
              padding: "20px",
            }}
          />
        )}
        <div
          style={{
            pointerEvents: bannerVisible ? "none" : "auto",
            filter: bannerVisible ? "blur(2px)" : "none",
            transition: "filter 0.3s ease",
          }}
        >
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </AppProvider>
  );
}
