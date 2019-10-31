import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import ApiCaller from './ApiCaller';
import RouteController from './RouteController';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/apicaller">Api Caller</Link>
                </li>
                <li>
                    <Link to="/routecontroller">Route Controller</Link>
                </li>
            </ul>

            <Route path="/" component={App} />
            <Route path="/apicaller" component={ApiCaller} />
            <Route path="/routecontroller" component={RouteController} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
// npm start on Terminal

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
