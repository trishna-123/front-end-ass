import React, { Component } from "react";
import PatientService from "../services/PatientService";
import { Link } from "react-router-dom";

export class ListPatientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
        };
    }
    componentDidMount() {
        PatientService.getAllPatients().then((res) => {
            console.log(res.data);
            this.setState({ patients: res.data });
        });
    }
    deletePatient(userId){
        PatientService.deletePatient(userId).then(res => {
            this.setState({ patients: this.state.patients.filter(patient => patient.userId !== userId) });
            alert("Deleted successfully");
          })
    }

    updatePatient(userId){

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Patient List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                {/* <th>User Id</th> */}
                                <th>User Name</th>
                                <th>Patient Name</th>
                                <th>Address</th>
                                <th>Password</th>
                                <th>User mail id</th>
                                <th>Phone Number</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.patients.map(
                                patient =>
                                    <tr key={patient.userId}>
                                        <td>{patient.userName}</td>
                                        <td>{patient.patientName}</td>
                                        <td>{patient.address}</td>
                                        <td>{patient.password}</td>
                                        <td>{patient.userEmail}</td>
                                        <td>{patient.phoneNo}</td>
                                        <td>{patient.dob}</td>
                                        <td>{patient.gender}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning" style={{ marginRight: "10px" }}> 
                                                <Link to={"/updatepatientbyid/" + patient.userId} >
                                                    Update
                                                </Link>
                                            </button>                                 
                                            <button className="btn btn-danger" onClick={() => this.deletePatient(patient.userId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}