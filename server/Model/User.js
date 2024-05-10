const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Course_Preference = require("../Model/Course_Preferece");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    mobile: {
      type: String,
    },
    whatsappMobile: {
      type: Number,
    },
    Gender: {
      type: String,
      enum: ['Male', 'Female']
    },

    // Subscription: {
    //   type: String,
    // },

    SubscriptionsPlan: [{
      type: String,
<<<<<<< HEAD
      // enum: ["Free", "One-And-One", "Pro"],
      default: "Free",
=======
      default: "free",
>>>>>>> a1c1578f38454232d6194ed23a587bd7af449f0a
      required: true
    }],


    Comments:{
      type: String
    },

    password: {
      type: String,
      minlength: 6,
      select: false,
    },
    cast: {
      type: String
    },
    role: {
      type: String,
      enum: ['student', 'parent'],
      default: 'student',
    },
    activeToken: {
      type: String,
    },
    address: String,
    state: {
      type: String
    },
    city: {
      type: String
    },
    documents: [{
      type: String
    }],
    isVerified: {
      type: Boolean,
      default: false,
    },
    careerGoals: {
      type: String
    },
    tenthPercentage: {
      type: String
    },
    twelfthPercentage: {
      type: String
    },
    neetScore: {
      type: String
    },
    fathersName: {
      type: String
    },
    fathersOccupation: {
      type: String
    },
    mothersName: {
      type: String
    },
    mothersOccupation: {
      type: String
    },
    wishlist: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'College'
    }],


    // Add NEET Details
    NEET_Details: [{

      FullName: {
        type: String,
        // required: true
      },

      MobileNumber: {
        type: String,
        // required: true
      },

      WhatsappNumber: {
        type: String,
        // required: true
      },

      NEET_RegisterNumber: {
        type: String,
        // required: true
      },

      RollNo: {
        type: String,
        // required: true
      },

      Marks: {
        type: String,
        // required: true
      },

      AllIndiaRank: {
        type: String,
        // required: true
      },
      StateRank: {
        type: String,
        // required: true
      }

    }],

    //All India Category

    All_India_Category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },

    //  Add domicileStateCategory

    domicileStateCategory: [{
      state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
        validate: {
          validator: function(v) {
            return mongoose.Types.ObjectId.isValid(v);
          },
          message: props => `${props.value} is not a valid state_id!`
        }
      },
      category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        validate: {
          validator: function(v) {
            return mongoose.Types.ObjectId.isValid(v);
          },
          message: props => `${props.value} is not a valid category_id!`
        }
      }
    }],


    // State_District

    State_District:[
     {
      state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
        validate: {
          validator: function(v) {
            return mongoose.Types.ObjectId.isValid(v);
          },
          message: props => `${props.value} is not a valid state_id!`
        }
      },
      district_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District",
        validate: {
          validator: function(v) {
            return mongoose.Types.ObjectId.isValid(v);
          },
          message: props => `${props.value} is not a valid district_id!`
        }
      }
     }
      
     ],

    // Parellel Reservations

    ParellelReservations: [{
      select_options: {
        type: String,
        enum: ["Yes", "No"]
      },
      Reservation_Fields: {
        type: String,
        enum: ["HA", "MKB", "DEF", "PWD", "ORPHAN"]
      }

    }],

    // Minority Reservations

    MinorityReservations: [{
      type: String,
      enum: ["Jain Minority", "Muslim Minority", "Christian Minority", "Gujarati / Sindhi Minority", "Hindi Linguistic Minority"]
    }],

    // Course Preference and User can select multiple courses

    Course_Preference: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course_Preference"
    }],

    // Addmissions Preferences

    Admissions_Preferences: {
      type: mongoose.Schema.Types.Mixed,
      enum: ["Government College", "Private/Management", "Deemed University"]
    },

    // NRI Quota Preferences
    // NRI Quota Preference array
    NRI_Quta_Prefernce: [{
      // NRI Quota Preferences
      nriQuotaPreference: {
        type: String,
        enum: ['Yes', 'No'],
        // required: true
      },
      // Relationship with Sponsor
      relationshipWithSponsor: {
        type: String,
        required: function () {
          return this.nriQuotaPreference === 'Yes'; // Required only if NRI Quota Preference is 'Yes'
        }
      },
      // Sponsor's Country
      sponsorsCountry: {
        type: String,
        required: function () {
          return this.nriQuotaPreference === 'Yes'; // Required only if NRI Quota Preference is 'Yes'
        }
      },
      // Sponsor's Country State
      sponsorsCountryState: {
        type: String,
        required: function () {
          return this.nriQuotaPreference === 'Yes'; // Required only if NRI Quota Preference is 'Yes'
        }
      }
    }],


    // Intersted_in_other_state_Preferences
    OtherStatePreferences: [{
      select_options: {
        type: String,
        enum: ["Yes", "No"]
      },
      Preference_Fields: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "State"
      }]
    }],

    // Anual  Medical Course Buget  type can be number and string

    AnnualMedicalCourseBudget: {
      type: String,
      // required: true
    },

    // Standard 12th Exam Marks 
    standard_12thMarks: [{
      subject: {
        type: String,
        // required: true,
      },
      obtained: {
        type: Number,
        // required: true,
      },
      outOf: {
        type: Number,
        // required: true,
      },
    }],

    // Exam Details
    exams: [{
      type: {
        type: String,
        enum: ['10th', '12th'], // Enum for exam type
        // required: true,
      },
      passingDistrict: {
        type: String,
        // required: true,
      },
      passingState: {
        type: String,
        // required: true,
      }
    }],
    // Academic Details

    // Exam Details
    Academic_Details: [{
      type: {
        type: String,
        // required: true,
      },
      Board_University: {
        type: String,
        // required: true,
      },
      School_College: {
        type: String,
        // required: true,
      },
      PassingYear: {
        type: Number,
        // required: true,
      },
      ObtainedMarks: {
        type: Number,
        // required: true,
      },
      Result: {
        type: String,
        // required: true,
      },
      CGPA: {
        type: String,
        required: true
      }

    }],

    // Student'S Address

    StudentAddress: [{

      HouseNo: {
        type: String,
        required: true
      },
      Area: {
        type: String,
        required: true
      },
      City: {
        type: String,
        required: true
      },
      Distict: {
        type: String,
        required: true
      },
      State: {
        type: String,
        required: true
      },
      PinCode: {
        type: String,
        required: true
      }

    }],


    // Student Details 

    studentDetails: [{

      Gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
      },
      Email: {
        type: String,
        // required: true,
      },

      Mobile: {
        type: String,
        // required: true,
      }


    }],


    // Parent Details

    parentDetails: [{
      parentName: {
        type: String,
        // required: true,
      },
      parentEmail: {
        type: String,
        // required: true,
      },
      parentMobile: {
        type: String,
        // required: true,
      },

      Parents_Profession:{
        type:String,
        required:false
      },

      parentOccupation: {
        type: String,
        enum: ['Govt of Maharashtra Employee?', 'Govt of India Employee?']
      },

      FamilyAnualIncome: {
        type: String,
        required: false
      }
    }],

    // Make a User Subscriptions plan

 


    // step_status: {
    //   type: String,
    //   enum: ["pending", "in_progress", "completed"],
    //   default: "pending",
    // },

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.passwordResetToken = resetToken;
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
  return resetToken;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
