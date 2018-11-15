import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App'; //For home view
import Hero from './Hero'; //Individual View

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/:name' component={Hero} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;