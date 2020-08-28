import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Imported pages
import Home from "./components/layout/pages/Home";
// Imported pages
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
