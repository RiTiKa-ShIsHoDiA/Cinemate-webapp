import React from 'react'
import {Header,Footer,MoviesMain} from "../components/index"
import useTitle from '../Hooks/useTitle';
function Movies({title}) {
  useTitle(title);
  return (
    <div>
      <Header/>
      <div id = "moviesHeader" className='h-[20px] content-baseline relative mx-auto'>
        <h1 className='text-xl font-bold text-white  absolute bottom-0 left-[50%] right-[50%] pb-2'>Movies</h1>
      </div>
      <MoviesMain/>
      
      <Footer/>
    </div>
  )
}

export default Movies;
