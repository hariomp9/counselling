const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    Select_category: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Changed from 'timestamp' to 'timestamps'
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
