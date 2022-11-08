import React, { Component } from "react";
import '../src/css/NavBar.css';
import { Home } from "./frontend components/Home";

export class NavAfterLoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="header">

                <nav className="navbar">
                    <a href="/" className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a>
                    <a href="/" >Home</a>
                    <li><a href="/listdoctor">Doctor</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="/">Log Out</a></li>
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
    }



}