import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import HomePreview from '../HomePreview/HomePreview';
import img1 from './banner/banner1.jpg'
import img2 from './banner/banner2.jpg'
import img3 from './banner/banner3.jpg'
import './Home.css'
const Home = () => {
    const [previewCourses, setPreviewCourses] = useState([]);
    useEffect(() => {
        fetch('HomePreview.JSON')
            .then(res => res.json())
            .then(data => setPreviewCourses(data))
    }, [])
    return (
        <>
            <Carousel className="slide container" variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-5">
                <h3 className="course-heading">Our Courses</h3>
                <div className="row">

                    {
                        previewCourses.map(course => <HomePreview key={course.id} course={course}></HomePreview>)
                    }


                </div>


            </div>

        </>
    );
};

export default Home;