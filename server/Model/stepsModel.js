const mongoose = require('mongoose');

// makea schema for steps

const stepsSchema = new mongoose.Schema({
    User_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    education_info:{
        type: String,
        enum:["pending","completed"],
        default:"pending"

    },
    admision_pre:{
        type: String,
        enum:["pending","completed"],
        default:"pending"

    },
    neet_info:{
        type: String,
        enum:["pending","completed"],
        default:"pending"

    },

    personal_details:{
        type: String,
        enum:["pending","completed"],
        default:"pending"

    },
    // step_status: {
    //   type: String,
    //   enum: ["pending", "in_progress", "completed"],
    //   enum: "pending",
    // },
    
})

// Model for schema

const Steps = mongoose.model('Steps', stepsSchema);
module.exports = Steps;