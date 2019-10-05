import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Education from './education'
import Health from './health';
import Transport from './transport';
import Alcohol from './alcohol';
import Finance from './finance';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/transport">
            <Transport />
          </Route>
          <Route path="/finance">
            <Finance />
          </Route>
          <Route path="/alcohol">
            <Alcohol />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
