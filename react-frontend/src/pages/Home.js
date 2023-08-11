import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
export default function Home() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        loadStudents();
    }, []);
    const { id } = useParams();

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8081/students");
        setStudents(result.data);
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8081/student/${id}`);
        loadStudents();
    }
    return (
        <div>
            <table className="table table-bordered table-hover table-sm shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Age</th>
                        <th scope="col">GPA </th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        students.map((student, index) => (
                            <tr>
                                <th scope='row' key={index}>{index + 1}</th>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.age}</td>
                                <td>{student.gpa}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/viewStudent/${student.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`editStudent/${student.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2" onClick={() => deleteUser(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
