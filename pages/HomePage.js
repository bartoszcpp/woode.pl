import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";
import ContentBlock from "../components/ContentBlock";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage id="home_page" />
      <Products count1={2} count2={3} number={4} category="home_page" />
      <ContentBlock id="home_page" />
      <ContactForm />
    </>
  );
};

export default HomePage;
