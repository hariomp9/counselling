const mongoose = require("mongoose");

const choiceListSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    collegeIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "College" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChoiceList", choiceListSchema);
