import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="essential-footer2">
      <div id="essential-footer" className="footer-container">
        <div className="essential-footer-row">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 mr-auto">
                <div className="essential-second-row-item">
                  <Link to="/">
                    <img
                      src="img/logos/white-logo.png"
                      alt="Essential Logo"
                      title="Essential Logo"
                      className="img-fluid logo"
                    />
                  </Link>

                  <p>
                    {" "}
                    Essential is an Grocery Application that lets you to buy
                    fresh grocery items from nearby store.
                  </p>
                </div>

                <ul className="list-inline social-icon">
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/prem_0318/">
                      <img
                        src="img/logos/instagram.png"
                        alt="Instagram"
                        title="Instagram"
                      />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/prem-kumar-nitd/">
                      <img
                        src="img/logos/linkedIn.png"
                        alt="Twitter"
                        title="Twitter"
                      />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="https://github.com/Prem1803">
                      <img
                        src="img/logos/github.png"
                        alt="Instagram"
                        title="Instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 mx-auto">
                <div className="essential-second-row-item">
                  <h4>Useful Links</h4>

                  <ul>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>

                    <li>
                      <Link to="/categories">All Categories</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="essential-second-row-item">
                  <h4>Customer Service</h4>

                  <ul>
                    <li>
                      <Link to="/search-groceries">Search Groceries</Link>
                    </li>

                    <li>
                      <Link to="/my-cart">View Cart</Link>
                    </li>

                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="essential-second-row-item">
                  <h4>My Account</h4>

                  <ul>
                    <li>
                      <Link to="/profile">My Profile</Link>
                    </li>

                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>

                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Footer;
