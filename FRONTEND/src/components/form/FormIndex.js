import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import {
  StateMachineProvider,
  createStore,
  DevTool
} from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";

import "./../../styles.css";

createStore({
  data: {
    nombre: "",
    apellido: "",
    marca: "",
    modelo: "",
    matricula:"",
  }
});

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar">
        <ul className="steps">
          <li className={location.pathname === "/nuevo" ? "active" : ""}>
            <Link to="/nuevo">Cliente</Link>
          </li>
          <li className={location.pathname === "/nuevo/step2" ? "active" : ""}>
            <Link to="/nuevo/step2">Coche</Link>
          </li>
          <li className={location.pathname === "/nuevo/step3" ? "active" : ""}>
            <Link to="/nuevo/step3">Reparaciones</Link>
          </li>
          <li className={location.pathname === "/nuevo/result" ? "active" : ""}>
            <Link to="/nuevo/result">Resultado</Link>
          </li>
        </ul>
      </nav>

        <Route exact path="/nuevo" component={Step1} />
        <Route path="/nuevo/step2" component={Step2} />
        <Route path="/nuevo/step3" component={Step3} />
        <Route path="/nuevo/result" component={Result} />

    </>
  );
};

function Index() {
  return (
    <StateMachineProvider>
      <DevTool />
      <div>
        <h1 style={{textAlign:'left'}}>Nueva reparación</h1>

        <Router>
          <Pages />
        </Router>
      </div>
    </StateMachineProvider>
  );
}

export default Index
