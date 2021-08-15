import { useRouter } from "next/router";
import Header from "../../components/Header";
import BackgroundImage from "../../components/BackgroungImage";
import CategoryComponent from "../../components/CategoryComponent";
import Footer from "../../components/Footer";

const cat = () => {
  const router = useRouter();
  const { cat } = router.query;

  return (
    <>
      <Header />
      <BackgroundImage id="home_page" />
      <CategoryComponent cat={cat} />
      <Footer />
    </>
  );
};

export default cat;
