import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RouteControllerPage extends React.Component {
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
                <h1>Route Controller Page</h1>
            </div>
        );
    }
}

export default RouteControllerPage;