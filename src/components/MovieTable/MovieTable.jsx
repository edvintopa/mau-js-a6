import { Button, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MovieTable({ movies, deleteMovie }) {

  const renderRating = (rating) => {
    return (
      <>
        {/* Show multiple stars on medium screens and larger */}
        <span className="d-none d-md-inline">
          {[...Array(Number(rating))].map((_, i) => (
            <i key={i} className="bi bi-star-fill text-warning"></i>
          ))}
        </span>

        {/* Show single star with number on small screens */}
        <span className="d-md-none">
          <i className="bi bi-star-fill text-warning"></i> {rating}
        </span>
      </>
    );
  };

  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>Title</th>
          <th className="text-end">Rating</th>
          <th className="text-end"></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td className="text-end">{renderRating(movie.rating)}</td>
            <td className="text-end">
              <Button
                variant='danger'
                size="sm"
                onClick={() => deleteMovie(movie.id)}
              >
                <i className="bi bi-trash"></i>
                <span className="d-none d-md-inline ms-1">Delete</span>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
export default MovieTable;