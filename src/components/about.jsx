import React, { Component } from 'react';
import { aboutData } from "./cms-data/about-data";

export class About extends Component {
  render() {
    return (
      <section className='about'>
        <div className="container">
          <div className="left">
            <h2 data-aos='fade-right'>{aboutData.heading}</h2>
          </div>
          <div className="right">
            <p>{aboutData.paragraph}</p>
          </div>
        </div>
      </section>
    )
  }
}