import Head from "next/head";
import HomePage from "./HomePage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Woode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
