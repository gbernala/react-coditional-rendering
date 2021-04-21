import React from 'react';
import Course from '../course/course-comp';
import Students from '../students/student-comp';
import './table-course-style.css';
 const TableCourse = () =>{

    return (
       <div>

         <h1>Cursos Ingenieria de Sistemas</h1>
          <div className ='table-course-container'>
          <Course CourseName = 'Ingenieria de Requerimientos'/>
          <Students student = {{
            name : 'Luis',
            score : 3.1,
            gender :'Male'
          }}/>
          <Students student = {{
            name : 'Carolina',
            score : 4.6,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Julian',
            score : 3.5,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'David',
            score : 3.0,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Sofia',
            score : 2.8,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Luz',
            score : 1.6,
            gender :'Female',
          }}/>

          <Course CourseName = 'Programacion 1 '/>
          <Students student = {{
          name : 'Andres',
            score : 3.5,
            gender :'Male'
          }}/>
          <Students student = {{
            name : 'Camilo',
            score : 4.5,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Tomas',
            score : 4.7,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'leonardo',
            score : 3.8,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Leidy',
            score : 2.7,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Andrea',
            score : 5,
            gender :'Female',
          }}/>
          <Course CourseName = 'Matematicas Especiales'/>
          <Students student = {{
          name : 'Alvaro',
            score : 3.5,
            gender :'Male'
          }}/>
          <Students student = {{
            name : 'Rodrigo',
            score : 2.4,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Luisa',
            score : 2.2,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Daniela',
            score : 3.7,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Jessica',
            score : 2.5,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Natalia',
            score : 1.8,
            gender :'Female',
          }}/>
      </div>
       </div> 
        
    );
}

export default TableCourse;