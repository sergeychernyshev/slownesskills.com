import React from "react";
import { element } from "prop-types";

const App = props => {
  const year = new Date().getFullYear();

  return (
    <div>
      {props.children}

      <div className="row footer">
        <div className="col-xs-12">
          © DeckPack 2016-{year}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: element.isRequired
};

export default App;
