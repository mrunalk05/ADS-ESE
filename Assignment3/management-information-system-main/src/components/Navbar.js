import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md  navbar-dark bg-primary navbar-hover">
                {/* <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHover" aria-controls="navbarDD" aria-expanded="false" aria-label="Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarHover">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">STUDENT MANAGEMENT SYSTEM<span className="sr-only"></span></a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Manage
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item dropdown-toggle" href="/students">Students</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/students">View Students</a></li>
                                        <li><a className="dropdown-item" href="/add-student">Add Student</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item dropdown-toggle" href="/departments">Departments</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/departments">View Departments</a></li>
                                        <li><a className="dropdown-item" href="/add-department">Add Department</a></li>
                                    </ul>
                                </li>



                                <li><a className="dropdown-item dropdown-toggle" href="/instructors">Instructors</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/instructors">View Instructors</a></li>
                                        <li><a className="dropdown-item" href="/add-instructor">Add Instructor</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item dropdown-toggle" href="/advisors">Advisors</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/advisors">View Advisors</a></li>
                                        <li><a className="dropdown-item" href="/add-advisor">Add Advisor</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item dropdown-toggle" href="/courses">Courses</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/courses">View Courses</a></li>
                                        <li><a className="dropdown-item" href="/add-course">Add Course</a></li>
                                    </ul>
                                </li>

                                <li><a className="dropdown-item dropdown-toggle" href="/prerequisites">Pre-Requisites</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/prerequisites">View Pre-Requisites</a></li>
                                        <li><a className="dropdown-item" href="/add-prerequisite">Add Pre-Requisite</a></li>
                                    </ul>
                                </li>

                                <li><a className="dropdown-item dropdown-toggle" href="/classrooms">Classrooms</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/classrooms">View Classrooms</a></li>
                                        <li><a className="dropdown-item" href="/add-classroom">Add Classroom</a></li>
                                    </ul>
                                </li>

                                <li><a className="dropdown-item dropdown-toggle" href="/timeslots">Time Slots</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/timeslots">View Time Slots</a></li>
                                        <li><a className="dropdown-item" href="/add-timeslot">Add Time Slot</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item dropdown-toggle" href="/sections">Sections</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/sections">View Sections</a></li>
                                        <li><a className="dropdown-item" href="/add-section">Add Section</a></li>
                                    </ul>
                                </li>

                                {/* <li><a className="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Submenu 2 link</a></li>
                                        <li><a className="dropdown-item" href="#">Submenu 2 link 2</a></li>
                                        <li><a className="dropdown-item dropdown-toggle" href="#">Subsubmenu 2</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Link</a></li>
                                                <li><a className="dropdown-item" href="#">Link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
