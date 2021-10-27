import React from "react";
import SingleReview from "./SingleReview";

const ProductReviews = () => {
  return (
    <div className="detail_mid">
      <hr />
      <div className="row">
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
          <div className="tab-content">
            <div className="tab-pane active" id="reviews" role="tabpanel">
              <h2>Reviews</h2>

              <SingleReview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
