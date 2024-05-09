const User = require("../Model/User");
const ErrorResponse = require("../Utils/errorRes");
const Admin = require("../Model/AdminModel");
const Counselor = require("../Model/CounselorModel");
const SuperAdmin = require("../Model/SuperAdminModel");
const sendToken = require("../Utils/jwtToken")
const jwt = require("jsonwebtoken");

const sendTokenMiddleware = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    console.log("authorizationHeader", authorizationHeader);

    if (!authorizationHeader) {
      throw new ErrorResponse("Please Login to access this resource", 401);
    }

    // Extract the token from the Authorization header
    const token = authorizationHeader;

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    console.log("decoded data is", decodedData)

    let user;

    if (decodedData.User === 'student') {
      user = await User.findById(decodedData.id);
      console.log("user data is" , user)
    } 

    
    else {
      throw new ErrorResponse("Invalid role in token", 401);
    }

    if (!user) {
      throw new ErrorResponse("User not found", 404);
    }

    if (user.activeToken && user.activeToken === token) {
      req.user = user;
      sendToken(user, 200, res);
    } else {
      throw new ErrorResponse("Token Expired, Please login again", 401);
    }
  } catch (error) {
    console.error("Error:", error);
    return next(error);
  }
};

module.exports = sendTokenMiddleware;
