import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Transactions extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }
    
// Money Out
// Cash33.38%
// Transfer16.92%
// Uncategorized13.66%
// Transportation10.27%
// Shopping8.28%
// Others

    chart.data =  [ {
      category: "Cash Back",
      value: 8786,
      open: 0,
      stepValue: 8786,
      color: chart.colors.getIndex( 17 ),
      displayValue: "10% of S$8786",
    }, {
      category: "Expense",
      value: 8786 - 2786,
      open: 8786,
      stepValue: 8786 - 2786,
      color: chart.colors.getIndex( 8 ),
      displayValue: 2786
    }, {
      category: "Investments",
      value: 8786 - 2786 - 1786,
      open: 8786 - 2786,
      stepValue: 8786 - 2786 - 1786,
      color: chart.colors.getIndex( 9 ),
      displayValue: 1786
    }, {
      category: "Loans",
      value: 8786 - 2786 - 1786 - 453,
      open: 8786 - 2786 - 1786,
      stepValue: 8786 - 2786 - 1786 - 453,
      color: chart.colors.getIndex( 10 ),
      displayValue: 453
    }, {
      category: "Credit Card",
      value: 8786 - 2786 - 1786 - 453 - 1465,
      open: 8786 - 2786 - 1786 - 453,
      stepValue: 8786 - 2786 - 1786 - 453 - 1465,
      color: chart.colors.getIndex( 16 ),
      displayValue: 1465
    }, {
      category: "DBS Coin",
      value: 8786 - 2786 - 1786 - 453 + 1465,
      open: 0,
      color: chart.colors.getIndex( 13 ),
      displayValue: 8786 - 2786 - 1786 - 453 + 1465
    } ];
    

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 40;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "category";
columnSeries.dataFields.valueY = "value";
columnSeries.dataFields.openValueY = "open";
columnSeries.fillOpacity = 0.8;
columnSeries.sequencedInterpolation = true;
columnSeries.interpolationDuration = 1500;

var columnTemplate = columnSeries.columns.template;
columnTemplate.strokeOpacity = 0;
columnTemplate.propertyFields.fill = "color";

var label = columnTemplate.createChild(am4core.Label);
label.text = "{displayValue.formatNumber('$#,## a')}";
label.align = "center";
label.valign = "middle";


var stepSeries = chart.series.push(new am4charts.StepLineSeries());
stepSeries.dataFields.categoryX = "category";
stepSeries.dataFields.valueY = "stepValue";
stepSeries.noRisers = true;
stepSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
stepSeries.strokeDasharray = "3,3";
stepSeries.interpolationDuration = 2000;
stepSeries.sequencedInterpolation = true;

// because column width is 80%, we modify start/end locations so that step would start with column and end with next column
stepSeries.startLocation = 0.1;
stepSeries.endLocation = 1.1;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default Transactions;