import React, {useState, useEffect} from "react";
import StudentService from "../services/StudentService";
//function Student () => {}
const Student = (props) => {
    const initStudent = {
        id: null,
        studentid: "",
        name: "",
        major: 1,
      };
    const [student, setStudent] = useState(initStudent);

    useEffect(() => {
        getStudent(props.match.params.id);
    }, [props.match.params.id]);

    const getStudent = (id) => {
        StudentService.get(id)
            .then((response) => {
                //complete get data
                //save to state
                setStudent(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    }

    const updateStudent = () => {
        StudentService.update(student.id, student)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }

    return <div>
        <div className="mb-3">
            <label htmlFor="studentid" className="form-label">Student ID</label>
            <input type="text" 
                className="form-control" 
                id="studentid" 
                name="studentid"
                placeholder="640000000-0"
                value={student.studentid}
                onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name - Lastname</label>
            <input type="text" 
                className="form-control" 
                id="name" 
                name="name"
                placeholder="Mickey Mouse"
                value={student.name}
                onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary"
                type="submit"
                onClick={updateStudent}>Save data</button>
            <button className="btn btn-danger"
                type="submit"
                onClick={updateStudent}>Delete this data</button>
        </div>
    </div>
}

export default Student;