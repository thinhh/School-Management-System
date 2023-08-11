import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ViewStudent() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gpa: 0,
  });

  const { id } = useParams();
  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8081/student/${id}`);
    setStudent(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of student id : {student.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name: </b>
                  {student.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name: </b>
                  {student.lastName}
                </li>
                <li className="list-group-item">
                  <b>Age: </b>
                  {student.age}
                </li>
                <li className="list-group-item">
                  <b>GPA: </b>
                  {student.gpa}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
