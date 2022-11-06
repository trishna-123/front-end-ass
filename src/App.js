// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddPatientComponent } from './patient components/AddPatientComponent';
import { ListPatientComponent } from './patient components/ListPatientsComponent';
import { UpdatePatientComponent } from './patient components/UpdatePatientComponent';
import { Header } from './frontend components/Header';
import { Signin } from './Signin';


function App() {
  return (
    <div>
    <BrowserRouter>
    < Header />
     <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={Signin}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/listpatient" component={ListPatientComponent}></Route>
        <Route path="/addpatient" component={AddPatientComponent}></Route>
        <Route path="/updatepatientbyid/:id" component={UpdatePatientComponent}></Route>

      </Switch>
      
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
