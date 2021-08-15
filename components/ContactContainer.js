import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactContainer = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-sm-8 formularz">
          <ContactForm />
        </div>
        <div className="col-lg-6 col-sm-4 daneKontaktowe contact">
          <h3>Deni</h3>
          <p className="font-weight-bold">Adres</p>
          <p>ul. Marka 65</p>
          <p>37-100 Łańcut</p>
          <br />
          <p className="font-weight-bold">E-mail</p>
          <p>bartosz.cp@gmail.com</p>
          <br />
          <p className="font-weight-bold">Telefon</p>
          <p>502 116 119</p>
          <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
          <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
