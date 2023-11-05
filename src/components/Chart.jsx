import React from "react";
import { NavLink } from "react-router-dom";
import Barchart from "./charts/Barchart";
import Linechart from "./charts/Linechart";
import Piechart from "./charts/Piechart";

const Chart = () => {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Charts</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active">Charts</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          Chart.js is a third party plugin that is used to generate the charts
          in this template. The charts below have been customized - for further
          customization options, please visit the official
          <NavLink target="_blank" to="https://www.chartjs.org/docs/latest/">
            Chart.js documentation
          </NavLink>
          .
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-area me-1" />
          Area Chart Example
        </div>
        <div className="card-body" style={{height:'350px',width:'100%'}}>
          {/* <canvas id="myAreaChart" width="100%" height={30} /> */}
          <Linechart  />
        </div>
        <div className="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-bar me-1" />
              Bar Chart Example
            </div>
            <div className="card-body">
              {/* <canvas id="myBarChart" width="100%" height={50} /> */}
              <Barchart />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-pie me-1" />
              Pie Chart Example
            </div>
            <div className="card-body">
             <Piechart />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
