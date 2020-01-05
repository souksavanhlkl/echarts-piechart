import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import "./App.css";

class App extends Component {
  getOption = () => ({
    title: {
      text: "JS font-end frameworks",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br /> {b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["React", "Angular", "Vue"]
    },
    series: [
      {
        name: "JS font-end",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          {
            value: 50,
            name: "React"
          },
          {
            value: 22,
            name: "Angular"
          },
          {
            value: 28,
            name: "Vue"
          }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0,0,0,0.5"
          }
        }
      }
    ]
  });

  render() {
    return (
      <div className="App">
        <ReactEcharts option={this.getOption()} style={{ height: 300 }} />
      </div>
    );
  }
}

export default App;
