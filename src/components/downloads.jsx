import React, { Component } from 'react';
import { downloadsData, downloadsHeading } from './cms-data/downloads-data';

export class Downloads extends Component {
  render() {
    return (
      <section className='downloads'>
        <div className="container">
          <h2>{downloadsHeading}</h2>
          {downloadsList}
        </div>
      </section>
    )
  }
}

class Download extends Component {
  render() {
    return (
      <div className="download">
        <div className="image">
          <img src={this.props.image} alt="thumb" />
        </div>
        <div className="dl-info">
          <span className="title">{this.props.title}</span>
          <a href={this.props.link} download className="button small-button">{this.props.button}</a>
        </div>
      </div>
    )
  }
}

const downloadsList = downloadsData.map((element, index) =>
  <Download key={`download-${index}`} link={element.link} image={element.image} title={element.title} button={element.button} />
)
