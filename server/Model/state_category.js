const mongoose = require('mongoose')

const state_categorySchema = new mongoose.Schema({
    state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
})

const State_category = mongoose.model('State_category', state_categorySchema)

module.exports = State_category;