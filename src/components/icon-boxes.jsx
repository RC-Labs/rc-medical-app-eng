import React, { Component } from 'react';
import { iconBoxesData } from './cms-data/icon-boxes-data';

class IconBox extends Component {
  render() {
    return (
      <div className="icon-box" data-aos={this.props.aosAnimation} data-aos-delay={this.props.aosDelay}>
        <div className="icon" >
          <img src={this.props.src} alt={this.props.alt} />
        </div>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}
let aosDelayValue = 0;
const iconBoxList = iconBoxesData.map((element, index) =>
  < IconBox aosAnimation='fade-up' aosDelay={aosDelayValue += 200} key={index} src={element.icon} alt={element.imageAlt} title={element.title} lead={element.lead} />
)

export class IconBoxes extends Component {
  render() {
    return (
      <section className="icon-boxes">
        <div className="container">
          {iconBoxList}
        </div>
      </section>
    )
  }
}