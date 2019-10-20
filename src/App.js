import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./partials/Header"
import Navbar from "./partials/Navbar"
import Home from './pages/Home';
import Certification from './pages/Certification';
import Explorer from './pages/Explorer';
import Product from './pages/Product';

export default function App() {
  return (
    <div className="container" id="main">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-md-10 col-sm-12 col-xs-12 offset-md-1">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/certification" component={Certification} />
              <Route exact path="/explore" component={Explorer} />
              <Route exact path="/products" component={Product} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}


