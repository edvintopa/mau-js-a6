import { useState } from 'react'
import { Container } from 'react-bootstrap'
import MovieTable from './components/MovieTable/MovieTable'
import MovieInput from './components/MovieInput/MovieInput'

function App() {
  const [movies, setMovies] = useState([]); // Default is empty list for now

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