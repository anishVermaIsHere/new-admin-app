import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
          <div className="container">
            <div className="row justify-content-center h-100">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <img
                    className="mb-4 img-error"
                    src="assets/img/error-404-monochrome.svg"
                  />
                  <h1 className="display-1">404</h1>
                  <p className="lead">
                    This requested URL was not found on this server.
                  </p>
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
                <NavLink to="#">Privacy Policy</NavLink>·
                <NavLink to="#">Terms &amp; Conditions</NavLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Error404;
