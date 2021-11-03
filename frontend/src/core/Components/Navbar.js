import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../store";
const Navbar = ({ level }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [user, setUser] = useState(false);
  const [path, setPath] = useState("");

  let userLogin = store.getState().userLogin;
  useEffect(() => {
    if (userLogin.token) setUser(true);
  }, []);
  store.subscribe(() => {
    userLogin = store.getState().userLogin;
    if (userLogin.token) {
      setUser(true);
    } else {
      setUser(false);
    }
  });
  useEffect(() => {
    if (level) {
      let levelsBack = "";

      for (let i = 0; i < level; i++) {
        levelsBack += "../";
      }
      setPath(levelsBack);
    }
  }, []);

  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <span className="email-classic-title">Email:- </span>
                  prem47645@gmail.com
                </li>

                <li className="list-inline-item">
                  <span className="contacts-classic-title">Mobile:- </span>
                  +91 820 971 8559
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="home-header home-header2">
        <header className="essential-header clearfix">
          <div className="essential-top-header d-block d-xl-none d-lg-none">
            <div className="row">
              <div className="col-12 col-md-4 col-sm-12">
                <div className="essential-logo text-left">
                  <Link to="/">
                    <img
                      src={`${path}img/logos/logo.png`}
                      alt="Essential Logo "
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-8 col-sm-12">
                <div className="top-right text-right">
                  <ul className="list-inline">
                    <li className="dropdown-cartview">
                      <Link
                        id="ser-input"
                        className="userpanel-link"
                        to="/search-groceries"
                      >
                        <i className="fa fa-search"></i>
                      </Link>
                    </li>
                    <li className="dropdown-cartview">
                      <Link
                        to="/my-cart"
                        className="pull-bs-canvas-right userpanel-link middle-cart"
                        title="Cart"
                      >
                        <i className="fas fa-shopping-cart"></i>{" "}
                        <span className="amount">
                          <i className="fas fa-rupee-sign"></i> 250.00
                        </span>
                      </Link>
                    </li>

                    {user ? (
                      <li className="account-view">
                        <Link to="/profile">
                          <img
                            src={`${path}img/logos/profile-img.png`}
                            alt="Profile"
                            title="Profile"
                          />
                        </Link>
                      </li>
                    ) : (
                      <li className="account-view">
                        <Link to="/login">
                          <i className="fas fa-sign-in-alt"></i>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="col-md-12 d-none-col d-none-lg d-none-xl">
                <div className="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none pull-right mt-3">
                  <nav className="navbar navbar-expand-lg navbar-dark px-0">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarCollapse"
                      aria-controls="navbarCollapse"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={() => {
                        setShowMobileNav(true);
                      }}
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    {showMobileNav && (
                      <div
                        className=" navbar-collapse bg-dark"
                        id="navbarCollapse"
                        onMouseLeave={() => {
                          setShowMobileNav(false);
                        }}
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item btn-nav-close">
                            <button
                              className="btn btn-close nav-link btn-right"
                              id="search-close"
                              onClick={() => {
                                setShowMobileNav(false);
                              }}
                            >
                              <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                          </li>
                          <li className="nav-item">
                            <div className="essential-logo">
                              <Link to="/">
                                {" "}
                                <img
                                  src={`${path}img/logos/white-logo.png`}
                                  alt="Essential Logo"
                                  className="img-fluid"
                                />{" "}
                              </Link>
                            </div>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/about-us">
                              About Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">
                              Contact Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <div className="ui icon dropdown icon top left selection">
                              <div
                                className="dropdown-text"
                                onMouseEnter={() => {
                                  setShowCategories(true);
                                }}
                              >
                                Categories <i className="fa fa-angle-down"></i>
                              </div>

                              {showCategories && (
                                <div
                                  className="menu"
                                  onMouseLeave={() => {
                                    setShowCategories(false);
                                  }}
                                >
                                  <Link
                                    to="/categories"
                                    className="item"
                                    data-value="1"
                                  >
                                    All
                                  </Link>

                                  <Link
                                    to="/categories"
                                    className="item"
                                    data-value="2"
                                  >
                                    Dairy & Bakery
                                  </Link>

                                  <Link
                                    to="/categories"
                                    className="item"
                                    data-value="3"
                                  >
                                    Dry fruits & Snacks
                                  </Link>
                                </div>
                              )}
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="mega-menudesktop">
            <div className="navpart d-none d-lg-block d-xl-block w-100">
              <nav className="navbar navbar-expand-lg navbar-light px-0">
                <div className="container px-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="col-xl-2 col-lg-3 px-0">
                    <div className="essential-logo text-left">
                      <Link to="/">
                        <img
                          src={`${path}img/logos/logo.png`}
                          alt="Essential Logo "
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-xl-7 px-0 mx-xl-auto">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav main-nav align-self-stretch">
                        <li className="nav-item">
                          <Link className="nav-link" to="/about-us">
                            About Us
                          </Link>
                        </li>

                        <li className="nav-item">
                          <div className="ui icon dropdown icon top left selection">
                            <div
                              className="dropdown-text"
                              onMouseEnter={() => {
                                setShowCategories(true);
                              }}
                            >
                              Categories<i className="fa fa-angle-down"></i>
                            </div>

                            {showCategories && (
                              <div
                                className="menu"
                                onMouseLeave={() => {
                                  setShowCategories(false);
                                }}
                              >
                                <Link
                                  to="/categories"
                                  className="item"
                                  data-value="1"
                                >
                                  All
                                </Link>

                                <Link
                                  to="/categories"
                                  className="item"
                                  data-value="2"
                                >
                                  Dairy & Bakery
                                </Link>

                                <Link
                                  to="/categories"
                                  className="item"
                                  data-value="3"
                                >
                                  Dry fruits & Snacks
                                </Link>
                              </div>
                            )}
                          </div>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/contact-us">
                            Contact Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/search-groceries">
                            <i className="fa fa-search"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 px-0">
                    <div className="top-right text-right">
                      <ul className="list-inline">
                        <li className="dropdown-cartview">
                          <Link
                            to="/my-cart"
                            className="pull-bs-canvas-right userpanel-link middle-cart mx-0"
                            title="Cart"
                          >
                            <i className="fas fa-shopping-cart"></i>{" "}
                            <span className="amount">
                              <i className="fas fa-rupee-sign"></i> 250.00
                            </span>
                          </Link>
                        </li>

                        {user ? (
                          <li className="account-view">
                            <Link to="/profile">
                              <img
                                src={`${path}img/logos/profile-img.png`}
                                alt="Profile"
                                title="Profile"
                              />
                            </Link>
                          </li>
                        ) : (
                          <li className="account-view">
                            <Link to="/login">
                              <i className="fas fa-sign-in-alt"></i>
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
