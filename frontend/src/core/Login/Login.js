import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="essential-login">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
