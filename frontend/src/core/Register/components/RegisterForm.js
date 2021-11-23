import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, resetRegistrationError } from "../../../actions/UserActions";
import store from "../../../store";
import InlineLoader from "../../Components/InlineLoader";
const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let userRegister = store.getState().userRegister;
  let navigate = useNavigate();

  const validateInput = (object) => {
    for (const key of Object.keys(object)) {
      if (!object[key].trim()) {
        return `${key.toUpperCase()} is required`;
      }
    }
    return true;
  };
  const registerRequest = (e) => {
    e.preventDefault();
    const registrationDetails = { fullName, email, mobileNumber, password };
    const validation = validateInput(registrationDetails);
    if (validation === true) dispatch(register(registrationDetails));
    else
      toast.error(validation, {
        toastId: "Registration-Validation",
      });
  };

  store.subscribe(() => {
    userRegister = store.getState().userRegister;
    if (userRegister.error) {
      toast.error(userRegister.error, {
        toastId: "Registration-Error",
      });
      dispatch(resetRegistrationError());
    }
    if (userRegister.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (userRegister.token) {
      navigate("/");
    }
  });
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
                    required={true}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>

                <div className="ui left icon input w-100 field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="ui left icon input w-100 field">
                  <i className="fas fa-mobile"></i>

                  <input
                    type="tel"
                    name="number"
                    placeholder="Enter Mobile Number"
                    required
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                    }}
                  />
                </div>

                <div className="ui left icon input w-100 field">
                  <i className="fas fa-unlock-alt"></i>
                  <input
                    type="password"
                    name="passowrd"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <button
                className="btn btn-orange btn-block"
                onClick={registerRequest}
                disabled={loading}
              >
                Sign Up
                {loading && <InlineLoader />}
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
