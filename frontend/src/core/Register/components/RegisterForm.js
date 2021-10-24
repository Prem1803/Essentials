import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="essential-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
            <div className="essential-heading">
              <h1 className="heading_text"> Sign Up </h1>

              <div className="graph graph-sm">
                <img src="img/about/graphic.png" alt="Graph" title="Graph" />
              </div>
            </div>

            <form method="post" className="form-signin">
              <div className="ui form">
                <div className="ui left icon input field w-100">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="ui left icon input w-100 field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                <div className="ui left icon input w-100 field">
                  <i className="fas fa-mobile"></i>

                  <input
                    type="tel"
                    name="number"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>

                <div className="ui left icon input w-100 field">
                  <i className="fas fa-unlock-alt"></i>
                  <input
                    type="password"
                    name="passowrd"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="ui left icon input w-100 field">
                  <i className="fas fa-unlock-alt"></i>
                  <input
                    type="password"
                    name="confirm-passowrd"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>

              <button className="btn btn-orange btn-block" type="submit">
                Sign Up
              </button>

              <div className="text-center">
                <span>
                  If Already have account? <Link to="/login"> Sign in now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
