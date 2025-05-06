import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MovieTable({ movies, deleteMovie }) {
  const [sortField, setSortField] = useState("title");
  const [direction, setDirection] = useState(true); // TRUE = descending, FALSE = ascending
  const [arrowDirection, setArrowDirection] = useState("down");

  const handleSortClick = (field) => {
    if (field === sortField) {
      // If the same field has been clicked, toggle it's direction.
      setDirection(!direction);
      if(arrowDirection == "down") { setArrowDirection("up"); }
      else { setArrowDirection("down"); }

    } else {
      // If new field, update to sort by that field.
      setSortField(field);
    }
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortField == "title") {
      if(direction) {
        return a[sortField].localeCompare(b[sortField]);
      } else {
        return b[sortField].localeCompare(a[sortField]);
      }
    } else {
      if (direction) {
        return Number(b.rating) - Number(a.rating);
      } else {
        return Number(a.rating) - Number(b.rating);
      }
    }
  })

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
          <th onClick={() => handleSortClick("title")} style={{ cursor: 'pointer' }}>
            Title {sortField === "title" && (
              <i className={"bi bi-arrow-" + arrowDirection}></i>
            )}
          </th>
          <th className="text-end" onClick={() => handleSortClick("rating")} style={{ cursor: 'pointer' }}>
            Rating {sortField === "rating" && (
              <i className={"bi bi-arrow-" + arrowDirection}></i>
            )}
          </th>
          <th className="text-end"></th>
        </tr>
      </thead>
      <tbody>
        {sortedMovies.map((movie) => (
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