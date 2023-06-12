import React from 'react'
import { useEffect , useState} from 'react';
import CarouselItem from "./CarouselItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  {useFetch}  from '../Hooks/useFetch';
function Craousel() {
   const {data:TrendingMovie,loading,error} = useFetch("trending/movie/day?language=en-US&");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const topRatedMovie = TrendingMovie.slice(0,5)
  return (
     <Carousel responsive={responsive} autoPlaySpeed={800} infinite={true}  autoPlay={ true }
    transitionDuration={800}  arrows = {false} >
        {
       (TrendingMovie !== undefined) && topRatedMovie.map((items)=>{
          console.log("chala");
          return <CarouselItem item = {items}/>
        })}
      </Carousel>)
}
export  {Craousel};