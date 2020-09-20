import React from 'react';

import './App.css';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Analyst from './Components/analyst.js';
import Test from './Components/test';

console.log(Test);

function App() {
    return (
      <div>
        {/* <Header/>
        <Analyst/> */}
        <Test/>
      </div>
    );
};

export default App;
