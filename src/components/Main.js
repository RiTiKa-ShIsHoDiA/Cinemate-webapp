import React from 'react'
import Slider from "./Slider"

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { NavLink } from 'react-router-dom';


function Main() {
  /* eslint-disable */
  return (
    <div className='md:px-20 px-10 space-y-10 py-20 dark:text-white dark:bg-slate-900 bg-white text-gray-800'>
       <div className='flex justify-between'>
       <h1 className=' group text-xl md:text-2xl font-bold w-40 md:w-48'>Trending movies
       <span className='border-t-4 border-lime-500 rounded-sm duration-300 delay-200 tranfrom  group-hover:w-1/4 block'> </span></h1>
       <NavLink to = "/movies"><button type = "button" className='dark:text-white text-slate-500 px-2 py-2 border-2 border-gray-700  text-xs md:text-base rounded-md hover:scale-90 duration-500 hover:shadow-md hover:shadow-white '>View all</button></NavLink>
        </div>
        <Slider url = "trending/movie/day?language=en-US&"/>
      <div className='flex justify-between'>
        <h1 className='md:text-2xl text-xl font-bold group w-40 md:w-48  '>Top rated movies
        <span className='border-t-4 border-lime-500 rounded-sm duration-300 delay-100 tranfrom   group-hover:w-1/4 block'> </span></h1>
        <NavLink to = "/movies"><button type = "button" className='dark:text-white text-slate-500 px-2 py-2 border-2 border-gray-700  text-xs md:text-base rounded-md hover:scale-90 duration-500 hover:shadow-md hover:shadow-white'>View all</button></NavLink>
      </div>
      

      <Slider  url = "movie/top_rated?language=en-US&page=1&"/>  
      <div className='flex justify-between'>
        <h1 className='md:text-2xl text-xl font-bold group w-40 md:w-44  '>Trending series
        <span className='border-t-4 border-lime-500 rounded-sm duration-300 delay-100 tranfrom   group-hover:w-1/4 block'> </span></h1>
        <NavLink to="/Tvseries"><button type = "button" className='dark:text-white text-slate-500 px-2 py-2 border-2 border-gray-700  text-xs md:text-base rounded-md hover:scale-90 duration-500 hover:shadow-md hover:shadow-white'>View all</button></NavLink>
      </div>  
      <Slider  url = "tv/popular?language=en-US&page=1&"/>
      <div className='flex justify-between'>
        <h1 className='md:text-2xl text-xl font-bold group w-40 md:w-44  '>Top rated series
        <span className='border-t-4 border-lime-500 rounded-sm duration-300 delay-100 tranfrom   group-hover:w-1/4 block'> </span></h1>
        <NavLink   to="/Tvseries"><button type = "button" className='dark:text-white text-slate-500 px-2 py-2 border-2 border-gray-700  text-xs md:text-base rounded-md hover:scale-90 duration-500 hover:shadow-md hover:shadow-white '>View all</button></NavLink>
      </div>   
      <Slider  url = "tv/top_rated?language=en-US&page=1&"/>
       
    </div>
  )
}

export default Main;
