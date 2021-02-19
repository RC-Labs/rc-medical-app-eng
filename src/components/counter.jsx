import React, { Component } from 'react';
import CountUp from 'react-countup';
import { counterData } from './cms-data/counter-data';

const counters = counterData.map((element, index) =>
  <div className="counter-box" key={index}>
    <div className="counter-content">
      <CountUp className='count' start={0} end={element.number} />
      <span className="title">{element.text}</span>
    </div>
    <div className="spinner"></div>
  </div>
);

export class Counter extends Component {
  render() {
    return (
      <section className="counter" data-aos='fade-down'>
        <div className="container">
          {counters}
        </div>
      </section>
    )
  }
}
