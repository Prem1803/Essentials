const getTrimmedMobileNumber = (mobileNumber) => {
  try {
    mobileNumber = mobileNumber.replace("+91", "");
    mobileNumber = mobileNumber.replace("-", "");
    mobileNumber = mobileNumber.replace(" ", "");
    mobileNumber = mobileNumber.trim();
    return mobileNumber;
  } catch (error) {
    throw new error.message();
  }
};
const validateEmail = (email) => {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return String(email).search(regex) != -1;
};
const validateMobileNumber = (mobileNumber) => {
  console.log(mobileNumber);
  var regex = /^[6-9]\d{9}$/gi;
  return String(mobileNumber).search(regex) != -1;
};
module.exports = {
  getTrimmedMobileNumber,
  validateEmail,
  validateMobileNumber,
};
