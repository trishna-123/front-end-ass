import React, { Component } from "react";
import '../css/NavBar.css';
import { Home } from "./Home";

export class NavBar extends Component {
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
                    <a href= "/" >Home</a>
                    <a href="/listdoctor">Doctor</a>
                    <a href="#">Service</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="/signin">Sign in</a>
                </nav>
                
            </div>
         
        );
    }


    
}