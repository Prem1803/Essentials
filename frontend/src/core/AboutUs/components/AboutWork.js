import React from "react";

const AboutWork = () => {
  return (
    <div className="about-working">
      <div className="container">
        <div className="row">
          <div className="grocino-heading">
            <h1 className="heading_text"> About Us </h1>

            <div className="graph graph-sm">
              <img src="img/about/graphic.png" alt="Graph" title="Graph" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className=" grocino-owl">
            <div className="item">
              <div className="row">
                <div className="col-12 col-xl-6">
                  <div className="group-img">
                    <img
                      src="img/about/img-1.png"
                      className="img-fluid"
                      alt="Grocery Items"
                    />

                    <img
                      src="img/about/img-2.png"
                      className="img-fluid img2"
                      alt="Grocery Items"
                    />
                  </div>
                </div>

                <div className="col-12 col-xl-5 my-auto">
                  <div className="working-content">
                    <h3>Story Of Essential</h3>

                    <p>
                      {" "}
                      Essential is a Grocery Application that lets you to buy
                      fresh grocery items from nearby store.
                    </p>

                    <p>
                      Sellers can list their store's and products in less than a
                      minute.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lside-img">
        <img src="img/about/left-side-img.png" alt="Vegetables" />
      </div>
    </div>
  );
};

export default AboutWork;
