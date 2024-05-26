import React from "react";
import Chart from "react-apexcharts";
import "./analysis.css";

const Analysis = () => {

  const chartOptions = {
    series: [44, 55, 41], // Replace with your data
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['C LEVEL 1', 'C LEVEL 2', 'PY LEVEL 1', 'PY LEVEL 2', 'UI-UX LEVEL 1'], // Replace with your labels
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };

  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
            <h2 className="grid-c-title-text">YOUR PERFORMANCE </h2>
            


        </div>
        <div className="chart-container">
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="donut"
          width="400"
        />
      </div>
    </div>
  )
}

export default Analysis
