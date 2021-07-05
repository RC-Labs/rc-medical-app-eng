import React, { Component } from 'react';
import { newsletterData } from './cms-data/newsletter-data';
import Mailchimp from 'react-mailchimp-form'


export class Newsletter extends Component {
  render() {
    return (
      <section className="newsletter">
        <div className="container">
          <div className="text">
            <h2>{newsletterData.heading}</h2>
            <span>{newsletterData.sub}</span>
          </div>
          <Mailchimp
            action='https://ruecambon.us1.list-manage.com/subscribe/post?u=8a7e91767c20db6687746eed7&amp;id=41cb43dc87'

            fields={[
              {
                name: 'EMAIL',
                placeholder: newsletterData.inputPlaceholder,
                type: 'email',
                required: true
              }
            ]}
            messages={
              {
                sending: newsletterData.sending,
                success: newsletterData.success,
                error: newsletterData.error,
                empty: newsletterData.empty,
                duplicate: newsletterData.duplicate,
                button: newsletterData.buttonValue,
              }
            }
          />
        </div>
      </section>
    );
  }
}