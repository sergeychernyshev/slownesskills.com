import React from "react";
import {render} from "react-dom";

import {Router, Route, browserHistory, IndexRoute} from "react-router";

import App from "./App";
import SlownessKills from "./SlownessKills";
import About from "./About";
import NotFound from "./NotFound";

render(
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={SlownessKills}/>

      <Route path="/index.html" component={SlownessKills} />

      <Route path="/about.html" component={About} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById("app")
);
