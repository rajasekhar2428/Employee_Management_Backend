import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Full Stack Application
                </a>
                <button
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false" 
                  aria-label="Toggle navigation">

                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/adduser" style={{ color: 'white', backgroundColor: 'blue' }} className="btn btn-outline-light">
                Add User
                </Link>
             </div>
        </nav>
    </div>
  )
}
