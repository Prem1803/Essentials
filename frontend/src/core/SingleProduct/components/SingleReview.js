import React, { useEffect, useState } from "react";
import { FetchImage } from "../../../api/APICore";
import CoverLoader from "../../Components/CoverLoader";

const SingleReview = ({ review }) => {
  const [stars, setStars] = useState([]);
  const [emptyStars, setEmptyStars] = useState([0, 1, 2, 3, 4]);
  const [ImageData, setImageData] = useState("");
  const [fetchingImage, setFetchingImage] = useState(false);

  useEffect(() => {
    let rating = review.rating;
    let starsArray = [];
    let emptystarsArray = [];
    for (var i = 0; i < rating; i++) starsArray.push(i);
    for (i = 5; i > rating; i--) {
      emptystarsArray.push(i);
    }
    setStars(starsArray);
    setEmptyStars(emptystarsArray);
  }, []);
  useEffect(() => {
    const SetTheFetchedImage = async () => {
      setFetchingImage(true);
      if (review.user.profile) var data = await FetchImage(review.user.profile);
      setImageData(data);

      setFetchingImage(false);
    };
    SetTheFetchedImage();
  }, []);
  return (
    <div className="media">
      <div className="media-left">
        {fetchingImage ? (
          <CoverLoader image={true} />
        ) : (
          <img
            src={ImageData !== "" ? URL.createObjectURL(ImageData) : ""}
            alt={review.user.firstName}
          />
        )}
      </div>

      <div className="media-body">
        <p>{review && review.review}</p>

        <ul className="list-inline rating">
          <li className="list-inline-item">
            {review.user.firstName} {review.user.lastName} -
            {stars.map((index) => {
              return <i className="fas fa-star" key={index}></i>;
            })}
            {emptyStars.map((index) => {
              return <i className="far fa-star" key={index}></i>;
            })}
          </li>

          <li className="list-inline-item date">
            {new Date(review.createdAt).toDateString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleReview;
