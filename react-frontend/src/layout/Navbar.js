import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Student Management System</Link>
                    <Link className="btn btn-outline-light" to="/addStudent"> Add Student </Link>


                </div>
            </nav>
        </div>
    )
}

