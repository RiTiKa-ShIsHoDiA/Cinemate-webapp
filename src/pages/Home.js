import React from 'react'
import {Header,Footer,Craousel,Main} from "../components/index"

import useTitle from '../Hooks/useTitle';
function Home({title}) {
  //const [TrendingMovie,setTrendingMovie] = useState([]);  
  
  useTitle(title);
  /*const getdata = async ()=>{
    console.log("chala getdata");
    try
    {
    const key = "ecaf7fe78c861bfd8a2f839d6768be7f";
     const response =  await Promise.all([fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${key}`),fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${key}`),fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${key}`),fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${key}`)]);
     trendingMovie = await  response[0].json();

     ratedMovie = await response[1].json();
     trendingSeries = await response[2].json();
     ratedSeries = await response[3].json();
     console.log(trendingMovie.results);
     console.log(topRatedMovie.results);
    setTopRatedSeries([...ratedSeries.results]);
    setTopRatedMovie([...ratedMovie.results]);
    setTrendingMovie([...trendingMovie.results]);
    setTrendingSeries([...trendingSeries.results]);  
    }
    catch(e){
       console.log("error");
    }
  }
  
   useEffect(()=>{
    getdata();
   },[]);
 */  
  
  return (
    <div >
        <Header/>
        <Craousel />
        <Main />
        <Footer/>
    
    </div>
  )
}

export {Home};
