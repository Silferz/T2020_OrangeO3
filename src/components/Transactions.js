import React,{Component} from 'react';


class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[],
          isLoaded:false,
        }
      }
    
    componentDidMount() {
          
        //   axios.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/')
        // .then(res => {
        //     console.log(res.data);
        //     this.setState({apiResult: res.data});
        // })
      }
    
      render() {
    
        var { isLoaded, items } = this.state;
    
        if (!isLoaded) {
          return <div>Loading...</div>
        }
        else {
          return (
            <div className="App">
              Data has been loaded
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    {item.name} | {item.email}
                  </li>
                ))}
              </ul>
    
            </div>
          )
        }
        
        
      }
}
 
export default Transactions;