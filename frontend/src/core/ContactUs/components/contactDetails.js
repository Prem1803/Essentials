import React from "react";

const ContactDetails = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          <div className="essential-heading">
            <h1 className="heading_text"> Contact Us </h1>

            <div className="graph graph-sm">
              <img src="img/about/graphic.png" alt="Graph" title="Graph" />
            </div>
            <h2> Developed by Prem Kumar </h2>
            <div className="item">
              <div className="row">
                <img
                  src="img/about/prem.jpeg"
                  className="contact-img"
                  alt="Prem"
                />
              </div>
            </div>

            <p> Let's Connect</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/prem-kumar-nitd/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/Prem1803">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
