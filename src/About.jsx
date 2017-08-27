import React from "react";
import { Link } from "react-router";

export default () => <div className="container-fluid">
  <div className="page-header">
    <h2>
      <Link to={"/"}>Slowness Kills</Link> | About
    </h2>
  </div>

  <div className="row">
    <div className="col-md-12">
      If you build slow sites, you kill people&apos;s time
    </div>
  </div>
</div>
