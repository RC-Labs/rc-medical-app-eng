import { Component } from "react";
import { contactBoxesData } from "./cms-data/footer-data";

class ContactBoxLink extends Component {

  render() {

    if (this.props.mail !== undefined) {
      return (
        <a href={`mailto:${this.props.mail}`}>{this.props.mail}</a>
      )
    } else if (this.props.tel !== undefined) {
      return (
        <a href={`tel:${this.props.tel}`}>{this.props.tel}</a>
      )
    } else {
      return (
        <ContactBoxInfo />
      )
    }
  }
}

class ContactBoxInfo extends Component {
  render() {
    return (
      <>
        <span className="hours-info">{this.props.info}</span>
        <span>{this.props.detail}</span>
      </>
    )
  }
}

const boxes = contactBoxesData.map((element, index) =>
  <div key={`box-${index}`} className="contact-box">
    <div className="icon">
      <img src={element.icon} alt={element.alt} />
    </div>
    <div className="contact-info">
      <span className="title">{element.title}</span>
      <ContactBoxLink tel={element.tel} mail={element.mail} />
      <ContactBoxInfo info={element.info} detail={element.detail} />
    </div>
  </div>
)

export class ContactBoxes extends Component {
  render() {
    return (
      <div className="contact-boxes">
        <div className="container">
          {boxes}
        </div>
      </div>
    )
  }
}