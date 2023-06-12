import React, {useState} from 'react'
import {Header,Footer,Slider} from "../components/index"
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

function MovieDetails({title}){
  let location = useLocation();
  console.log(location);
  const data = location.state.data;
  const imgpath = `https://image.tmdb.org/t/p/original/${location.state.data.poster_path}`;
  const [showMore,setShowMore] = useState(false);
  /*const {data:movieData,loading} = useFetch(`${data.media_type === "movie" ? "movie":"tv"}/${data.id}?`) ;
  const [fetchData,setFetchData] = useState({});
 
  useEffect(()=>{
    console.log("usefetch chala")
    setFetchData({...movieData})},[movieData]);
  console.log(fetchData);*/
  useTitle(title);
  const navigate = useNavigate();
  function handleClick(){
    return navigate( `${data.media_type === "movie"?"/movies":"/TvSeries" }`,{state:{data:{...data}}})
  }
  console.log(data,"ye hai data");
   const  genresData = [ {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  },
  {
    "id": 10765,
    "name": "Sci-Fi & Fantasy"
    }]
  
  return (
    <>
        <Header/>
        <div style = {{backgroundImage : `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${imgpath})`,
         maxWidth:"100%",backgroundPosition:"center center", backgroundAttachment: "fixed",backgroundRepeat:"no-repeat"}} className='md:h-screen h-[550px]    z-20 w-100 bg-cover md:w-full w-120' key = {location.state.data.poster_path}>
         <div className='flex justify-center '>
              <div className='flex mt-28 flex-cols text-white space-x-0 md:space-x-8 md:w-[60%] w-[90%]'>
                  <div className='rounded-lg w-64 h-64 hidden shadow md:block animate__animated animate__zoomIn animate__slower' > 
                      <img className="rounded-lg" src = {`https://image.tmdb.org/t/p/original/${location.state.data.poster_path}`} alt = "poster-path"/>
                  </div>
                  <div className='p-4 space-y-4 '>
                    <h1 className='font-bold md:text-3xl text-xl animate__animated animate__fadeInDown animate__slow'>{data.original_title ? data.original_title :data.name}</h1>
                  
                    <div className='md:space-x-6 space-x-4 '> 
                          {  data.genre_ids.map((item) => {
                                 var res =  genresData.find((movieGenres) => (movieGenres.id === item));
                           return <button className='border-2 rounded-full px-2 md:text-base text-sm'>{res && res.name}</button>
                             }
                            )
                            
                          }
                         
                    </div>
                    <div className='md:w-96 '>
                      <p className='animate__animated animate__fadeIn animate__slower'>{showMore ? data.overview : `${data.overview.substring(0,250)} ` }
                        <button className = "hover:underline" onClick={()=>setShowMore(!showMore)}>{showMore ? `...show less` : "...show more"}</button>
                      </p>
                    </div>
                    <p ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#67f502" class="bi bi-calendar3 inline" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> Release Date - {data.release_date ? data.release_date : "no found!"}</p>
                    <p ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#67f502" class="bi bi-hand-thumbs-up-fill inline" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg> Popularity - {data.popularity}</p>
                    <p ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#67f502" class="bi bi-star-fill inline" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> <span>Ratings - {data.vote_average}</span></p>
                 
                  </div>
              </div>

         </div>

  </div>

 <div className='px-12 pt-12 dark:bg-slate-800 bg-white pb-4'>
      <div className='flex justify-between'>
        <h1 className='md:text-2xl text-xl font-bold group w-36 md:w-40 pb-12 dark:text-white text-slate-800 '>Similar {data.media_type === "movie" ? "Movie":"Series"}
        <span className='border-t-4 border-lime-500 rounded-sm duration-300 delay-100 tranfrom   group-hover:w-1/4 block'> </span></h1>
       <button type = "button" className='dark:text-white text-slate-500 px-2 h-10 border-2 border-gray-700  text-xs md:text-base rounded-md hover:scale-90 duration-500 hover:shadow-md hover:shadow-white' onClick={handleClick}>View all</button>
      </div>
     
      <Slider url = {`${data.original_title ? "movie":"tv"}/${data.id}/similar?`}/>    
 
 </div>
    <Footer/>
    </>
  )
}

export default MovieDetails;
