import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ApiCallerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResult: []
        }
    }

    componentDidMount() {
        console.log("HI")
        // // http://dummy.restapiexample.com/api/v1/employees
        // axios.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/')
        // .then(res => {
        //     console.log(res.data);
        //     this.setState({apiResult: res.data});
        // })
    }

    render() {
        return (
            <div>
                <h1>API Caller Page</h1>
                {console.log(this.state)}
                {/* {this.state.apiResult.length > 0 && 
                    this.state.apiResult.map((result) => 
                        <p>{result.employee_name}</p>
                    )
                } */}
            </div>
        );
    }
}

export default ApiCallerPage;