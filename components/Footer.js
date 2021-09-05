import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <img className="img-fluid logoPng" src="/logo.png" alt="" /> <br />
      <div className="footerMenu">
        <Link href="/">STRONA GŁÓWNA</Link>
        <Link href="/collections/obuwie">KATEGORIA 1</Link>
        <Link href="/collections/akcesoria">KATEGORIA 2</Link>
        <Link href="/contact">KONTAKT</Link>
      </div>
      <p>studio-web.pl</p>
    </footer>
  );
};

export default Footer;
