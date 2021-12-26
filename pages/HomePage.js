import Header from "../components/Header";
import BackgroundImage from "../components/BackgroungImage";
import Products from "../components/Products";
import MainContent from "../components/MainContent";

const HomePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <MainContent />
      <Products category="home_page" pcp={false} />
    </>
  );
};

export default HomePage;
