import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//import Transactions from './components/Transactions';

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
        //----------------------------------------------------------------------------- 
        this.pieChart()
        this.barGraph()
    }

    pieChart() {
        let chart2 = am4core.create("chartdiv2", am4charts.PieChart3D);
        chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
	chart2.data = [
          {
            country: "Bank Transfer",
            litres: 250
          },
          {
            country: "Food",
            litres: 200
          },
          {
            country: "Investment",
            litres: 100
          },
          {
            country: "Shopping",
            litres: 379
          },
          {
            country: "Entertainment",
            litres: 89.6
          },
          {
            country: "Transport",
            litres: 120
          }
        ];
    
        chart2.innerRadius = am4core.percent(40);
        chart2.depth = 120;
    
        chart2.legend = new am4charts.Legend();
    
        let series2 = chart2.series.push(new am4charts.PieSeries3D());
        series2.dataFields.value = "litres";
        series2.dataFields.depthValue = "litres";
        series2.dataFields.category = "country";
        series2.slices.template.cornerRadius = 5;
        series2.colors.step = 3;
    }

    barGraph() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.paddingRight = 40;

        chart.data = [{
            "name": "Deposits",
            "steps": 5200,
            "href": "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg"
        }, {
            "name": "DBS Coin",
            "steps": 1400,
            "href": "https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg"
        }, {
            "name": "Investments",
            "steps": 12500,
            "href": "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg"
        }, {
            "name": "Debit Card",
            "steps": 18788,
            "href": "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg"
        }];

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.minGridDistance = 10;
        categoryAxis.renderer.labels.template.dx = -40;
        categoryAxis.renderer.minWidth = 120;
        categoryAxis.renderer.tooltip.dx = -40;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.fillOpacity = 0.3;
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;
        valueAxis.renderer.baseGrid.strokeOpacity = 0;
        valueAxis.renderer.labels.template.dy = 20;

        let series = chart.series.push(new am4charts.ColumnSeries);
        series.dataFields.valueX = "steps";
        series.dataFields.categoryY = "name";
        series.tooltipText = "{valueX.value}";
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.dy = - 30;
        series.columnsContainer.zIndex = 100;

        let columnTemplate = series.columns.template;
        columnTemplate.height = am4core.percent(50);
        columnTemplate.maxHeight = 50;
        columnTemplate.column.cornerRadius(60, 10, 60, 10);
        columnTemplate.strokeOpacity = 0;

        series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueX", min: am4core.color("#e5dc36"), max: am4core.color("#5faa46") });
        series.mainContainer.mask = undefined;

        let cursor = new am4charts.XYCursor();
        chart.cursor = cursor;
        cursor.lineX.disabled = true;
        cursor.lineY.disabled = true;
        cursor.behavior = "none";

        let bullet = columnTemplate.createChild(am4charts.CircleBullet);
        bullet.circle.radius = 30;
        bullet.valign = "middle";
        bullet.align = "left";
        bullet.isMeasured = true;
        bullet.interactionsEnabled = false;
        bullet.horizontalCenter = "right";
        bullet.interactionsEnabled = false;

        let hoverState = bullet.states.create("hover");
        let outlineCircle = bullet.createChild(am4core.Circle);
        outlineCircle.adapter.add("radius", function (radius, target) {
            let circleBullet = target.parent;
            return circleBullet.circle.pixelRadius + 10;
        })

        let image = bullet.createChild(am4core.Image);
        image.width = 60;
        image.height = 60;
        image.horizontalCenter = "middle";
        image.verticalCenter = "middle";
        image.propertyFields.href = "href";

        image.adapter.add("mask", function (mask, target) {
            let circleBullet = target.parent;
            return circleBullet.circle;
        })

        let previousBullet;
        chart.cursor.events.on("cursorpositionchanged", function (event) {
            let dataItem = series.tooltipDataItem;

            if (dataItem.column) {
                let bullet = dataItem.column.children.getIndex(1);

                if (previousBullet && previousBullet != bullet) {
                    previousBullet.isHover = false;
                }

                if (previousBullet != bullet) {

                    let hs = bullet.states.getKey("hover");
                    hs.properties.dx = dataItem.column.pixelWidth;
                    bullet.isHover = true;

                    previousBullet = bullet;
                }
            }
        })
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

                <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
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
                
                {/* <Transactions></Transactions> */}

            </div>
        );
    }
}

export default DashboardPage;