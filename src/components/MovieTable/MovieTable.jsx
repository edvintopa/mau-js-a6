import { Table } from 'react-bootstrap'

function MovieTable({ movies }) {
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
              <td>X</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default MovieTable;