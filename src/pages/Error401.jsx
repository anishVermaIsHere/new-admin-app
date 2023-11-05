import React from "react";
import { NavLink } from "react-router-dom";

const Error401 = () => {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <h1 className="display-1">401</h1>
                  <p className="lead">Unauthorized</p>
                  <p>Access to this resource is denied.</p>
                  <NavLink to="/">
                    <i className="fas fa-arrow-left me-1" />
                    Return to Dashboard
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div id="layoutError_footer">
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright © Your Website 2023</div>
              <div>
                <NavLink to="#">Privacy Policy</NavLink>
                <NavLink to="#">Terms &amp; Conditions</NavLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Error401;
