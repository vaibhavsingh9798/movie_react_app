import {useState,useEffect} from 'react'
import './MovieApp.css'
import MovieCard from './MovieCard'

 //API key : 6107117 
 const API_URL = 'http://www.omdbapi.com?apikey=6107117'

let MovieApp = () =>{
   const [movies,setMovies] = useState([])
   const [searchname,setSearchname] = useState()
  
   const searchMovies = async (title) =>{
    const responce = await fetch(`${API_URL}&s=${title}`)
    const data = await responce.json();
    setMovies(data.Search) 
    console.log('length',movies.length)
   } 

   useEffect(()=>{
    searchMovies('RRR')
   },[])

   
     
    return(
      <div className='movieapp'>
          <center>
          <h1>MovieLand</h1>
          <div className='search'>
              <input type='text' 
              placeholder='serach for movies'
              value={searchname}
              onChange={(e)=>{setSearchname(e.target.value)}} 
              />
          </div>
         <div className='btn'>
          <button onClick={() =>{searchMovies(searchname)}}>Serach</button>
          </div>
          </center>
          
         
          { movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie,ind) => (
            <MovieCard movie={movie} id={ind}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> movies not found</h2>
        </div>
      )}
          

      </div>
    );
}
export default MovieApp;