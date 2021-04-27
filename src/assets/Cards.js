import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <Card className="hover img-fluid" style={{ width: '22rem' }}>
      <Link to={props.link}>
        <Card.Img variant="top" src={props.img}  />
      </Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>

  );
};

export default Cards;