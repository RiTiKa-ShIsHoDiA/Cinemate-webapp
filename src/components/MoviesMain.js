import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useFetch} from "../Hooks/useFetch"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import  MovieCard from "./MovieCard"

function MoviesMain() {
  const [pageLoad,setPageLoad] = useState(1);
  const [moreMovieData,setmoreMovieData] = useState([]);
  const url = `movie/popular?language=en-US&page=${pageLoad}&`;
  const { data: movieData, loading, error } = useFetch(url);
  const navigate = useNavigate();
  const handleSubmit = (event)=>{
    event.preventDefault();
    const queryTerm = event.target.search.value;
    console.log(queryTerm);
    event.target.reset();
    return navigate(`/search/movie?q=${queryTerm}`);
  }
  useEffect(()=>{
     {!loading && setmoreMovieData([...moreMovieData,...movieData])}
      console.log(moreMovieData);
  },[pageLoad])
  return (
    <div className="dark:bg-slate-900 dark:text-white p-4">
      <div className="flex justify-center py-8">
        <div
          id="search"
          className="bg-white flex rounded-md p-2 space-x-2 px-4 dark:bg-gray-600 duration-200 dark:duration-0 shadow-lg hover:shadow-gray-600 dark:shadow-none "
        >
         <form onSubmit = {handleSubmit}>
         <input
            type="text"
            placeholder="search movies"
            name="search"
            className="bg-white text-gray-600 dark:bg-gray-600  dark:text-gray-50 outline-none  px-1 dark:focus:bg-gray-600  focus:bg-white "
            autoComplete="off"
          />
         </form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#68fc23"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      
      </div>
      <div className = "w-full flex justify-center">
          <div id = "movies" className="grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 pt-4">
              {
              (moreMovieData!== undefined )&& (moreMovieData.length?moreMovieData:movieData).map((item)=>{
                return <SwiperSlide><MovieCard item = {{...item,eachMovie:"true"}} /></SwiperSlide>
              }
              )
              
              }
            </div>
         
      </div>
      <button type = "button" className='bg-lime-500 text-white mx-auto flex md:px-4 md:text-base py-2 rounded-full px-2 text-sm hover:scale-105 duration-200' onClick={()=>{ setPageLoad(pageLoad+1) }}>Load more</button>
    </div>
  );
}
export default MoviesMain;
