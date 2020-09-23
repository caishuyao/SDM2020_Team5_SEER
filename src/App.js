import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';


import './App.css';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter><Layout/></BrowserRouter>
    </div>
  );
}

export default App;
