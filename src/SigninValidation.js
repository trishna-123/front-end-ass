import React, { Component } from "react";
import PatientService from "./services/PatientService";
import { Link } from "react-router-dom";
import '../src/css/signin.css';
export class SigninValidation extends Component{
    constructor(props) {
        super(props);
        this.state ={
            Patient: [],
            userName: '',
            password: '',
            pat: '',
        }

        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);

        this.validatePatient = this.validatePatient.bind(this);
    }

    changeUserName = (event) =>{
        this.setState({userName: event.target.value})
    }

    changePassword = (event) =>{
        this.setState({password:event.target.value})
    }

    validatePatient =(p) => {
        p.preventDefault();
        let find = 0;

        for(let i=0; i< this.state.pat.length;i++){

            if((this.state.userName === this.state.pat[i].userName) && (this.state.password === this.state.pat[i].password)){
                alert("Welcome "+ this.state.pat[i].patientName);
                find = 1;
                this.props.history.push("/addappointment");
            }
        }

        if (find ===0){
            alert("Invalid");
        }
    }

    componentDidMount(){
        let Patient = {
            userName:this.state.userName,
            password:this.state.password
        }
        console.log(this.state.userName)
        console.log('Patient => '+JSON.stringify(Patient));

        PatientService.getAllPatients().then((res) => {
            this.setState({Patient:res.data})
            this.state.pat = (res.data);
            console.log(this.state.pat);
        })
    }


    render() {
        return (
            <div >
                <div className="container">
                    
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1> <br />
                            
                            <input type="text" placeholder="Username" name = "userName" value={this.state.userName} onChange={this.changeUserName}/>
                            <input type="password" placeholder="Password" name = "password" value={this.state.password} onChange={this.changePassword}/>
                            {/* <input  name="role"  list = "role" placeholder="Role" />
                            <datalist id="role">
                                <option value="patient"></option>
                                <option value="admin"></option>
                            </datalist> */}
                            <a href="/addpatient">New User? Create a free account here</a>
                            <button onClick={this.validatePatient}>Sign In</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}