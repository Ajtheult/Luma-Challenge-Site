import React from "react";

// Imported modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Imported modules

// Imported pages
import Home from "./components/layout/pages/home/Home";
// Imported pages

// Global css
import "./App.css";
// Global css

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
