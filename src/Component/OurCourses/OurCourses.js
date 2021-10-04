import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const OurCourses = () => {
    const [ourCourses, setOurCourses] = useState([]);
    useEffect(() => {
        fetch('Data.JSON')
            .then(res => res.json())
            .then(data => setOurCourses(data))
    }, [])

    return (
        <div>
            <div className="container mt-3">
                <h1 className='text-center'>Our Courses</h1>
                <div className="row">

                    {
                        ourCourses.map(course => <Course key={course.id} course={course}></Course>)
                    }


                </div>


            </div>



        </div>
    );
};

export default OurCourses;