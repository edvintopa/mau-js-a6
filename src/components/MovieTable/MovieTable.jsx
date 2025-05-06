import { Button, Table } from 'react-bootstrap'

function MovieTable({ movies, deleteMovie }) {
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) =>(
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.rating}</td>
              <td>
                <Button
                variant='danger'
                onClick={() => deleteMovie(movie.id)}
                >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default MovieTable;