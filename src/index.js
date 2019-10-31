import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import LogInPage from './components/LogInPage';
import ApiCallerPage from './components/ApiCallerPage';
import RouteControllerPage from './components/RouteControllerPage';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/loginpage">Home</Link>
                </li>
                <li>
                    <Link to="/apicallerpage">Api Caller</Link>
                </li>
                <li>
                    <Link to="/routecontrollerpage">Route Controller</Link>
                </li>
            </ul>

            <Route path="/loginpage" component={LogInPage} />
            <Route path="/apicallerpage" component={ApiCallerPage} />
            <Route path="/routecontrollerpage" component={RouteControllerPage} />
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
