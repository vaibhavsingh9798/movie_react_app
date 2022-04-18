
let MovieCard = ({movie,id}) =>{
    return(
        <div className='movie'key={id}>
                
                   
                      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} alt={movie.Title}  />
                
                     
                     <div className="text">
                       {movie.Year}
                     <div>  {movie.Type} </div> 
                     <div >{movie.Title} </div>
                       </div>
                  

              </div>
    )
}
export default MovieCard;