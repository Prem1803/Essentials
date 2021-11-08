import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../../store";
import Slider from "./Slider";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/UserActions";
import { getAllCategories } from "../../../actions/CategoryActions";
import { getCartItems } from "../../../actions/CartActions";
const Header = () => {
  const [slider, setSlider] = useState(2);
  const [showCategories, setShowCategories] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const incrementSlider = () => {
    if (slider < 6) setSlider(slider + 1);
    else setSlider(1);
  };
  const decrementSlider = () => {
    if (slider > 1) setSlider(slider - 1);
    else setSlider(6);
  };

  const [user, setUser] = useState(false);
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

  const dispatch = useDispatch();

  const LogoutUser = () => {
    dispatch(logout());
  };

  const [categories, setCategories] = useState([]);

  let category = store.getState().category;
  store.subscribe(() => {
    category = store.getState().category;

    if (category.categories) {
      setCategories(category.categories);
    }
  });
  useEffect(() => {
    setCategories(category.categories);
    if (category.categories && category.categories.length === 0)
      dispatch(getAllCategories());
  }, []);
  let cart = store.getState().cart;
  const [cartQuantity, setCartQuantity] = useState(0);
  store.subscribe(() => {
    cart = store.getState().cart;
    if (cart.cartItems) {
      const cartItems = cart.cartItems;

      setCartQuantity(cartItems.length);
    }
  });
  useEffect(() => {
    if (cart.cartItems && cart.cartItems.length === 0) dispatch(getCartItems());
  }, []);

  return (
    <div className="home-header">
      <header className="essential-header clearfix">
        <div className="essential-top-header d-lg-block d-xl-block">
          <div className="row">
            <div className="col-12 col-md-4 col-sm-12">
              <div className="top-left">
                <ul className="list-inline">
                  <li>
                    <span className="contacts-classic-title">
                      <strong>Call us:</strong>
                    </span>{" "}
                    +91 820 971 8559
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-12">
              <div className="essential-logo">
                <Link to="/">
                  {" "}
                  <img
                    src="img/logos/white-logo.png"
                    alt="Essential Logo"
                    className="img-fluid"
                  />{" "}
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-12">
              <div className="top-right text-right">
                <ul className="list-inline">
                  <li>
                    <Link className="userpanel-link" to="/search-groceries">
                      <i className="fa fa-search"></i>
                    </Link>
                  </li>

                  {user ? (
                    <li className="dropdown-cartview account-view">
                      <div className="ui dropdown accounts" tabindex="0">
                        <i
                          className="fas fa-user user-topicon"
                          onMouseEnter={() => {
                            setShowProfile(true);
                          }}
                        ></i>

                        {showProfile && (
                          <div
                            className="menu"
                            onMouseLeave={() => {
                              setShowProfile(false);
                            }}
                          >
                            <div className="item city-item" data-value="1">
                              <Link to="/profile">
                                <i className="fas fa-user-alt"></i> Profile
                              </Link>
                            </div>
                            <div className="item city-item" data-value="2">
                              <Link to="/" onClick={LogoutUser}>
                                <i className="fas fa-sign-out-alt"></i> Logout
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ) : (
                    <li className="dropdown-cartview">
                      <Link
                        to="/login"
                        className="pull-bs-canvas-right userpanel-link"
                      >
                        <i className="fas fa-sign-in-alt"></i>
                      </Link>
                    </li>
                  )}
                  <li className="dropdown-cartview">
                    <Link
                      to="/my-cart"
                      className="pull-bs-canvas-right userpanel-link middle-cart"
                      title="Cart"
                    >
                      <i className="fas fa-shopping-cart"></i>
                      <span className="notibubble">{cartQuantity}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 d-none-col d-none-lg d-none-xl">
              <div className="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none pull-right mt-2">
                <nav className="navbar navbar-expand-lg navbar-dark">
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
                      className="navbar-collapse bg-dark"
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
                                src="img/logos/white-logo.png"
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
                            {" "}
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
                                {categories.map((category, index) => {
                                  if (category)
                                    return (
                                      <Link
                                        to={`/categories/${category._id}`}
                                        className="item"
                                        data-value="2"
                                        key={index}
                                      >
                                        {category.title}
                                      </Link>
                                    );
                                })}
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
          <div className="navpart d-none d-lg-block d-xl-block">
            <nav className="navbar navbar-expand-lg navbar-light py-{cartQuantity}">
              <div className="container-fluid">
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav main-nav align-self-stretch">
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
                            {categories.map((category, index) => {
                              if (category)
                                return (
                                  <Link
                                    to={`/categories/${category._id}`}
                                    className="item"
                                    data-value="2"
                                    key={index}
                                  >
                                    {category.title}
                                  </Link>
                                );
                            })}
                          </div>
                        )}
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact-us">
                        {" "}
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div id="essential-homebanner">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <Slider slide={`swiper-slide slide-${slider}`} />
          </div>
          <div
            className="swiper-button-prev prev-text"
            onClick={decrementSlider}
          >
            {" "}
            <span className="prev-text">
              {" "}
              <u>Prev </u>{" "}
            </span>{" "}
          </div>
          <div className="swiper-button-next" onClick={incrementSlider}>
            {" "}
            <u>Next</u>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
