import React from 'react'
import {Header,Footer} from "../components/index"
import { NavLink } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
function PagesNotFound({title}) {
  useTitle(title);
  return (
    <div>
       <Header/>
       <div id = "moviesHeader" className='h-[20px] content-baseline relative mx-auto'>
        <h1 className='text-xl font-bold text-white  absolute bottom-0 left-[40%] right-[40%] pb-2'>404 Page not Found !</h1>
      </div>
       <div className='flex flex-col justify-center dark:bg-slate-900 bg-white h-[450px] '>
             <div className='py-12 rounded-md  flex justify-center'>
                <img src = {require("../assets/giphy.gif")} alt = "page not found" className='shadow-md shadow-gray-400 dark:shadow-white rounded-md'/>
             </div>
             <NavLink to = "/">
                <button type = "button" className='bg-lime-500 text-white mx-auto flex md:px-4 md:text-base py-2 rounded-full px-2 text-sm hover:scale-105 duration-200'>
                      Back to home
                </button>
             </NavLink>
            
       </div>
      <Footer/>
      
         
    </div>
  )
}

export default PagesNotFound;
