 import './App.css';
 import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RegistrationPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;