import React, { useState, useEffect } from "react";
import StudentService from "../services/StudentService";
import { Link } from "react-router-dom";

function Studentlist() {

  //init state name students as array -> []
  const [Students, setStudents] = useState([]);
  //init state name activeStudent as null
  const [activeStudent, setActiveStudent] = useState(null);

  useEffect(() => {
    //call function
    getStudentFromAPI();
  }, []);

  // function for load data from api
  const getStudentFromAPI = () => {
    StudentService.getall()
      .then((response) => {
        //load complete
        //set respons data to state
        setStudents(response.data);
        console.log(response.data);
      }).catch((e) => {
        //display error on console
        console.log('error on getStudentFromAPI:' + e);
      });
  }

   const setActive = (data, index) => {
    setActiveStudent(data);
    //console.log(data);
   }

  return <div className="row">
    <div className="col-4">
      { activeStudent ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{activeStudent.name}</h5>
            <p className="card-text">{activeStudent.studentid}</p>
            
            <Link
              to={"/student/" + activeStudent.id} 
              className="btn btn-primary">Edit</Link>
          </div>
        </div>) : (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          <strong>Select student</strong> from a list to show student data.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )
      }      
    </div>
    <div className="col-8">
      <h4>Student List</h4>
      <div  className="list-group">      
        { Students.map((data, index) => (
          <a href="#" className="list-group-item list-group-item-action"
            aria-current="true"
            key={index}
            onClick={() => setActive(data, index)}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{data.name}</h5>          
            </div>
            <small>{data.studentid}</small>
          </a>
        )) }      
      </div >
    </div>
  </div>;
}

export default Studentlist;
