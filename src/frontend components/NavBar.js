import React, { Component } from "react";
import '../css/NavBar.css';

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
                    <a href="#" className= "active">Home</a>
                    <a href="#">Doctor</a>
                    <a href="#">Service</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </nav>
                <div id="menu-btn" class="fas fa-bars"></div>
            </div>
         
        );
    }


    
}