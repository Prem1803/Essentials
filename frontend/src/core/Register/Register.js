import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="essential-register">
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Register;
