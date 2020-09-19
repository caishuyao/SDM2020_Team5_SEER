import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';


import Homepage from './Containers/Homepage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Homepage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
