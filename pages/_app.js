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
      const el = document.getElementById("cky-consent-banner");
      const isVisible = el && window.getComputedStyle(el).display !== "none";
      setBannerVisible(!!isVisible);
    };

    checkBanner();
    const interval = setInterval(checkBanner, 500);

    return () => clearInterval(interval);
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
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
                marginTop: "20%",
                padding: "0 20px",
              }}
            >
              Proszę wybrać ustawienia cookies, aby kontynuować korzystanie ze
              strony.
            </div>
          </div>
        )}
        <div
          style={{
            pointerEvents: bannerVisible ? "none" : "auto",
            filter: bannerVisible ? "blur(2px)" : "none",
          }}
        >
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </AppProvider>
  );
}
