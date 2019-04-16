import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route,Redirect, Link } from "react-router-dom";
import Landingpage from './components/landingpage'
import home from './components/home'
export default class router extends Component {
   
  render() {
    
    return (
      <div>
        <Router>
        <Switch>

        <Route path="/" exact component={home} />
        <Route path="/category" component={Landingpage} />
        </Switch>
        </Router>
      </div>
    )
  }
}
