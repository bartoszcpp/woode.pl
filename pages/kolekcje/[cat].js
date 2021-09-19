import { useRouter } from "next/router";
import Header from "../../components/Header";
import BackgroundImage from "../../components/BackgroungImage";
import Footer from "../../components/Footer";
import Products from "../../components/Products";

const cat = () => {
  const router = useRouter();
  const { cat } = router.query;

  return (
    <>
      <Header />
      <BackgroundImage id="home_page" />
      <Products category={cat} pcp={true} />
      <Footer />
    </>
  );
};

export default cat;
