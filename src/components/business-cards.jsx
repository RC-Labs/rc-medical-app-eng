import { Component } from 'react';
import { contacts } from './cms-data/contact-data';

let aosDelayValue = 0;

const persons = contacts.map((element, index) =>
  <div key={`person-${index}`} className="person-box" data-aos='flip-right' data-aos-delay={aosDelayValue += 100}>
    <span className="name">{element.name}</span>
    <span className="position">{element.position}</span>
    <a href={`tel:${element.phone}`} className="phone">{element.phone}</a>
    <a href={`mailto:${element.mail}`} className='mail'>{element.mail}</a>
  </div>
)

export class BusinessCards extends Component {
  render() {
    return (
      <section className="persons">
        <div className="container">
          {persons}
        </div>
      </section>
    )
  }
}