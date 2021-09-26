import React from "react";
import CollectionsComponent from "../components/CollectionsComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";

const collections = () => {
  return (
    <>
      <Header />
      // <BackgroundImage id="home_page" />
      <CollectionsComponent />
      <Footer />
    </>
  );
};

export default collections;
