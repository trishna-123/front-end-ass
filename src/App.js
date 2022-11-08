// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddPatientComponent } from './patient components/AddPatientComponent';
import { ListPatientComponent } from './patient components/ListPatientsComponent';
import { UpdatePatientComponent } from './patient components/UpdatePatientComponent';
import { Header } from './frontend components/Header';
// import { Signin } from './Signin';
import { Home } from './frontend components/Home';
import { ListDoctorComponent } from './doctor components/ListDoctorComponent';
import { AddDoctorComponent } from './doctor components/AddDoctorComponent';
import { AddAppointmentComponent } from './appointment component/AddAppointmentComponent';
import { UpdateAppointmentComponent } from './appointment component/UpdateAppointmentComponent';
import { ListAppointmentComponent } from './appointment component/ListAppointmentComponent';
import {SigninValidation} from './SigninValidation';
import { SigninAdmin } from './SigninAdmin';

function App() {
  return (
    <div>
    <BrowserRouter>
    < Header />
     <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SigninValidation}></Route>
        <Route path="/signinasadmin" exact component={SigninAdmin}></Route>
        <Route path="/listpatient" component={ListPatientComponent}></Route>
        <Route path="/addpatient" component={AddPatientComponent}></Route>
        <Route path="/updatepatientbyid/:id" component={UpdatePatientComponent}></Route>
        <Route path="/listdoctor" component={ListDoctorComponent}></Route>
       <Route path="/adddoctor" component={AddDoctorComponent}></Route>
       <Route path="/listappointments" component={ListAppointmentComponent}></Route>
        <Route path="/addappointment" component={AddAppointmentComponent}></Route>
        <Route path="/updateappointment/:id" component={UpdateAppointmentComponent}></Route> 
      </Switch>
      
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
