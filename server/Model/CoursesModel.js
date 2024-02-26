const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
    },
    admissionCriteria: {
      type: String,
    },
    duration: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
