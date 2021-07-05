import { Component } from 'react';
import { Input } from './input';
import { address } from './cms-data/footer-data';
import { formData, contactHeading, legalInfo, authReps } from './cms-data/contact-data';

const addressBoxes = address.map((element, index) =>
  <div key={`contact-${index}`} className="contact-section">
    <h3>{element.title}</h3>
    <div className="adress">
      <span className="contact-info">{element.street}</span>
      <span className="contact-info">{element.postal}</span>
    </div>
  </div>
);

const authorizedReps = authReps.map((element, index) =>
  <div key={`contact-${index}`} className="contact-section">
    <h3>{element.title}</h3>
    <span className="contact-info">{element.name}</span>
    <div className="adress">
      <span className="contact-info">{element.street}</span>
      <span className="contact-info">{element.postal}</span>
    </div>
    <div className="numbers">
      <span className="contact-info">{element.state}</span>
      <span className="contact-info">{element.info}</span>
    </div>
  </div>
)


class ContactInfo extends Component {
  render() {
    return (
      <div className="text">
        <div className="contact-section">
          <h3>{legalInfo.name}</h3>
          <div className="adress">
            <span className="contact-info">{legalInfo.street}</span>
            <span className="contact-info">{legalInfo.postal}</span>
          </div>
          <div className="numbers">
            <span className="contact-info">{legalInfo.NIP}</span>
            <span className="contact-info">{legalInfo.KRS}</span>
            <span className="contact-info">{legalInfo.REGON}</span>
          </div>
        </div>
        {addressBoxes}
        {authorizedReps}
      </div>
    )
  }
}

class ContactForm extends Component {
  render() {
    return (
      <form action="POST" className="liaison-form">
        <Input type='text' for='name' placeholder={formData.name} />
        <Input type='text' for='email' placeholder={formData.mail} />
        <Input for='message' width="30" height="10" placeholder={formData.message} />
        <Input type='button' value={formData.button} />
      </form>
    )
  }
}


export class ContactSection extends Component {
  render() {
    return (
      <section className="contact">
        <div className="container">
          <h2>{contactHeading}</h2>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    )
  }
}