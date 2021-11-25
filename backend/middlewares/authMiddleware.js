const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      throw new Error("Authorization header not found.");
    }

    const token = authHeader.replace("Bearer ", "");

    req.user = await getAuthorizedUser(token);
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send({ error: e.message });
  }
};

const verify = async function (token) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    if (!decoded) {
      return new Error("Auth failed");
    }
    return decoded;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

const getAuthorizedUser = async (token) => {
  const decoded = await verify(token);
  if (!decoded) {
    throw new Error("Try to Login Again");
  }
  const userObject = await User.findOne({ _id: decoded._id });

  if (!userObject) {
    throw new Error("Try to Login Again");
  }
  return userObject;
};
module.exports = {
  auth,
};
