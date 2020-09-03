import React from "react";

// Imported modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Imported modules

// Imported pages
import Home from "./components/layout/pages/home/Home";
import Category from "./components/layout/pages/category/Category";
import Product from "./components/layout/pages/product/Product";
import Checkout from "./components/layout/pages/checkout/Checkout";
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
          <Route path="/category" component={Category} />
          <Route path="/products" component={Product} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
