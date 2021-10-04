import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import './HomePreview.css'

const HomePreview = (props) => {
    const { name, img, description, rating, instructor, price } = props.course
    return (
        <div className="col-md-6 col-lg">
            <div>
                <Card className="card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {/* <Rating style={{ color: 'orange' }}
                                initialRating={rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star  " readonly></Rating> */}
                        </Card.Text>
                        <Card.Text>
                            {instructor}
                        </Card.Text>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <Button variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default HomePreview;