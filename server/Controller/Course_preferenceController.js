const Course_Preference  = require("../Model/Course_Preferece")

// Create and Save a new Course_Preference

exports.createCourse_Preference = async (req, res) => {
    const { course_Preference } = req.body;
    try {
        // Check if the course preference already exists
        const existingCoursePreference = await Course_Preference.findOne({ course_Preference });
        if (existingCoursePreference) {
            return res.status(400).json({ message: "Course Preference already exists" });
        }

        // Create a new Course_Preference
        const newCoursePreference = await Course_Preference.create({ course_Preference });
        res.status(201).json({ message: "Course Preference created successfully", Course_Preference: newCoursePreference });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.findAllCourse_Preferences = async (req, res) => {
    try {
        let { page = 1, limit = 30, search = '' } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const query = {};
        if (search) {
            query.$or = [
                { // Assuming you have a field named 'name' in your Course_Preference model
                    name: { $regex: new RegExp(search, 'i') } // Case-insensitive search
                }
                // Add more fields as needed for search
            ];
        }

        const count = await Course_Preference.countDocuments(query);
        const totalPages = Math.ceil(count / limit);

        const coursePreferences = await Course_Preference.find(query)
            .limit(limit)
            .skip((page - 1) * limit);

        res.status(200).json({
            totalPages,
            currentPage: page,
            totalRecords: count,
            coursePreferences
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


// Find a single Course_Preference with an id

exports.findOneCourse_Preference = async (req, res) => {
    try {
        const id = req.params.id;
        const coursePreference = await Course_Preference.findById(id);
        if (!coursePreference) {
            return res.status(404).json({ message: "Course Preference not found" });
        }
        res.status(200).json(coursePreference);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}



