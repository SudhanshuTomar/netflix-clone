import React, { useState,useEffect } from 'react'
import axios from './axios';
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/"


function Row({title,fetchUrl,isLarge}) {
  const [movies,setMovies] = useState([]);
    useEffect(() => {
        //[] means run only once during loading the component and 
        //if variable passed then run till variable is iterated
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results)
            return request;

        }
        fetchData()
    }, [fetchUrl]);

console.log(movies);
    return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies.map((movie) => (
                <img key={movie.id} className={`row-poster ${isLarge && "row-poster-large"}`} 
                src={`${baseUrl}${isLarge? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} />
            ))}
        </div>
    </div>
  )
}

export default Row