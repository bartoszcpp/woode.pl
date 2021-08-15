import "bootstrap/dist/css/bootstrap.css";
import "../style/style.css";
import "cross-fetch/polyfill";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { AppProvider } from "../components/contex/AppContex";
import "../style/global.scss";
import "../style/Header.scss";
import "../style/Hero.scss";
import "../style/Products.scss";
import "../style/ContentBlock.scss";
import "../style/ContactForm.scss";
import "../style/Footer.scss";
import "../style/ProductOverview.scss";
import "flickity/dist/flickity.min.css";
//import "../style/flickity.css";

const client = new ApolloClient({
  uri: "https://wordpress.deniscarpe.pl/wp/graphql",
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppProvider>
  );
}
