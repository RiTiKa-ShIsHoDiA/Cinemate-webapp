import {Routes,Route} from "react-router-dom"
import {Home,Movies,PageNotFound,TvSeries,MoviesDetails, Search} from "../pages/index"
function Allrouter() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home title = "Home"/>}/>
            <Route path = "/movies" element = {<Movies title = "Movies"/>}/>
            <Route path = "/moviesDetails/:id" element = {<MoviesDetails title = "Details Page"/>}/>
            <Route path = "/TvSeries" element = {<TvSeries title = "TvSeries"/>}/>
            <Route path = "/search/movie" element = {<Search Path = "movie" title = "SearchMovie"/>}/>
            <Route path = "/search/tv" element = {<Search Path = "tv" title = "SerachTv"/>}/>
            <Route path = "*" element = {<PageNotFound title = "Page not found"/>}/>
        </Routes>
      
    </div>
  )
}

export default Allrouter;
