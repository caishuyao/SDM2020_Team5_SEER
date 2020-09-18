import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './homepage';
import Analyst from './analyst';
import Moderator from './moderator';
import Searcher from './searcher';
import Submitter from './submitter';
const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/analyst" component={Analyst}/>
        <Route exact path="/moderator" component={Moderator}/>
        <Route exact path="/searcher" component={Searcher}/>
        <Route exact path="/submitter" component={Submitter}/>
    </Switch>

)
export default Main;