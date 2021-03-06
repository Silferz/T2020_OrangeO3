import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import LogInPage from './components/LogInPage';
import ApiCallerPage from './components/ApiCallerPage';
import RouteControllerPage from './components/RouteControllerPage';
import DashboardPage from './components/DashboardPage';
import BarChart from './components/BarChart';
//import PieTest1 from './components/PieTest1';
import PieChart from './components/PieChart';
import Transactions from './components/Transactions';

// var loggedIn = false;
// var logInMessage = "Log In";

// componentDidMount () {
//     if(loggedIn===true) {
//         loggedIn = false;
//         logInMessage = "Log Out";
//     }
//     else {
//         loggedIn = true;
//         logInMessage = "Log In";
//     }
// }

const routing = (
    <Router>
        <div>
            <ul>
                <h3>
                    <li>
                        <Link to="/loginpage">Log In/Out</Link>
                    </li>
                    <li>
                        <Link to="/apicallerpage">Api Caller</Link>
                    </li>
                    <li>
                        <Link to="/routecontrollerpage">Route Controller</Link>
                    </li>
                    <li>
                        <Link to="/dashboardpage">Dashboard</Link>
                    </li>
                </h3>
            </ul>

            {/* <Route path="/" component={LogInPage} /> */}
            <Route path="/barchart" component={BarChart} />
            <Route path="/loginpage" component={LogInPage} />
            <Route path="/apicallerpage" component={ApiCallerPage} />
            <Route path="/routecontrollerpage" component={RouteControllerPage} />
            <Route path="/dashboardpage" component={DashboardPage} />
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
