import React from "react";
import { Link } from "react-router";
import { element } from "prop-types";

import Navbar from "react-bootstrap/lib/Navbar";

const startYear = 2017;
const year = new Date().getFullYear();
const yearMessage = year > startYear ? ({startYear} - {year}) : year;

const App = props => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Link className="navbar-brand" to={"/"}>Slowness Kills</Link>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <ul role="navigation" className="nav navbar-nav navbar-right">
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </Navbar.Collapse>
    </Navbar>

    <div className="container">
      {props.children}
    </div>

    <footer className="panel-footer" style={{marginTop: '5em', paddingBottom: '5em'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            © {yearMessage} Sergey Chernyshev
          </div>
        </div>
      </div>
    </footer>
  </div>
);

App.propTypes = {
  children: element.isRequired
};

export default App;
