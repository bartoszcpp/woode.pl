import { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      subject: "",
      email: "",
      message: "",
      info: "",
    };
  }

  render() {
    return (
      <div id="contact_form" className="container">
        <div className="contact">
          {this.props.is_pdp && (
            <h2>Skontaktuj się aby zamówić ten produkt!</h2>
          )}
          {!this.props.is_pdp && <h2>Skontaktuj się z nami!</h2>}
          <form className="form" method="POST" encType="multipart/form-data">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Imie"
              value={this.state.fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
            {this.props.is_pdp && (
              <input
                type="text"
                id="subject"
                name="subject"
                value={`Temat: ${this.props.name}`}
              />
            )}
            {!this.props.is_pdp && (
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Temat"
                value={this.state.subject}
                onChange={(e) => this.setState({ subject: e.target.value })}
              />
            )}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Wiadomość"
              onChange={(e) => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>
            <button
              className="submit btn-mod btn-border btn-large"
              onClick={(e) => this.handleFormSubmit(e)}
            >
              WYŚLIJ WIADOMOŚĆ
            </button>
            <p>{this.state.info}</p>
          </form>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://getform.io/f/d9ed422f-e4d4-4ba3-adeb-7426c57d5898",
      data: {
        nazwa: this.state.fname,
        temat: this.state.subject,
        email: this.state.email,
        wiadomość: this.state.message,
      },
    })
      .then((r) => {
        this.setState({ info: "Dziękujemy!" });
      })
      .catch((r) => {
        this.setState({ info: "Coś poszło nie tak :(" });
      });
  }
}

export default ContactForm;
