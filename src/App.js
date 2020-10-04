import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search';
import mySubmit from './containers/Submitpage/submit';

let routes = (
  <Switch>
    {/* <Route path="/Blog/:id" exact component={article} />
    <Route path='/Blog' exact component={blog} />
    <Route path="/Message" exact component={myMessage} />
    <Route path="/About" exact component={about} />*/
    <Route path="/Submit" exact component={mySubmit} /> }
    <Route path="/" exact component={Search} />
    <Redirect to="/" />
  </Switch>
);



function App() {
  return (
    <div className="App">
      <BrowserRouter><Layout>{routes}</Layout></BrowserRouter>
    </div>
  );
}

export default App;
