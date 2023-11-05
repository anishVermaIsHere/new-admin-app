import React from "react";
import { NavLink } from "react-router-dom";
import { URL_LINK } from "../../config/routes/contants.";

const Register = () => {
  const {AUTH}=URL_LINK;
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">
                    Create Account
                  </h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                          <input
                            className="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="Enter your first name"
                          />
                          <label htmlFor="inputFirstName">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            placeholder="Enter your last name"
                          />
                          <label htmlFor="inputLastName">Last name</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                          <input
                            className="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Create a password"
                          />
                          <label htmlFor="inputPassword">Password</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                          <input
                            className="form-control"
                            id="inputPasswordConfirm"
                            type="password"
                            placeholder="Confirm password"
                          />
                          <label htmlFor="inputPasswordConfirm">
                            Confirm Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-0">
                      <div className="d-grid">
                        <NavLink
                          className="btn btn-primary btn-block"
                          to={AUTH.REGISTER}
                        >
                          Create Account
                        </NavLink>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center py-3">
                  <div className="small">
                    <NavLink to={AUTH.LOGIN}>Have an account? Go to login</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="layoutAuthentication_footer">
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

export default Register;
