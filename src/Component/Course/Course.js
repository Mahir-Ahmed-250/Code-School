import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'
const Course = (props) => {
    const { name, price, description, img, instructor, rating } = props.course
    return (
        <div className="col-md-6 col-lg-4">

            <div>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <p>Price: ${price}</p>
                        <p>Instructor: {instructor}</p>

                        <p>Rating: <Rating style={{ color: 'orange' }}
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star  " readonly></Rating> </p>


                        <Button variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>

    );
};

export default Course;