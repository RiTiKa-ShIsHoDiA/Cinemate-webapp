import { useEffect, useState } from "react"

export const useFetch = (apiPath,queryTerm="") => {
  const [data,setdata] = useState([]);
  /* eslint-disable */
  const url = `https://api.themoviedb.org/3/${apiPath}${queryTerm}&api_key=${process.env.REACT_APP_API_KEY}`;
  //const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=ecaf7fe78c861bfd8a2f839d6768be7f"
  console.log(url); 
  useEffect(()=>{
    async function fetchMovies(){
            console.log("usefetch ka try");
            const response = await fetch(url);
            const res = await response.json();
            console.log("fetch data",res);
            setdata(res.results);
    }
    fetchMovies();
    console.log(data);
   },[url]); 
  return {data};
}
/*import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

const initialState = {
  data: [],
  loading: false,
  error: false,
};

function reducer(state, { type, payload }) {
  console.log(payload);
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };
    default:
      return state;
  }
}

function useFetch(apiPath) {
  const url = `https://api.themoviedb.org/3/${apiPath}api_key=${process.env.REACT_APP_API_KEY}`;
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [url]);
  return state;
}

export default useFetch;
*/
