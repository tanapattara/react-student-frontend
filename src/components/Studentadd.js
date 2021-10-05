import React, { useState } from "react";
import StudentService from "../services/StudentService";

function Studentadd() {
  const initStudent = {
    id: null,
    studentid: "",
    name: "",
    major: 1,
  };
  const [student, setStudent] = useState(initStudent);
  // student.id
  // student.name
  // student.studentid

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
    //console.log(student);
  };

  const saveStudent = () => {
    //student data from input -> studentservice -> RESTapi
    var data = {
      studentid: student.studentid,
      name: student.name,
      major: student.major,
    };

    StudentService.create(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="studentidinput" className="form-label">
          รหัสนักศึกษา
        </label>
        <input
          type="text"
          className="form-control"
          id="studentidinput"
          placeholder="640000000-0"
          name="studentid"
          value={student.studentid}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nameinput" className="form-label">
          ชิ่อ-นามสกุล
        </label>
        <input
          type="text"
          className="form-control"
          id="nameinput"
          placeholder="Done Jonny"
          name="name"
          value={student.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        type="button"
        onClick={saveStudent}
        className="btn btn-outline-primary"
      >
        + Save student
      </button>
    </div>
  );
}

export default Studentadd;
