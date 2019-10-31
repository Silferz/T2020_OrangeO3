import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SignIn from './SignIn';

class LogInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <SignIn></SignIn>
            </div>
        );
    }
}

export default LogInPage;