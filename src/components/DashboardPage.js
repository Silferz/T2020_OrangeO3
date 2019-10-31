import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as d3 from 'd3';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResult: []
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
            </div>
        );
    }
}

export default DashboardPage;