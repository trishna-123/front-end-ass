import React, { Component } from "react";
import '../src/css/signin.css';

export class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        
    }

    render() {
        return (
            <div >
                <div className="container">
                    
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1> <br />
                            
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input  name="role"  list = "role" placeholder="Role" />
                            <datalist id="role">
                                <option value="patient"></option>
                                <option value="admin"></option>
                            </datalist>
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}