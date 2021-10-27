import React from "react";

const SingleReview = () => {
  return (
    <div className="media">
      <div className="media-left">
        <img src="../img/about/prem.jpeg" alt="img" />
      </div>

      <div className="media-body">
        <p>
          It is a Pure Fresh Milk. It's really thick and it's very creamy and
          within a week I'm able to extract 250gm of pure ghee. It's really
          amazing and the delivery is also very quick I usually receives within
          10-20 minutes.
        </p>

        <ul className="list-inline rating">
          <li className="list-inline-item">
            Prem Kumar -<i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>

          <li className="list-inline-item date">October 28, 2021</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleReview;
