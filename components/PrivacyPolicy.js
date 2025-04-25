import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="heading">Polityka Prywatności</h1>

      <section className="section">
        <h2 className="section-heading">1. Informacje ogólne</h2>
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania danych
          osobowych i wykorzystywania plików cookies na stronie internetowej
          www.woode.pl dostępnej pod adresem: www.woode.pl
        </p>
        <p>
          Administratorem danych jest Lucjan Szmuc The loft gallery, z siedzibą
          w Wysoka 74a, NIP: 8151619718, e-mail:{" "}
          <a href="mailto:lucjanszmuc@gmail.com">lucjanszmuc@gmail.com</a>
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">
          2. Zakres i cel przetwarzania danych
        </h2>
        <ul>
          <li>kontaktu poprzez formularz kontaktowy,</li>
          <li>odpowiedzi na zapytania użytkowników,</li>
          <li>realizacji usług lub zamówień (jeśli dotyczy),</li>
          <li>prowadzenia statystyk i analiz działania strony,</li>
          <li>
            działań marketingowych, w tym remarketingu (np. Facebook, Google),
          </li>
          <li>zabezpieczenia strony przed nadużyciami.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">3. Rodzaje przetwarzanych danych</h2>
        <ul>
          <li>imię i nazwisko,</li>
          <li>adres e-mail,</li>
          <li>numer telefonu (jeśli użytkownik go poda),</li>
          <li>adres IP,</li>
          <li>dane przeglądarki i systemu operacyjnego,</li>
          <li>dane behawioralne (sposób poruszania się po stronie),</li>
          <li>dane zawarte w wiadomościach przesyłanych przez formularz.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">4. Integracja z Facebookiem</h2>
        <p>
          Na stronie mogą być wykorzystywane wtyczki społecznościowe Facebooka
          oraz Facebook Pixel, który umożliwia:{" "}
        </p>
        <ul>
          <li>śledzenie konwersji,</li>
          <li>prowadzenie kampanii remarketingowych,</li>
          <li>analizowanie skuteczności reklam.</li>
        </ul>
        <p>
          Szczegóły polityki prywatności Facebooka:{" "}
          <a href="https://www.facebook.com/privacy/policy" target="_blank">
            https://www.facebook.com/privacy/policy
          </a>
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">5. Google Analytics</h2>
        <p>
          Strona korzysta z usługi Google Analytics (Google LLC, z siedzibą w
          USA) do analizy ruchu i zachowań użytkowników.
        </p>
        <p>Zbierane dane to m.in.:</p>
        <ul>
          <li>adres IP,</li>
          <li>rodzaj przeglądarki,</li>
          <li>czas spędzony na stronie,</li>
          <li>odwiedzane podstrony.</li>
        </ul>
        <p>
          Dane są przetwarzane anonimowo i służą wyłącznie celom statystycznym.
          Polityka Google:{" "}
          <a href="https://policies.google.com/privacy" target="_blank">
            https://policies.google.com/privacy
          </a>
        </p>
        <p>
          Dodatek blokujący Google Analytics:{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">6. Pliki cookies</h2>
        <ul>
          <li>zapewnienie prawidłowego działania strony,</li>
          <li>prowadzenie anonimowych statystyk,</li>
          <li>dostosowanie treści i reklam do preferencji użytkownika,</li>
          <li>
            działanie narzędzi marketingowych (np. Facebook Pixel, Google
            Analytics).
          </li>
        </ul>
        <p>
          Użytkownik może samodzielnie zmienić ustawienia cookies w swojej
          przeglądarce.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">7. Udostępnianie danych</h2>
        <ul>
          <li>firmom hostingowym,</li>
          <li>
            dostawcom narzędzi analitycznych i reklamowych (np. Google,
            Facebook),
          </li>
          <li>organom publicznym – na podstawie przepisów prawa.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">8. Prawa użytkownika</h2>
        <ul>
          <li>dostępu do swoich danych,</li>
          <li>sprostowania danych,</li>
          <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>wniesienia sprzeciwu,</li>
          <li>złożenia skargi do Prezesa UODO.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-heading">9. Zmiany polityki prywatności</h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
          Polityce Prywatności. Nowa wersja będzie publikowana na stronie
          internetowej.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
