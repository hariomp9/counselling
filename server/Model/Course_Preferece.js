const mongoose = require("mongoose");

const coursePreferenceSchema = new mongoose.Schema({

    course_Preference:{

        type: String,
        required: true
    }
})

const Course_Preference = mongoose.model("Course_Preference", coursePreferenceSchema);

module.exports = Course_Preference;