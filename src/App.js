// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddPatientComponent } from './components/AddPatientComponent';
import { ListPatientComponent } from './components/ListPatientsComponent';
import { UpdatePatientComponent } from './components/UpdatePatientComponent';
import { Signin } from './Signin';
function App() {
  return (
    <div>
    <BrowserRouter>
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
