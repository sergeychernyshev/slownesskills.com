import React from "react";
import { Link } from "react-router";
import { element } from "prop-types";

import Navbar from "react-bootstrap/lib/Navbar";

const App = props => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Link className="navbar-brand" to={"/"}>Slowness Kills</Link>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <ul role="navigation" className="nav navbar-nav navbar-right">
          <li><Link to={"/about.html"}>About</Link></li>
        </ul>
      </Navbar.Collapse>
    </Navbar>

    <div className="container">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: element.isRequired
};

export default App;
