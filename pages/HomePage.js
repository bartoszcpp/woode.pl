import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";
import ContentBlock from "../components/ContentBlock";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import MainContent from "../components/MainContent";

const HomePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <MainContent />
      <Products category="home_page" />
    </>
  );
};

export default HomePage;
