import React, { useState ,useEffect} from 'react'
import axios from './axios';
import "./Banner.css"
import requests from './requests';
const baseUrl = "https://image.tmdb.org/t/p/original/"
function Banner() {

    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            return request;
        }
        fetchData();
    
    }, [])
    

  return (
    <header className='banner' style = {{backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,}}>
    
        <div className='banner-contents'>
        <h1 className='banner-title'>{movie?.name || movie?.title || movie?.original_name}</h1>
       <div className='banner-buttons'>
        <button className='banner-button'> 
            Play
        </button>
        <button className='banner-button'> 
            My List
        </button>
       </div>

        {/* <img className='banner-poster' src={`${baseUrl}${movie.backdrop_path}`} alt={movie.name}/> */}
        
        <h1 className='banner-description'>{movie?.overview}</h1>
        </div>
        
    </header>
  )
}

export default Banner