import React , {useEffect , useState } from "react";

import Movie from "./components/Movie";

import config from "./config/dev"


function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchTerm,setSearchTerm] = useState('');

  useEffect(()=> {
    getMovies(config.FEATURED_API);
  } , []);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(config.SEARCHED_API + searchTerm)

      setSearchTerm("");
    }
  }

  const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
  };
  
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" 
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) =>
        <Movie key={movie.id} {...movie}  />)}
      </div>
    </>
  );
  
}

export default App;