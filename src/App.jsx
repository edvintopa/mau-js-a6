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
    setMovies([...movies, {title, rating}]);
  };

  return (
    <Container>
      <MovieInput addMovie={addMovie} />
      <MovieTable movies={movies} />
    </Container>
  )
}

export default App