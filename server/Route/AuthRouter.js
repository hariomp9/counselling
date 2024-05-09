const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  register,
  adminRegister,
  login,
  adminLogin,
  logout,
  superAdminLogout,
  adminLogout,
  forgotPassword,
  resetPassword,
  getallUser,
  getaUser,
  getUserById,
  deleteaUser,
  updatedUser,
  updatePassword,
  uploadImage,
  verifyUser,
  verifyAdmin,
  addToWishlist,
  deleteAllWishlistItems,
  removeFromWishlist,
  generateOtp,
  verifyOtp,
  updatedUser_Steps,
  getstepsbyuserId,
  getallUsers,
  superAdminLogin,
  superAdminRegister,
  superAdminUpdate,
  getSuperAdminById,
  deleteaSuperAdmin
} = require("../Controller/auth");
const{validateUser} =require("../helpers/validation");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const sendTokenMiddleware = require("../middleware/sendTokenMiddleware")
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/login").post(login);

router.route("/adminLogin").post(adminLogin);

router.route("/superAdminLogin").post(superAdminLogin);

router.route("/superAdminLogout").get(isAuthenticatedUser, superAdminLogout);

router.route("/superAdminRegister").post(superAdminRegister);

router.put("/superAdminUpdate/:id",isAuthenticatedUser, superAdminUpdate);

router.route("/getSuperAdminById/:id").get(isAuthenticatedUser, getSuperAdminById);

router.delete("/deleteaSuperAdmin/:id",isAuthenticatedUser, deleteaSuperAdmin);

router.route("/logout").get(isAuthenticatedUser, logout);

router.route("/adminLogout").get(isAuthenticatedUser, adminLogout);

router.route("/verifyUserToken/:token").get(verifyUser);

router.route("/verifyAdminToken/:token").get(verifyAdmin);

router.route("/generate-otp").post(generateOtp);

// router.route("/verify-otp").post(verifyOtp);
router.post("/verify-otp",  verifyOtp );

// Create User
router.route("/register").post(register);

router.route("/adminRegister").post(adminRegister);

// Update User Password
router.post("/updatePassword", isAuthenticatedUser, updatePassword);

// Update User
router.put("/edit-user/:id",isAuthenticatedUser, updatedUser);

// Get all Users
router.get("/all-users", isAuthenticatedUser, (req, res, next) => {
  // Authorize admin role first
  authorizeRoles("admin")(req, res, err => {
      // If admin role is authorized, call the next middleware (getallUser)
      if (!err) {
          return next();
      }
      // If admin role authorization fails, try authorizing super-admin role
      authorizeRoles("super-admin")(req, res, err => {
          // If super-admin role is authorized, call the next middleware (getallUser)
          if (!err) {
              return next();
          }
          // If both admin and super-admin role authorization fails, return an error response
          return res.status(403).json({ success: false, message: "Unauthorized access" });
      });
  });
}, getallUser);

// Get all Users data

router.get("/all-users-data", getallUsers);

// Get a User
router.route("/getaUser").get(isAuthenticatedUser, getaUser);

// Get user by ID via a authticated
router.route("/getUserById/:id").get(isAuthenticatedUser, getUserById);

// router.route("/getUserById/:id").get(getUserById);

// Delete a user

router.delete("/deleteaUser/:id",isAuthenticatedUser, deleteaUser);

router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);

router.route("/addToWishlist").post(isAuthenticatedUser , addToWishlist);

router.route("/deleteAllWishlistItems").delete(isAuthenticatedUser , deleteAllWishlistItems);

router.route("/removeFromWishlist/:collegeId").delete(isAuthenticatedUser , removeFromWishlist);

router.route("/uploadImage").post(isAuthenticatedUser, authorizeRoles("admin"), upload.single('file'),uploadImage)


router.put("/updatedUser_Steps/:id",validateUser, updatedUser_Steps);

router.get("/getstepsbyuserId/:id", getstepsbyuserId);




module.exports = router;