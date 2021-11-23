import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getUserDetails,
  updateUserDetails,
  updateUserImage,
  resetUpdateUserError,
} from "../../../actions/UserActions";
import { FetchImage } from "../../../api/APICore";
import store from "../../../store";
import CoverLoader from "../../Components/CoverLoader";

const ProfileDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [ImageName, setImageName] = useState("");
  const [ImageURL, setImageURL] = useState("");
  const [fetchingImage, setFetchingImage] = useState(false);

  let user = store.getState().user;
  let updateUser = store.getState().updateUser;
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.loading) setLoading(true);
    else setLoading(false);
    if (user.userDetails) {
      setUserDetails({
        firstName: user.userDetails.firstName,
        lastName: user.userDetails.lastName,
        email: user.userDetails.email,
        mobileNumber: user.userDetails.mobileNumber,
        alternateMobileNumber: user.userDetails.alternateMobileNumber,
        seller: user.userDetails.seller,
        sellerRightsApproved: user.userDetails.sellerRightsApproved,
        houseNumber: user.userDetails.address.houseNumber,
        area: user.userDetails.address.area,
        city: user.userDetails.address.city,
        state: user.userDetails.address.state,
      });
      const profile = user.userDetails.profile;
      if (ImageName !== profile) {
        setImageName(profile);
      }
    } else {
      dispatch(getUserDetails());
    }
  }, []);

  const modifyUserDetails = (e) => {
    if (e.target.name.includes("address")) {
      setUserDetails({
        ...userDetails,
        [e.target.name.split(".")[1]]: e.target.value,
      });
    } else setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  store.subscribe(() => {
    user = store.getState().user;
    updateUser = store.getState().updateUser;
    if (updateUser.loading) setLoading(true);
    else setLoading(false);
    if (updateUser.error) {
      toast.error(updateUser.error, {
        toastId: "Update-User-Error",
      });
      dispatch(resetUpdateUserError());
    }

    if (user.userDetails) {
      setUserDetails({
        firstName: user.userDetails.firstName,
        lastName: user.userDetails.lastName,
        email: user.userDetails.email,
        mobileNumber: user.userDetails.mobileNumber,
        seller: user.userDetails.seller,
        sellerRightsApproved: user.userDetails.sellerRightsApproved,
        alternateMobileNumber: user.userDetails.alternateMobileNumber,
        houseNumber: user.userDetails.address.houseNumber,
        area: user.userDetails.address.area,
        city: user.userDetails.address.city,
        state: user.userDetails.address.state,
      });
      const profile = user.userDetails.profile;
      if (ImageName !== profile) {
        setImageName(profile);
      }
    }
  }, []);
  useEffect(() => {
    getImage(ImageName);
  }, [ImageName]);

  const getImage = async (profile) => {
    setFetchingImage(true);
    var data = await FetchImage(profile);
    const url = URL.createObjectURL(data);
    setImageURL(url);
    setFetchingImage(false);
  };
  const UpdateUser = (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (const key of Object.keys(userDetails)) {
      formData.append(key, userDetails[key]);
    }
    dispatch(updateUserDetails(formData));
  };
  const [selectedImage, setSelectedImage] = useState(false);
  useEffect(() => {
    if (selectedImage) {
      let formData = new FormData();
      formData.append("media", selectedImage);
      dispatch(updateUserDetails(formData));
    }
  }, [selectedImage]);
  const registerAsSeller = () => {
    let formData = new FormData();
    formData.append("seller", true);
    formData.append("store", `${userDetails.firstName}'s Store`);
    dispatch(updateUserDetails(formData));
  };

  return (
    <div className="tab-pane fade show active">
      <h2>
        Profile setting
        {userDetails && userDetails.seller === false ? (
          <button
            className="btn btn-orange float-right"
            onClick={registerAsSeller}
          >
            {" "}
            Become a Seller{" "}
          </button>
        ) : userDetails.sellerRightsApproved === false ? (
          <span className="btn btn-orange float-right" disabled>
            Your request to become a seller is under process.
          </span>
        ) : (
          <Link to="/store" className="btn btn-success float-right" disabled>
            View you store
          </Link>
        )}
      </h2>

      <div className="profile_settingright">
        <div className="ui equal width form">
          {loading ? (
            <CoverLoader />
          ) : (
            <form method="post">
              <div className="fields">
                <div className="one wide field">
                  <div className="profile-upload">
                    <div className="profile-edit">
                      <input
                        type="file"
                        id="imgUpload"
                        name="media"
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => {
                          setSelectedImage(e.target.files[0]);
                        }}
                      ></input>

                      <label htmlFor="imgUpload"></label>
                    </div>

                    <div className="profile-preview">
                      <div id="imgPreview">
                        {fetchingImage ? (
                          <CoverLoader image={true} />
                        ) : (
                          <img
                            src={
                              ImageName !== ""
                                ? ImageURL
                                : "img/logos/profile-img.png"
                            }
                            alt="Profile"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="eleven wide field">
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="input_emailid">Email id</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Email id"
                        value={userDetails && userDetails.email}
                        onChange={modifyUserDetails}
                      />
                    </div>
                  </div>

                  <div className="fields">
                    <div className="field">
                      <label htmlFor="input_number">Mobile No.</label>

                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Mobile No."
                        value={userDetails && userDetails.mobileNumber}
                        onChange={modifyUserDetails}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field mb-0">
                <div className="fields">
                  <div className="field">
                    <label htmlFor="input_fname">First name</label>

                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={userDetails && userDetails.firstName}
                      onChange={modifyUserDetails}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="input_lname">Last name</label>

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={userDetails && userDetails.lastName}
                      onChange={modifyUserDetails}
                    />
                  </div>
                </div>

                <div className="fields">
                  <div className="field">
                    <label htmlFor="input_altnumber">
                      {" "}
                      Alternate Mobile No.
                    </label>

                    <input
                      type="tel"
                      name="alternateMobileNumber"
                      placeholder="Alternate Mobile No."
                      value={userDetails && userDetails.alternateMobileNumber}
                      onChange={modifyUserDetails}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="input_gender"> Gender</label>

                    <span className="custom-dropdown">
                      <select
                        name="gender"
                        value={userDetails && userDetails.gender}
                        onChange={modifyUserDetails}
                      >
                        <option value="gender" disabled>
                          Gender
                        </option>

                        <option value="male">Male</option>

                        <option value="female">Female</option>
                      </select>
                    </span>
                  </div>
                </div>

                <div className="fields">
                  <div className="field">
                    <label htmlFor="input_fname"> House No.</label>

                    <input
                      type="text"
                      name="address.houseNumber"
                      placeholder="House No."
                      value={userDetails && userDetails.houseNumber}
                      onChange={modifyUserDetails}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="input_fname"> Area/Locality</label>

                    <input
                      type="text"
                      name="address.area"
                      placeholder="Area/Locality"
                      value={userDetails && userDetails.area}
                      onChange={modifyUserDetails}
                    />
                  </div>
                </div>
                <div className="fields">
                  <div className="field">
                    <label htmlFor="input_fname"> City</label>

                    <input
                      type="text"
                      name="address.city"
                      placeholder="City"
                      value={userDetails && userDetails.city}
                      onChange={modifyUserDetails}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="input_lname"> State</label>

                    <input
                      type="text"
                      name="address.state"
                      placeholder="State"
                      value={userDetails && userDetails.state}
                      onChange={modifyUserDetails}
                    />
                  </div>
                </div>
              </div>

              <button className="btn btn-orange btn-block" onClick={UpdateUser}>
                {" "}
                Update{" "}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
