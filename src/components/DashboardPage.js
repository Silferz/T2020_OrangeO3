import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResult: [],
            itemData: []
        }
    }

    async componentDidMount(){
        const response =
          await axios.get("http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/2/details",
            {
              headers: {
                'identity': 'Group12',
                'token': ' 80adc5be-6f4c-43db-83f2-829a7abfb43b',
              }
            }
          )
        this.setState({apiResult: response.data})

    // componentDidMount() {
    //     const response =
    //         await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //         {
    //             headers: {
    //                 'identity': 'Group12',
    //                 'token': '80adc5be-6f4c-43db-83f2-829a7abfb43b'
    //             }
    //         }
    //     // .then(res => {
    //     //     console.log("Data : " + res.data);
    //     this.setState({apiResult: response.data});
    // }

        let chart = am4core.create("chartdiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
        chart.data = [
          {
            country: "Lithuania",
            litres: 501.9
          },
          {
            country: "Czech Republic",
            litres: 301.9
          },
          {
            country: "Ireland",
            litres: 201.1
          },
          {
            country: "Germany",
            litres: 165.8
          },
          {
            country: "Australia",
            litres: 139.9
          },
          {
            country: "Austria",
            litres: 128.3
          }
        ];
    
        chart.innerRadius = am4core.percent(40);
        chart.depth = 120;
    
        chart.legend = new am4charts.Legend();
    
        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
    }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome Back, {this.state.apiResult.firstName}</h1>

                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

                {/* {const itemData = apiResult.map((result) => result.title)}
                {console.log("Test : " + itemData)}   */}

               {/* // {itemData = apiResult.map((result) => result.title)} */}

                    {/* {this.state.apiResult.map((item) =>
                        <p>{item}</p>
                    )} */}
             

                {/* {this.state.apiResult.length > 0 && 
                    this.state.apiResult.map((result) => 
                        <p>{result.title}</p>
                    )
                } */}
            </div>
        );
    }
}

export default DashboardPage;