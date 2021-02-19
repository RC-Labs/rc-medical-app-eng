import React, { Component } from 'react';
import { partnersLogos } from './cms-data/partners-data';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use(Autoplay);

const logos = partnersLogos.map((element, index) =>
  <SwiperSlide key={`logo-${index}`} className='partner-logo' title={element.alt}>
    <img src={element.logo} alt={element.alt} />
  </SwiperSlide>
)


export class Partners extends Component {
  render() {
    return (
      <section className='partners'>
        <div className="container">
          <Swiper className='swiper-partners' spaceBetween={40} slidesPerView={'auto'} autoplay={{ delay: 4000 }}>{logos}</Swiper>
        </div>
      </section >
    )
  }
}