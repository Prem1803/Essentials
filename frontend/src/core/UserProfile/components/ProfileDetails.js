import React from "react";

const ProfileDetails = () => {
  return (
    <div className="tab-pane fade show active">
      <h2>Profile setting</h2>

      <div className="profile_settingright">
        <div className="ui equal width form">
          <form method="post">
            <div className="fields">
              <div className="one wide field">
                <div className="profile-upload">
                  <div className="profile-edit">
                    <input
                      type="file"
                      id="imgUpload"
                      accept=".png, .jpg, .jpeg"
                    ></input>

                    <label htmlFor="imgUpload"></label>
                  </div>

                  <div className="profile-preview">
                    <div id="imgPreview">
                      <img src="img/logos/profile-img.png" alt="Profile" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="eleven wide field">
                <div className="fields">
                  <div className="field">
                    <label htmlFor="input_emailid"> Email id</label>

                    <input
                      type="email"
                      name="email-id"
                      id="input_emailid"
                      placeholder="Email id"
                    />
                  </div>
                </div>

                <div className="fields">
                  <div className="field">
                    <label htmlFor="input_number"> Mobile Number</label>

                    <input
                      type="tel"
                      name="number"
                      id="input_number"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field mb-0">
              <div className="fields">
                <div className="field">
                  <label htmlFor="input_fname"> First name</label>

                  <input
                    type="text"
                    name="fname"
                    id="input_fname"
                    placeholder="First name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="input_lname"> Last name</label>

                  <input
                    type="text"
                    name="lname"
                    id="input_lname"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="fields">
                <div className="field">
                  <label htmlFor="input_altnumber">
                    {" "}
                    Alternate Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="altnumber"
                    id="input_altnumber"
                    placeholder="Alternate Mobile Number"
                  />
                </div>

                <div className="field">
                  <label htmlFor="input_gender"> Gender</label>

                  <span className="custom-dropdown">
                    <select name="gender" id="input_gender">
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
                  <label htmlFor="input_fname"> House Number</label>

                  <input
                    type="text"
                    name="houseNumber"
                    id="input_houseNumber"
                    placeholder="House Number"
                  />
                </div>
                <div className="field">
                  <label htmlFor="input_fname"> Area/Locality</label>

                  <input
                    type="text"
                    name="area"
                    id="input_area"
                    placeholder="Area/Locality"
                  />
                </div>
              </div>
              <div className="fields">
                <div className="field">
                  <label htmlFor="input_fname"> City</label>

                  <input
                    type="text"
                    name="city"
                    id="input_city"
                    placeholder="City"
                  />
                </div>

                <div className="field">
                  <label htmlFor="input_lname"> State</label>

                  <input
                    type="text"
                    name="state"
                    id="input_state"
                    placeholder="State"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-orange btn-block">
              {" "}
              Update{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
