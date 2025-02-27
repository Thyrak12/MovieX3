import './Slide.css'
import Card from 'react-bootstrap/Card';

function MovieCard(url, title, text){
    return(
        <div className='card-container'>
            <Card style={{ width: '18rem' }} className='card'>
                    <Card.Img  className='card-img' variant="top" src={url} />
                    <Card.Body className='card-body'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>
    );
}

export default MovieCard;