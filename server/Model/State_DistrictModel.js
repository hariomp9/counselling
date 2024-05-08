const mongoose = require('mongoose');

const state_districtSchema = new mongoose.Schema({
    state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State', // Reference to the State model
        required: true
    },
    district_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District', // Reference to the District model
        required: true
    }]
});

const State_District = mongoose.model('State_District', state_districtSchema);

module.exports = State_District;
