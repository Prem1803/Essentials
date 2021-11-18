import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";

const SingleCategory = ({ category }) => {
  const [ImageData, setImageData] = useState("");
  const [fetchingImage, setFetchingImage] = useState(false);

  useEffect(() => {
    if (category && category.image) {
      const SetTheFetchedImage = async () => {
        setFetchingImage(true);
        var data = await FetchImage(category.image);

        setImageData(data);
        setFetchingImage(false);
      };
      SetTheFetchedImage();
    }
  }, []);
  return (
    <div className="col-12 col-lg-6 col-md-6 col-sm-6 col-xl-3">
      <div className="category-boxholder">
        <div className="category-border">
          <div className="img-product">
            {fetchingImage ? (
              <CoverLoader image={true} />
            ) : (
              <img
                src={ImageData && URL.createObjectURL(ImageData)}
                className="product-img-fluid"
                alt={category && category.title}
              />
            )}
          </div>
          <h4>{category && category.title}</h4>
          <p>{category && category.description} </p>
          <div className="buttons">
            <Link
              to={`/categories/${category._id}`}
              className="btn btn-default"
            >
              <i className="fas fa-arrow-circle-right"></i> Shop Now
            </Link>
            <Link to={`/categories/${category._id}`} className="btn btn-orange">
              <i className="fas fa-arrow-circle-right"></i> Shop Now{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
