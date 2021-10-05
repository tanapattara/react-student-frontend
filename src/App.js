import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route, Link } from "react-router-dom";

//import another component
import StudentAdd from "./components/Studentadd";
import Studentlist from "./components/Studentlist";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          CIS Student
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/students"} className="nav-link">
              student list
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/new"} className="nav-link">
              new +
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-1">
        <Switch>
          <Route exact path={ ["/", "/students"] } component={Studentlist} />
          <Route exact path={"/new"} component={StudentAdd} />
          <Route path="/student/:id" component={Student} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
