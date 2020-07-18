import React from "react";

import Header from "./comps/header";

import Demo from "./pages/demo";
import NotFound from "./pages/not_found";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Demo />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
