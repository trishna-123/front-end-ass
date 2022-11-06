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
            <div className="html">
                <div className="header">
                    <nav className="navbar">
                        <a href="/" className="logo"> <i className="fas fa-heartbeat"></i> Care 4 All</a>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Doctor</a>
                            </li>
                            <li>
                                <a href="#">Service</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}