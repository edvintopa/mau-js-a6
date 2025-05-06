import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function MovieInput({ addMovie }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title == '') {
      alert('Please enter a title');
      return;
    }
    
    if (rating == '') {
      alert('Please select a rating');
      return;
    }

    // Valid input, proceed with entry
    addMovie(title, rating);

    // Show success indicator for 1 sec
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
    
    // Clear input after submission
    setTitle('');
    setRating('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col>
          <Form.Group>
            <Form.Label>Movie Title</Form.Label>
            <Form.Control 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter movie title" 
            />
          </Form.Group>
        </Col>
        
        <Col>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Select 
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select rating</option>
              <option value="1">★</option>
              <option value="2">★★</option>
              <option value="3">★★★</option>
              <option value="4">★★★★</option>
              <option value="5">★★★★★</option>
            </Form.Select>
          </Form.Group>
        </Col>
        
        <Col className="d-flex align-items-end">
          <Button 
            type="submit" 
            variant={isSuccess ? "success" : "primary"} 
            className="mt-3"
          >
            {isSuccess ? "Success!" : "Add Movie"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default MovieInput;