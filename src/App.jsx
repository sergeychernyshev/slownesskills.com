import React from "react";
import { element } from "prop-types";

const App = props => {
  const year = new Date().getFullYear();

  return (
    <div>
      {props.children}

      <div className="row" style={{
        borderTop: '1px solid silver',
        marginTop: '2em',
        padding: '1.5em'}}
      >
        <div className="col-xs-12">
          © Slowness Kills 2016-{year}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: element.isRequired
};

export default App;
