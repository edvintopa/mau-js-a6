import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { loadMovies, saveMovies } from './utils/localStorageUtils'
import MovieTable from './components/MovieTable/MovieTable'
import MovieInput from './components/MovieInput/MovieInput'

function App() {
  const [movies, setMovies] = useState(() => loadMovies()); // Init by loading movies

  // Update localStorage when movies change
  useEffect(() => {
    saveMovies(movies);
  }, [movies]);

  const addMovie = (title, rating) => {
    let id = Date.now();  // Unique id based on date
    setMovies([...movies, {id, title, rating}]);  // Append movie
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id)); // Keep all movies that don't match the id
  };

  return (
    <Container>
      <h1>Movie R8RR</h1>
      <p>Welcome, please enter your favourite movies and give them a rating.</p>

      <Container className="mt-5">
        <MovieInput addMovie={addMovie} />
        <MovieTable movies={movies} deleteMovie={deleteMovie} />
      </Container>
    </Container>
  )
}

export default App