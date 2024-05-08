// Import the State_category model
const State_category = require("../Model/state_category");
const mongoose = require("mongoose");

// Create a state category
exports.CreateState_category = async (req, res) => {
    const { state_id, category_id } = req.body;

    // check state_id and category_id should be mongoose object id

    if (!state_id || !category_id) {
        return res.status(400).json({ message: "Please provide both state_id and category_id" });
    }

    // validatie id means should be a mongoose object id
    if (!mongoose.Types.ObjectId.isValid(state_id) || !mongoose.Types.ObjectId.isValid(category_id)) {
        return res.status(400).json({ message: "Invalid state_id or category_id" });
    }

    try {
        // Check if the state_category already exists
        const existingStateCategory = await State_category.findOne({ state_id, category_id });
        if (existingStateCategory) {
            return res.status(400).json({ message: "State category already exists" });
        }

        // Create a new state_category
        const newStateCategory = await State_category.create({ state_id, category_id });
        res.status(201).json({ message: "State category created successfully", state_category: newStateCategory });
    } catch (error) {
        console.error("Error creating state category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const State = require("../Model/StateModel");
// Import the Category model
const Category = require("../Model/Allcategory");

// Find all states in a category
exports.getStatesByCategory = async (req, res) => {
    const stateId = req.params.state_id;

    try {
        // Find all state-category documents with the given state_id, and populate both state and category details
        const states = await State_category.find({ state_id: stateId })
            .populate({ 
                path: 'state_id', 
                select: 'name' 
            });

        // Group categories by state with category count
        const stateCategories = {};

        // Iterate over each state-category document
        for (const stateCategory of states) {
            const stateName = stateCategory.state_id.name;
            const categoryName = stateCategory.category_id.Select_category;

            // Check if the state already exists in stateCategories
            if (!stateCategories[stateId]) {
                // If not, initialize the category count for this state
                stateCategories[stateId] = {
                    state_id: stateId,
                    state_name: stateName,
                    category_count: 0,
                    categories: []
                };
            }

            // Increment the category count for this state
            stateCategories[stateId].category_count++;

            // Push the category name into the categories array
            stateCategories[stateId].categories.push({
                _id: stateCategory.category_id._id,
                name: categoryName
            });

            // Find the category name from the Category model using the _id
            try {
                const category = await Category.findById(stateCategory.category_id);
                if (category) {
                    // Update the category name in the categories array
                    const categoryObj = stateCategories[stateId].categories.find(cat => cat._id.equals(category._id));
                    if (categoryObj) {
                        categoryObj.Select_category = category.Select_category;
                    }
                }
            } catch (error) {
                console.error("Error finding category:", error);
            }
        }

        // Convert stateCategories object to array for response
        const stateCategoriesArray = Object.values(stateCategories);

        // Send the state categories as a JSON response
        res.status(200).json(stateCategoriesArray);
    } catch (error) {
        console.error("Error getting categories by state:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};






// Find all states
exports.getAllStates = async (req, res) => {
    try {
        const { page = 1, limit = 10, search } = req.query;
        let query = {};

        // If search parameter is provided, construct the query for searching states
        if (search) {
            query = { name: { $regex: search, $options: "i" } };
        }

        const states = await State_category.find(query)
            .limit(limit * 1) // Convert limit to a number
            .skip((page - 1) * limit) // Calculate number of documents to skip
            .populate('state_id', 'name') // Populate state_id field to include state name
            .exec();

        const count = await State_category.countDocuments(query);

        res.status(200).json({
            states,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        }); 
    } catch (error) {
        console.error("Error getting all states:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
