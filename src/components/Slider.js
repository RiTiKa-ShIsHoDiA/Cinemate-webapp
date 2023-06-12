import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import MovieCard from './MovieCard';
import {useFetch} from '../Hooks/useFetch';


function Slider({url}){
 
  const { data: movieData, loading, error } = useFetch(url);
  

console.log("slider chala")
console.log(movieData);
  return (
    <div className='flex ' >
      
        <Swiper
         breakpoints={{
          0:{
            slidesPerView: 1,
          },
          // when window width is >= 640px
          400: {
           // width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          639: {
            slidesPerView: 3,
          },
          865:{
            slidesPerView:4,
          },
          1000:{
            slidesPerView:5,
          },
        }}
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >   
    <div>
            {
           (movieData !== undefined )&& movieData.map((item)=>{
              return <SwiperSlide><MovieCard item = {item}/></SwiperSlide>
             }
           )
            }
           </div>   
           </Swiper> 
        </div>
  )
}

export default Slider;
