const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
}, { timestamps: true });

const College = mongoose.model('College', collegeSchema);

module.exports = College;
