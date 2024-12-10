import React from 'react'
import {Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import './Companylogo.css';

const CompanyLogo= () =>{
  return (
   <Swiper
   modules={[Navigation,Pagination,Scrollbar,Autoplay]}
   slidesPerView={4}
   navigation
   pagination = {{ clickable:true}}
   loop={true}
   autoplay={{
    delay: 3000,
    disableOnInteraction: false,
   }}
   className='custom-swiper'
   >
  <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src="http://picsum.photos/100/100" />
    </p>
    </div>
  </SwiperSlide> 
  <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src="http://picsum.photos/100/100" />
    </p>
    </div>
  </SwiperSlide>
   <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src="http://picsum.photos/100/100" />
    </p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src="http://picsum.photos/100/100" />
    </p>
    </div>
  </SwiperSlide> 
  <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src="http://picsum.photos/100/100" />
    </p>
    </div>
  </SwiperSlide>
   </Swiper>
  )
};

export default CompanyLogo