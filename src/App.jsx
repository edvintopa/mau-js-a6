import { Container } from 'react-bootstrap'
import MovieTable from './components/MovieTable/MovieTable'
import MovieInput from './components/MovieInput/MovieInput'

function App() {

  return (
    <Container>
      <MovieInput />
      <MovieTable movies={[]} />
    </Container>
  )
}

export default App