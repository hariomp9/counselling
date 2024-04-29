const Category = require('../Model/Allcategory');

exports.createCategory = async (req, res) => {
    const { Select_category } = req.body;

    try {
        // Check if the category already exists
        const existingCategory = await Category.findOne({ Select_category });

        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }

        // Create a new category
        const newCategory = await Category.create({ Select_category });

        res.status(201).json({ message: "Category created successfully", category: newCategory });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.getAllCategories = async (req, res) => {
    try {
        const { page = 1, limit = 1000, search } = req.query;

        // Construct the query based on search parameter
        const query = search ? { Select_category: { $regex: search, $options: "i" } } : {};

        const categories = await Category.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Category.countDocuments(query);

        res.status(200).json({
            categories,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        console.error("Error getting categories:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getCategory = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const searchQuery = req.query.search || '';

        // Constructing the search criteria
        const searchCriteria = {
            Select_category: { 
                $in: ['OBC', 'GEN', 'EWS', 'SC', 'ST','Gen-pwD','OBC PWD','SC PWD','EWS PWD','ST PWD']
            }
        };
        if (searchQuery) {
            searchCriteria.$or = [
                { Select_category: { $regex: searchQuery, $options: 'i' } }
            ];
        }

        // Querying categories with pagination and search
        const categories = await Category.find(searchCriteria)
            .skip((page - 1) * limit)
            .limit(limit);

        if (categories.length === 0) {
            return res.status(404).json({ error: "Categories not found" });
        }


        
        res.status(200).json({categories,categoriesCount:categories.length});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}






exports.getCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(category);
    } catch (error) {
        console.error("Error getting category by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
