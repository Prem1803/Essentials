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
          </div>
        </div>

        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="contact-left">
              <h2> Developed by Prem Kumar </h2>
              {/* <img
                src="img/about/prem.jpeg"
                className="img-fluid"
                alt="Developed by Prem"
              /> */}
              <div className="item">
                <div className="row">
                  <div className="group-img">
                    <img
                      src="img/about/prem.jpeg"
                      className="img-fluid"
                      alt="Developed by Prem"
                    />
                  </div>
                </div>
              </div>
              <p>
                {" "}
                I am currently pursuing Btech in Computer Science from National
                Institute of Technology Delhi.
              </p>
              <p>
                {" "}
                I have developed Essential as for me it was bit tedious to go
                out for buying groceries on every weekends.
              </p>
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
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/prem_0318/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5 col-md-12 ml-auto">
            <div className="contact-right">
              <h2> Feel free to contact with us any time</h2>

              <p>We will try to reach out to you as early as possible.</p>

              <form method="post">
                <div className="form-group">
                  <label htmlFor="input-name">Name</label>

                  <input
                    type="text"
                    id="input-name"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value=""
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="input-email">E-mail id</label>

                  <input
                    type="email"
                    id="input-email"
                    className="form-control"
                    name="email"
                    placeholder="Email id"
                    value=""
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="input-msg">Message</label>

                  <textarea
                    id="input-msg"
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-submit btn-block btn-lg"
                >
                  Submit
                </button>
              </form>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
