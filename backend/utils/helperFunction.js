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

module.exports = {
  getTrimmedMobileNumber,
};
