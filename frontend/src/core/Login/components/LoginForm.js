import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/UserActions";
import store from "../../../store";
import InlineLoader from "../../Components/InlineLoader";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let userLogin = store.getState().userLogin;
  let navigate = useNavigate();

  const loginRequest = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  store.subscribe(() => {
    userLogin = store.getState().userLogin;
    if (userLogin.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (userLogin.token) {
      navigate("/login");
    }
  });
  return (
    <div className="essential-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
            <div className="essential-heading">
              <h1 className="heading_text"> Sign In </h1>

              <div className="graph graph-sm">
                <img src="img/about/graphic.png" alt="Graph" title="Graph" />
              </div>
            </div>

            <form method="post" className="form-signin">
              <div className="ui form">
                <div className="ui left icon input field w-100">
                  <i className="fas fa-mobile"></i>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Enter Email/Mobile Number"
                    required
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>

                <div className="ui left icon input w-100 field">
                  <i className="fas fa-unlock-alt"></i>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="text-right mt-4">
                <span>
                  <Link to="/reset-password"> Forget Password?</Link>
                </span>
              </div>

              <button
                className="btn btn-orange btn-block"
                onClick={loginRequest}
                disabled={loading}
              >
                Sign In
                {loading && <InlineLoader />}
              </button>

              <div className="text-center">
                <span>
                  If Already have account?{" "}
                  <Link to="/register"> Create Account</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
