import React from 'react';
import './course-style.css';

 const Course = (props) =>{

    return (
      <div className = 'course-container'>
      { props.CourseName }
      </div>
    );
}


export default Course;
