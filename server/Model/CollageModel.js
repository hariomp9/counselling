const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    website: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    programsOffered: [{ type: String }],
    entranceExamRequirements: [{ type: String }],
    facultyProfiles: [{ type: String }],
    campusFacilities: [{ type: String }],
    admissionCriteria: {
      cutOffPercentage: Number,
      entranceExamScore: Number,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

const College = mongoose.model("College", collegeSchema);

module.exports = College;
