import React from 'react'
import {Header,Footer} from "../components/index"
import TvSeriesMain from '../components/TvSeriesMain';
import useTitle from '../Hooks/useTitle';
function TvSeries({title}) {
  useTitle(title);
  return (
    <div>
      <Header/>
      <div id = "moviesHeader" className='h-[20px] content-baseline relative mx-auto'>
        <h1 className='text-xl font-bold text-white  absolute bottom-0 left-[48%] right-[48%] pb-2 w-40'>TV Series</h1>
      </div>
      <TvSeriesMain/>
      <Footer/>
    </div>
  )
}

export default TvSeries;
