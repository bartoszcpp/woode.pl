import "bootstrap/dist/css/bootstrap.css";
import "../style/style.css";
import "cross-fetch/polyfill";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { AppProvider } from "../components/contex/AppContex";
import React, { useEffect } from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "cookieyes";
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://cdn-cookieyes.com/client_data/4c511732de5201b48af15e9a/script.js";
    document.body.appendChild(script);
  }, []);
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppProvider>
  );
}
