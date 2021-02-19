import { Component } from 'react';
import { Input } from "./input";
import { liaisonText } from './cms-data/liaison-data';
import { formData } from './cms-data/contact-data';


class LiaisonText extends Component {
  render() {
    return (
      <div className="text">
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

class LiaisonForm extends Component {
  render() {
    return (
      <form action="POST" className="liaison-form">
        <Input type='text' for='name' placeholder={formData.name} />
        <Input type='text' for='email' placeholder={formData.mail} />
        <Input type='text' for='phone-number' placeholder={formData.phone} />
        <Input type='text' for='topic' placeholder={formData.subject} />
        <Input for='message' width="30" height="10" placeholder={formData.message} />
        <Input type='button' value={formData.button} />
      </form>
    )
  }
}


export class LiaisonSection extends Component {
  render() {
    return (
      <section className="liaison">
        <div className="container">
          <LiaisonText heading={liaisonText.heading} text={liaisonText.text} />
          <LiaisonForm />
        </div>
      </section>
    )
  }
}