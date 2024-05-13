const User = require("../Model/User");
const Admin = require("../Model/AdminModel");
const SuperAdmin = require("../Model/SuperAdminModel");
const Steps = require("../Model/stepsModel");
const Course_Preference = require("../Model/Course_Preferece");
const OTP = require("../Model/OtpModel")
const sendEmail = require("../Utils/SendEmail");
const validateMongoDbId = require("../Utils/validateMongodbId");
const { generateToken, verifyToken } = require("../config/jwtToken");
const sendToken = require("../Utils/jwtToken");
const jwt = require("jsonwebtoken");
const uploadOnS3 = require("../Utils/uploadImage");
const nodemailer = require('nodemailer');
require("dotenv").config({ path: "./.env" });

exports.uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Invalid request" });
    }

    let fileName = req.file.originalname;

    let url = await uploadOnS3(req.file.buffer, fileName);
    console.log("URL:::=>", url);
    return res.status(200).json({ status: true, url: url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// exports.register = async (req, res, next) => {
//   const { email, password } = req.body;

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return res.status(203).json({ error: "User with this email already exists." });
//   }

//   const userData = {
//     email,
//     // provider_ID: req.body.provider_ID,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     mobile: req.body.mobile,
//     // provider: req.body.provider,
//     // role: req.body.role
//     cast: req.body.cast,
//     address: req.body.address,
//     documents: req.body.documents,
//     careerGoals: req.body.careerGoals,
//     tenthPercentage: req.body.tenthPercentage,
//     twelfthPercentage: req.body.twelfthPercentage,
//     neetScore: req.body.neetScore
//   };

//   if (password) {
//     userData.password = password;
//   }

//   try {
//     const newUser = await User.create(userData);
//     sendToken(newUser, 201, res);
//   } catch (error) {
//     next(error);
//   }
// };


//  I have to register a user with send a Email to users' email address vvia a Nodemailer

// const nodemailer = require('nodemailer');

exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(203).json({ error: "User with this email already exists." });
  }




  const userData = {
    email,
    password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile,
    cast: req.body.cast,
    address: req.body.address,
    documents: req.body.documents,
    careerGoals: req.body.careerGoals,
    tenthPercentage: req.body.tenthPercentage,
    twelfthPercentage: req.body.twelfthPercentage,
    neetScore: req.body.neetScore,
    whatsappMobile: req.body.whatsappMobile,
    Gender: req.body.Gender,
    District: req.body.District,
    Comments: req.body.Comments,
    SubscriptionsPlan: req.body.SubscriptionsPlan || 'Free',
    User_Intersted: req.body.User_Intersted || 'Non-Intersted',
    Status: req.body.Status || 'Pending',
    standard_12thMarks: req.body.standard_12thMarks && req.body.standard_12thMarks.length > 0 ? req.body.standard_12thMarks.map(mark => ({
      subject: mark.subject || 'N/A',
      obtained: mark.obtained || 0, // Use 0 as the default value for obtained
      outOf: mark.outOf || 0 // Use 0 as the default value for outOf
    })) : [{
      subject: 'N/A',
      obtained: 0, // Use 0 as the default value for obtained
      outOf: 0 // Use 0 as the default value for outOf
    }],

    exams: req.body.exams && req.body.exams.length > 0 ? req.body.exams.map(exam => ({
      type: exam.type || 'N/A',
      passingDistrict: exam.passingDistrict || 'N/A',
      passingState: exam.passingState || 'N/A',
    })): [{
      type: 'N/A',
      passingDistrict: 'N/A',
      passingState: 'N/A',
    }],

    Academic_Details : req.body.Academic_Details && req.body.Academic_Details.length > 0 ? req.body.Academic_Details.map(academic => ({
      type: academic.type || 'N/A',
      Board_University: academic.Board_University || 'N/A',
      School_College: academic.School_College || 'N/A',
      PassingYear: academic.PassingYear || '0',
      ObtainedMarks: academic.ObtainedMarks || '0',
      Result: academic.Result || '0',
      CGPA: academic.CGPA || '0',

    })): [{
      type: 'N/A',
      Board_University: 'N/A',
      School_College: 'N/A',
      PassingYear: '0',
      ObtainedMarks: '0',
      Result: '0',
      CGPA: '0',
    }],


    Id_Number:await generateIdNumber()
  };

  try {
    const newUser = await User.create(userData);
    await sendWelcomeEmail(email, password, userData.firstname); // Sending welcome email with username
    sendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
};


// also Include this



//  make a function to genrate a id_Number

const generateIdNumber = async (req, res) => {
  let highestNumber = await User.findOne({}, {}, { sort: { 'Id_Number': -1 } });

  let newNumber;
  if (highestNumber && highestNumber.Id_Number) {
    const lastNumber = parseInt(highestNumber.Id_Number.slice(2));
    newNumber = lastNumber + 1;
  } else {
    newNumber = 0; // Start from 0 if there are no existing records or if Id_Number is not defined
  }

  const idNumber = `UG${newNumber.toString().padStart(5, '0')}`;
  return idNumber;
}




// Function to send welcome email
async function sendWelcomeEmail(email, password, username) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CLIENT_EMAIL,
      pass: process.env.CLIENT_EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // Disable SSL verification
    },
  });


  const mailOptions = {
    from: 'harshal.brilliance@gmail.com',
    to: email,
    subject: 'Welcome to Our Platform!',
    html: `<p>Congratulations! Your Account successfully is Created for our Platform . Welcome</p>
          <p>Hello Dear ${username},</p>
           <p>Welcome to our platform! You have successfully registered.</p>
           <p>Your Account Email is: <strong>${email}</strong></p>
           <p>Your Account password is: <strong>${password}</strong></p>
           <p>Thank you!</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}




exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return next(new ErrorResponse("Please provide Email", 400));
  }

  try {
    const findUser = await User.findOne({ email }).select("+password");

    // If user exists and is authenticated via a third-party provider
    if (findUser && !findUser.password) {
      // const token = generateToken({ id: findUser._id });
      const token = generateToken(findUser._id, findUser.role);

      await User.findByIdAndUpdate(
        { _id: findUser._id?.toString() },
        { activeToken: token },
        { new: true }
      );

      const user = {
        success: true,
        user: {
          _id: findUser._id,
          firstname: findUser.firstname,
          lastname: findUser.lastname,
          email: findUser.email,
          // provider: findUser.provider,
        },
        token: token,
      };

      return res.status(200).json(user);
    }

    // If user exists and has a password, continue with password-based authentication
    if (findUser && (await findUser.matchPasswords(password))) {
      // const token = generateToken({ id: findUser._id });
      const token = generateToken(findUser._id, findUser.role);

      await User.findByIdAndUpdate(
        { _id: findUser._id?.toString() },
        { activeToken: token },
        { new: true }
      );

      const user = {
        success: true,
        user: {
          _id: findUser._id,
          firstname: findUser.firstname,
          lastname: findUser.lastname,
          email: findUser.email,
          // provider: findUser.provider,
        },
        token: token,
      };

      return res.status(200).json(user);
    } else {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.adminRegister = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await Admin.findOne({ email });

  if (existingUser) {
    return res.status(203).json({ error: "Admin with this email already exists." });
  }

  const userData = {
    email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile,
    role: req.body.role
  };

  if (password) {
    userData.password = password;
  }

  try {
    const newUser = await Admin.create(userData);
    sendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.adminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const findAdmin = await Admin.findOne({ email }).select("+password");

    if (!findAdmin) {
      throw new Error("Admin not found");
    }

    if (findAdmin.role !== "admin") {
      throw new Error("Not Authorized");
    }

    if (await findAdmin.matchPasswords(password)) {
      // const token = generateToken({ id: findAdmin._id });
      const token = generateToken(findAdmin._id, findAdmin.role);

      await Admin.findByIdAndUpdate(
        { _id: findAdmin._id?.toString() },
        { activeToken: token },
        { new: true }
      );
      const user = {
        success: true,
        user: {
          _id: findAdmin._id,
          firstname: findAdmin.firstname,
          lastname: findAdmin.lastname,
          email: findAdmin.email,
        },
        token: token,
      };

      return res.status(200).json(user);
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      token = authHeader;
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Please login to access this resource" });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    const userData = await User.findOne({ _id: decodedData?.id });

    if (userData.activeToken && userData.activeToken === token) {
      const user = await User.findOneAndUpdate(
        { _id: decodedData.id, activeToken: token },
        { $unset: { activeToken: "" } },
        { new: true }
      );
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid session or token, please login again" });
      }
      return res.status(200).json({
        message: `${userData._id} is Logout Successfully`,
      });
    } else {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      console.error("Other error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }
};

exports.adminLogout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      token = authHeader;
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Please login to access this resource" });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    const userData = await Admin.findOne({ _id: decodedData?.id });

    if (userData.activeToken && userData.activeToken === token) {
      const user = await Admin.findOneAndUpdate(
        { _id: decodedData.id, activeToken: token },
        { $unset: { activeToken: "" } },
        { new: true }
      );
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid session or token, please login again" });
      }
      return res.status(200).json({
        message: `${userData._id} is Logout Successfully`,
      });
    } else {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      console.error("Other error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }
};

// exports.generateOtp = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
//     const otp = new OTP({ user: user._id, otp: otpCode });
//     await otp.save();

//     // send otp to users Email





//     // await sendOTP(user.email, otpCode);

//     res.status(200).json({ message: 'OTP sent successfully', otpCode });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

exports.generateOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    const otp = new OTP({ user: user._id, otp: otpCode });
    await otp.save();

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CLIENT_EMAIL, // Your email username
        pass: process.env.CLIENT_EMAIL_PASSWORD // Your email password
      },
      tls: {
        rejectUnauthorized: false // Disable SSL verification
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.CLIENT_EMAIL, // Sender email
      to: user.email, // Receiver email (user's email)
      subject: 'Your OTP', // Email subject
      html: `
        <p>Dear ${user.firstname},</p>
        <p>Thank you for choosing our counseling platform.</p>
        <p>Your OTP for logging in is: <strong>${otpCode}</strong></p>
        <p>We're here to support you on your journey. If you have any questions or need assistance, feel free to reach out to us.</p>
        <p>Best regards,</p>
        <p>Your Counseling Platform Team</p>
      `
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send OTP' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'OTP sent successfully', otpCode });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.verifyOtp = async (req, res) => {
  try {
    const {otp ,userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const otpRecord = await OTP.findOne({ user: userId, otp });
    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Check if OTP has expired
    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    // Delete OTP record after verification
    await OTP.deleteOne({ _id: otpRecord._id });

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json(`${email} this email is not registered`);
    }
    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `https://counselling-backend.vercel.app/auth/reset-password/${resetToken}`;

    const message = `
    <!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
        }
        .header {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px 5px 0 0;
        }
        .content {
            padding: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white !important;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 10px;
            border-top: 1px solid #e0e0e0;
            border-radius: 0 0 5px 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Hello ${user.firstname},</h2>
        </div>
        <div class="content">
            <p>We have received a request to reset your password for your account on <strong>Event Panel</strong>. If you did not request this change, you can ignore this email and your password will not be changed.</p>
            
            <p>To reset your password, please click on the following link and follow the instructions:</p>
            
            <p><a class="button" href="${resetUrl}">Reset Password</a></p>
            
            <p>This link will expire in <strong>15 minutes</strong> for security reasons. If you need to reset your password after this time, please make another request.</p>
        </div>
        <div class="footer">
            <h3>Thank you,</h3>
            <h3>Event Team </h3>
        </div>
    </div>
</body>
</html>
    `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Account Password Reset Link",
        text: message,
      });
      res.status(200).json({
        success: true,
        data: "Password Reset Email Sent Successfully",
      });
    } catch (error) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;

      await user.save();

      return res
        .status(500)
        .json({ success: false, data: "Email could not be sent" });
    }
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({
      passwordResetToken: req.params.resetToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      res.status(400).json("Invalid Reset Token");

    }
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();
    res.status(201).json({
      success: true,
      data: "Password Reset Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyUser = async (req, res) => {
  const { token } = req.params;

  try {
    const decodedData = verifyToken(token);

    if (!decodedData) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    const { id } = decodedData;

    const LoggedUser = await User.findOne({ _id: id, activeToken: token }).select("-password -activeToken");

    if (!LoggedUser) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    return res.status(200).json({ data: LoggedUser, message: "Verification Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.verifyAdmin = async (req, res) => {
  const { token } = req.params;

  try {
    const decodedData = verifyToken(token);

    if (!decodedData) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    const { id } = decodedData;

    const LoggedUser = await Admin.findOne({ _id: id, activeToken: token }).select("-password -activeToken");

    if (!LoggedUser) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    return res.status(200).json({ data: LoggedUser, message: "Verification Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};


exports.updatedUser = async (req, res) => {
  try {
    let updateData = req.body;

    // Convert SubscriptionsPlan to string if it's an array
    if (Array.isArray(updateData.SubscriptionsPlan)) {
      updateData.SubscriptionsPlan = updateData.SubscriptionsPlan[0];
    }

    // Find user by ID and update with the modified data
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (updateData.SubscriptionsPlan === 'One on One' || updateData.SubscriptionsPlan === 'Pro') {
      updatedUser.User_Intersted = 'Intersted';
    }

    res.json(updatedUser);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};



 // Working 

// exports.updatedUser = async (req, res) => {
//   try {
//     let updateData = req.body;

//     // Convert SubscriptionsPlan to string if it's an array
//     if (Array.isArray(updateData.SubscriptionsPlan)) {
//       updateData.SubscriptionsPlan = updateData.SubscriptionsPlan[0];
//     }

//     // Find user by ID and update with the modified data
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true });

//     // If the user is marked as interested, send an email
//     if (updateData.SubscriptionsPlan === 'One on One' || updateData.SubscriptionsPlan === 'Pro') {
//       updatedUser.User_Intersted = 'Intersted';

//       // Send email to the user
//       await sendEmailIntersted(updatedUser.email,  updatedUser.firstname  , updatedUser.SubscriptionsPlan);
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };



// //  Send a Email 

// // Function to send welcome email
// async function sendEmailIntersted(email, firstname , SubscriptionsPlan) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.CLIENT_EMAIL,
//       pass: process.env.CLIENT_EMAIL_PASSWORD
//     },
//     tls: {
//       rejectUnauthorized: false // Disable SSL verification
//     },
//   });


//   const mailOptions = {
//     from: 'harshal.brilliance@gmail.com',
//     to: email,
//     subject: 'Welcome to Our Platform!',
//     html: `<p>Thank you for joining us! As a valued member, you now have access to our platform's features and resources.</p>
//     <p>Hello Admin,</p>
//     <p>A new student, <Strong>${firstname}</Strong>, has shown interest in our premium services. They are interested in <Strong>${SubscriptionsPlan}</Strong> plans. Please reach out to them shortly to provide more details about these plans.</p>
//     <p>Looking forward to your assistance in providing information about our premium services!</p>
    
//     `
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// }



exports.getallUser = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const searchQuery = req.query.search;

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    const userQuery = User.find().populate("wishlist");

    if (searchQuery) {
      userQuery.or([
        { firstname: { $regex: new RegExp(searchQuery, "i") } },
        { lastname: { $regex: new RegExp(searchQuery, "i") } },
        { email: { $regex: new RegExp(searchQuery, "i") } },
        { mobile: { $regex: new RegExp(searchQuery, "i") } },
      ]);
    }

    // Count total items
    const totalItems = await User.countDocuments(userQuery);

    // Calculate total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const skip = (currentPage - 1) * itemsPerPage;
    const users = await userQuery.sort({ firstname: 1 }).skip(skip).limit(itemsPerPage).exec();

    res.json({
      totalItems,
      totalPages,
      currentPage,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getaUser = async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);

  try {
    const getaUser = await User.findById(_id).populate("wishlist")
    res.json({
      getaUser
    });
  } catch (error) {
    throw new Error(error);
  }
};


// Get All Users data -- working controller

exports.getallUsers = async (req, res) => {
  try {
    const user = await User.find()
      .populate("wishlist")
      .populate('All_India_Category_id')
      .populate('Course_Preference')
      .populate({
        path: 'domicileStateCategory',
        populate: [
          { path: 'state_id', model: 'State' },
          { path: 'category_id', model: 'Category' }
        ]
      })
      .populate('OtherStatePreferences.Preference_Fields')
    res.status(200).json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }

}



// working controller

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("wishlist")
      .populate('All_India_Category_id')
      .populate('Course_Preference')
      .populate({
        path: 'domicileStateCategory',
        populate: [
          { path: 'state_id', model: 'State' },
          { path: 'category_id', model: 'Category' }
        ]
      
      })
      .populate('OtherStatePreferences.Preference_Fields')
      .populate({
        path: 'State_District',
        populate: [
          { path: 'state_id', model: 'State' },
          { path: 'district_id', model: 'District' }
        ]
      })



    res.status(200).json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
};

// const User = require('../models/User');

// exports.getUserById = async (req, res) => {
//   try {
//     const userId = req.params.id; // Assuming the ID is passed as a URL parameter
//     const user = await User.findById(userId)
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     res.status(200).json({ success: true, data: user });
//   } catch (error) {
//     console.error('Error getting user by ID:', error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// };


exports.deleteaUser = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({
      deleteaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { _id } = req.user._id;

    const user = await User.findById(_id).select("+password");
    // Verify the current password
    const isPasswordMatch = await user.matchPasswords(oldPassword);
    if (!isPasswordMatch) {
      return res.status(203).json({ message: "Current password is incorrect" });
    }

    user.password = newPassword;
    user.passwordChangedAt = Date.now();
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Password change failed" });
  }
};

exports.addToWishlist = async (req, res) => {
  const { collegeId } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId).populate("wishlist");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const alreadyAdded = user.wishlist.includes(collegeId);

    if (alreadyAdded) {
      return res.status(400).json({ error: "College already added to wishlist" });
    }

    user.wishlist.push(collegeId);
    await user.save();

    res.json({ message: "College added to wishlist successfully", wishlist: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding college to wishlist" });
  }
};

exports.deleteAllWishlistItems = async (req, res) => {
  const { _id } = req.user._id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.wishlist = [];

    await user.save();

    res.json({ message: "All wishlist items deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting wishlist items" });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { collegeId } = req.params;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const collegeIndex = user.wishlist.indexOf(collegeId);

    if (collegeIndex === -1) {
      return res.status(400).json({ error: "College not found in wishlist" });
    }

    user.wishlist.splice(collegeIndex, 1);
    await user.save();

    res.json({ message: "College removed from wishlist successfully", wishlist: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while removing college from wishlist" });
  }
};


exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find the profile associated with the user
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    profile.NEET_Details = req.body.NEET_Details || profile.NEET_Details;
    profile.Category_id = req.body.Category_id || profile.Category_id;
    profile.domicileStateCategory = req.body.domicileStateCategory || profile.domicileStateCategory;
    profile.ParellelReservations = req.body.ParellelReservations || profile.ParellelReservations;
    profile.MinorityReservations = req.body.MinorityReservations || profile.MinorityReservations;
    profile.Course_Preference = req.body.Course_Preference || profile.Course_Preference;
    profile.Admissions_Preferences = req.body.Admissions_Preferences || profile.Admissions_Preferences;
    profile.NRI_Quta_Prefernce = req.body.NRI_Quta_Prefernce || profile.NRI_Quta_Prefernce;
    profile.OtherStatePreferences = req.body.OtherStatePreferences || profile.OtherStatePreferences;
    profile.AnnualMedicalCourseBudget = req.body.AnnualMedicalCourseBudget || profile.AnnualMedicalCourseBudget;
    profile.standard12thMarks = req.body.standard12thMarks || profile.standard12thMarks;
    profile.exams = req.body.exams || profile.exams;
    profile.studentDetails = req.body.studentDetails || profile.studentDetails;
    profile.parentDetails = req.body.parentDetails || profile.parentDetails;

    // Save the updated profile
    await profile.save();

    res.status(200).json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};






exports.updatedUser_Steps = async (req, res) => {
  try {
    // const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // res.json(updatedUser);
    const step_status = req.body.step_status;
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'user not found' });
    }
    if (!step_status) {
      return res.status(404).json({ success: false, message: 'plz provide step_status' });
    }


    if (step_status == 'neet_info') {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // Steps
      const user = await Steps.findOne({ User_Id: id });
      if (!user) {
        const newUser = new Steps({
          User_Id: id,
          neet_info: 'completed'
        });
        const updatedUser = await newUser.save();
      } else {

        const updatedUser = await Steps.findByIdAndUpdate(
          { _id: user.id }, // Query to find the document
          { neet_info: 'completed' }, // Update the neet_info field
          { new: true } // Return the updated document
        );
      }
      // res.json(updatedUser);
      return res.status(200).json({ success: true, message: 'User neet infomation updated successfully', data: updatedUser });

    } else if (step_status == 'admision_pre') {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      const user = await Steps.findOne({ User_Id: id });
      if (!user) {
        const newUser = new Steps({
          User_Id: id,
          admision_pre: 'completed'
        });
        const updatedUser = await newUser.save();
      } else {
        const updatedUser = await Steps.findByIdAndUpdate(
          { _id: user.id }, // Query to find the document
          { admision_pre: 'completed' }, // Update the neet_info field
          { new: true } // Return the updated document
        );
      }
      // res.json(updatedUser);
      return res.status(200).json({ success: true, message: 'User admision preference updated successfully', data: updatedUser });

    } else if (step_status == 'education_info') {
      const user = await Steps.findOne({ User_Id: id });
      if (!user) {
        const newUser = new Steps({
          User_Id: id,
          education_info: 'completed'
        });
        const updatedUser = await newUser.save();
      } else {
        const updatedUser = await Steps.findByIdAndUpdate(
          { _id: user.id },  // Query to find the document
          { education_info: 'completed' }, // Update the neet_info field
          { new: true } // Return the updated document
        );
      }
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // res.json(updatedUser);
      return res.status(200).json({ success: true, message: 'User education infomation updated successfully', data: updatedUser });

    }
    else if (step_status == 'personal_details') {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      const user = await Steps.findOne({ User_Id: id });
      if (!user) {
        const newUser = new Steps({
          User_Id: id,
          personal_details: 'completed'
        });
        const updatedUser = await newUser.save();
      } else {
        const updatedUser = await Steps.findByIdAndUpdate(
          { _id: user.id },  // Query to find the document
          { personal_details: 'completed' }, // Update the neet_info field
          { new: true } // Return the updated document
        );
      }
      // res.json(updatedUser);
      return res.status(200).json({ success: true, message: 'User personal details updated successfully', data: updatedUser });
    } else {
      return res.status(404).json({ success: false, message: 'plz provide right status value' });
    }
  } catch (error) {
    throw new Error(error);
  }
};


// make a table a steps get by id

exports.getstepsbyuserId = async (req, res) => {
  try {
    const user = await Steps.findOne({ User_Id: req.params.id });
    res.status(200).json({
      messsage: 'User steps',
      user
    });
  } catch (error) {
    throw new Error(error);
  }
}


exports.superAdminRegister = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await SuperAdmin.findOne({ email });

  if (existingUser) {
    return res.status(203).json({ error: "Super Admin with this email already exists." });
  }

  const userData = {
    email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile,
    role: req.body.role
  };

  if (password) {
    userData.password = password;
  }

  try {
    const newUser = await SuperAdmin.create(userData);
    sendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.superAdminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const findAdmin = await SuperAdmin.findOne({ email }).select("+password");

    if (!findAdmin) {
      throw new Error("SuperAdmin not found");
    }

    if (findAdmin.role !== "super-admin") {
      throw new Error("Not Authorized");
    }

    if (await findAdmin.matchPasswords(password)) {
      // const token = generateToken({ id: findAdmin._id });
      const token = generateToken(findAdmin._id, findAdmin.role);

      await SuperAdmin.findByIdAndUpdate(
        { _id: findAdmin._id?.toString() },
        { activeToken: token },
        { new: true }
      );
      const user = {
        success: true,
        user: {
          _id: findAdmin._id,
          firstname: findAdmin.firstname,
          lastname: findAdmin.lastname,
          email: findAdmin.email,
          role: findAdmin.role
        },
        token: token,
      };

      return res.status(200).json(user);
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

exports.superAdminLogout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      token = authHeader;
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Please login to access this resource" });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    const userData = await SuperAdmin.findOne({ _id: decodedData?.id });

    if (userData.activeToken && userData.activeToken === token) {
      const user = await SuperAdmin.findOneAndUpdate(
        { _id: decodedData.id, activeToken: token },
        { $unset: { activeToken: "" } },
        { new: true }
      );
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid session or token, please login again" });
      }
      return res.status(200).json({
        message: `${userData._id} is Logout Successfully`,
      });
    } else {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired, please login again" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      console.error("Other error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }
};

exports.superAdminUpdate = async (req, res) => {
  try {
    const updatedUser = await SuperAdmin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
};


exports.getallSuperAdmin = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const searchQuery = req.query.search;

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    const userQuery = SuperAdmin.find()

    if (searchQuery) {
      userQuery.or([
        { firstname: { $regex: new RegExp(searchQuery, "i") } },
        { lastname: { $regex: new RegExp(searchQuery, "i") } },
        { email: { $regex: new RegExp(searchQuery, "i") } },
        { mobile: { $regex: new RegExp(searchQuery, "i") } },
      ]);
    }

    // Count total items
    const totalItems = await SuperAdmin.countDocuments(userQuery);

    // Calculate total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const skip = (currentPage - 1) * itemsPerPage;
    const users = await userQuery.sort({ firstname: 1 }).skip(skip).limit(itemsPerPage).exec();

    res.json({
      totalItems,
      totalPages,
      currentPage,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.getSuperAdminById = async (req, res) => {
  try {
    const user = await SuperAdmin.findById(req.params.id);
    res.status(200).json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
};



exports.deleteaSuperAdmin = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteaUser = await SuperAdmin.findByIdAndDelete(id);
    res.json({
      deleteaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
};


// make a api to send a user's email by their id


exports.PushMail = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    console.log(user);
    const email = user.email;

    console.log(email);

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email address not found for the user' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CLIENT_EMAIL,
        pass: process.env.CLIENT_EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false // Disable SSL verification
      },
    });

    const mailOptions = {
      from: "harshal.brilliance@gmail.com",
      to: email,
      subject: 'Welcome to Our Platform!',
      html: `<p>Thank you for joining us! As a valued member, you now have access to our platform's features and resources.</p>
      <p>Hello Admin,</p>
      <p>A new student, <Strong>${user.firstname}</Strong>, has shown interest in our premium services. They are interested in <Strong>${user.SubscriptionsPlan}</Strong> plans. Please reach out to them shortly to provide more details about these plans.</p>
      <p>Looking forward to your assistance in providing information about our premium services!</p>
      
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}


// make a api to get Users by their User_Intersted is 'Intersted'


exports.getInterstedUsers  = async (req, res) => {
  try {
    // Extract query parameters
    const { page = 1, limit = 20, firstName, idNumber } = req.query;
    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);
    const skip = (currentPage - 1) * itemsPerPage;

    // Construct query conditions
    const query = { User_Intersted: 'Intersted' };
    if (firstName) {
      query.firstname = { $regex: new RegExp(firstName, 'i') }; // Case-insensitive search
    }
    if (idNumber) {
      query.Id_Number = idNumber;
    }

    // Find users based on query conditions, sort by firstName, and apply pagination
    const users = await User.find(query).sort({ firstname: 1 }).skip(skip).limit(itemsPerPage);

    // Check if users are found
    if (users.length === 0) {
      return res.status(404).json({ success: false, message: 'No users found' });
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}


