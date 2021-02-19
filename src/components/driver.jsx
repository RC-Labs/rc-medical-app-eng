import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import { driverImages } from './cms-data/driver-data';

SwiperCore.use([Pagination, Autoplay]);

class SliderButton extends Component {
  render() {
    if (this.props.text !== "") {
      return (
        <a href={this.props.href} className="button">{this.props.text}</a>
      )
    } else {
      return (null)
    }
  }
};


const slides = driverImages.map((element, index) =>
  <SwiperSlide key={`slide-${index}`} className='driver-image'>
    <div className="container" data-aos='flip-up' data-aos-duration='600'>
      <div className="driver-text">
        <h1>{element.heading}</h1>
        <p>{element.text}</p>
        <SliderButton href={element.link} text={element.button}></SliderButton>
      </div>
    </div>
    <img src={element.src} alt={element.alt}></img>
  </SwiperSlide>
);

export class Driver extends Component {
  render() {
    return (
      <section className="driver">
        <Swiper className="swiper-driver" pagination={{ clickable: true }} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 8000 }}> {slides} </Swiper>
      </section>
    )
  }
};
