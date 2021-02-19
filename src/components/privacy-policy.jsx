import { Component } from 'react';
import { privacyPolicyData } from './cms-data/privacy-policy-data';


export class PrivacyPolicySection extends Component {
  render() {
    return (
      <section className="privacy-policy">
        <div className="container">
          <h2>{privacyPolicyData.heading}</h2>
          <span className="date">{privacyPolicyData.date}</span>
          {privacyPolicyContent}
        </div>
      </section>
    )
  }
}

const privacyPolicyContent = privacyPolicyData.content.map((element, index) =>
  <div key={`pp-${index}`} className='privacy-policy-content'>
    <h3>{element.cHeading}</h3>
    <p>{element.cParagraph}</p>
  </div>
)