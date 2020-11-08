import React, { useState , useEffect , Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/templates/HomePage";
import Header from './components/organisms/Header';
import "./css/style.css";

function App() {
  return (
    
      <Router>
        <div className="App">
        
          <Route
            path="/"
            exact
            render={() => <HomePage />}
          />

          <Route
            path="/header/:name/:phone"
            render={({ match }) => (
              <Header match={match} />
            )}
            
          />
        </div>
      </Router>
      );
}

export default App;
