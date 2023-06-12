import React from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import 'animate.css';
function CarouselItem({item}) {
    const imgpath = `https://image.tmdb.org/t/p/original${item.backdrop_path}`
    const posterPath = `https://image.tmdb.org/t/p/original${item.poster_path}`;
    const [showMore,setShowMore] = useState(false);
    const navigate = useNavigate();
    function handleClick(){
      return navigate(`/moviesDetails/${item.id}`,{state:{data:{...item}}})
    }
  return (
    <div style = {{backgroundImage : `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${imgpath})`,
            maxWidth:"100%",backgroundPosition:"center center", backgroundAttachment: "fixed",backgroundRepeat:"no-repeat"}} className='md:h-screen h-[550px]    z-20 w-100 bg-cover md:w-full w-120' key = {item.id}>
       <div className='absolute text-white left-0 delay-400 ease-in duration-400 w-full h-auto top-32 transition-all duration-100' >
          <div className='flex'>
           <div className=' md:w-1/2 w-full space-y-8 md:px-20 px-10 '>
             <h1 className='text-3xl font-extrabold  animate__animated animate__fadeInDown animate__slow'>{item.original_title}</h1>
             <p className='sm:text-base md:text-[16px] leading-relaxed animate__animated animate__fadeIn animate__slower'>{showMore ? item.overview : `${item.overview.substring(0,200)} ` }
                <button className = "hover:underline" onClick={()=>setShowMore(!showMore)}>{showMore ? `...show less` : "...show more"}</button>
             </p>
              <div className='flex justify-between md:w-96 w-72'>
                  <button type = "button" onClick = {handleClick} name = "watch-now" className='bg-lime-500 px-6 py-2 hover:bg-gradient-to-br to-lime-300 from-white  hover:text-lime-600 from white transition ease-out duration-200 rounded-full hover:scale-90'>Watch now</button>
                  <button type = "button" name = "watch-trailer" className='border-2 rounded-full px-5 py-2 hover:border-slate-500 transition ease-out duration-200'>Watch trailer</button>
                </div>
            </div>
            <div className='rounded-md w-1/2 h-40 absolute right-0 -top-10 hidden md:block  animate__animated animate__zoomIn animate__slow'>
              <img src = {posterPath} alt="poster-img" className='w-68 rounded-md h-96 transition translate-x-6 delay-75 hover:animate-[wave_1s_ease-in-out_infinite]'/>
            </div>
            </div>
        </div>
       
    </div>
   
  )
}

export default CarouselItem;
