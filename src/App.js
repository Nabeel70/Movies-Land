import {useState, useEffect} from 'react';
import MovieCard from './MovieCard.jsx';

//OMDB API keys: 9b0885f4

import'./App.css';
import SearchIcon from './search.svg'
const API_URL = "http://www.omdbapi.com?apikey=9b0885f4";

// const movie1 = {
//     "Title": "Superman, Spiderman or Batman",
//     "Year": "2011",
//     "imdbID": "tt2084949",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// };

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Batman');

    },[]);
    
    return(
       <div className="app">
        <h1>Movies Land</h1>
        <div className="search">
            <input
             placeholder="Search for a Movie" 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             />
             <img src={SearchIcon}
             alt="search" 
             onClick={() => searchMovies(searchTerm)}
             />
        </div>
        {
            movies?.length > 0
            ?(
                <div className="container">
               {movies.map((movie) =>( 
                <MovieCard movie ={movie}/>
               ))}
                   </div>
            ): (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
     
        </div>
    )
};

export default App;