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
import logo from '../../../img/vivense.png'
import logo2 from '../../../img/decathlon.png'
import logo3 from '../../../img/nike.png'
import logo4 from '../../../img/mac.png'
import logo5 from '../../../img/adidas.png'

const CompanyLogo= () =>{
  return (
    <>
     <div className="col-1"></div>
     <div className="col-10">
     <Swiper
   modules={[Navigation,Scrollbar,Autoplay]}
   slidesPerView={4}
   navigation
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
      <img src={logo} />
    </p>
    </div>
  </SwiperSlide> 
  <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src={logo2} />
    </p>
    </div>
  </SwiperSlide>
   <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src={logo3} />
    </p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src={logo4} />
    </p>
    </div>
  </SwiperSlide> 
  <SwiperSlide>
    <div className='swiper-slide-container'>
    <p className='content-text'>
      <img src={logo5} />
    </p>
    </div>
  </SwiperSlide>
   </Swiper>
     </div>
    <div className="col-1"></div>
   
    </>
   
  )
};

export default CompanyLogo