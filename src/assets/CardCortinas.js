import Card from 'react-bootstrap/Card';

const CardCortinas = (props) => {
    return (
        <Card style={{ width: 'auto' }} className="cardMosqui">

            <Card.Img variant="top" src={props.img} className={props.clase} />

            <Card.Body className="bg-secondary">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>

    );
};

export default CardCortinas;