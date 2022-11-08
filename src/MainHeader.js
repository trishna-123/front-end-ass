import React from "react";
import { Link, useHistory } from "react-router-dom";
import { NavBar } from "./frontend components/NavBar";
import { NavAfterLoginUser } from "./NavAfterLoginUser";


export function MainHeader(props){
    const history = useHistory();
    const regPatient = localStorage.getItem('patient');

    const loggedIn = (
        <div className="header">

                <nav className="navbar">
                    <a href="/" className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a>
                    <a href="/" >Home</a>
                    <li><a href="/listdoctor">Doctor</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li>
                        <div>
                            <button type="button" className="dropdown-toggle" data-toggle="dropdown" >
                                Sign in
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/signin">Patient</a>
                                <a className="dropdown-item" href="/signinasadmin">Admin</a>
                            </div>
                        </div>
                    </li>

                </nav>
                {/* <a href="/signin">Sign in</a> */}
            </div>
    );

    const loggedOut = (
        <div className="header">

                <nav className="navbar">
                    <a href="/" className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a>
                    <a href="/" >Home</a>
                    <li><a href="/listdoctor">Doctor</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="/">Log out</a></li>
                    {/* <li>
                        <div>
                            <button type="button" className="dropdown-toggle" data-toggle="dropdown" >
                                Sign in
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/signin">Patient</a>
                                <a className="dropdown-item" href="/signinasadmin">Admin</a>
                            </div>
                        </div>
                    </li> */}

                </nav>
                
            </div>
    );

    return(
        <div>
            {/* copypaste */}
            <nav className="navbar navbar-dark bg-nav fixed-top">
                <div className="container-fluid">
                    
                    {localStorage.getItem('user') ? loggedOut : loggedIn}
                    { }

                </div>
                {/* copypaste */}
            </nav>
        </div>
    )
}