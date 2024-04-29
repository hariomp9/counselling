const Country = require("../Model/coutryModel")

exports.CountryController = async (req, res) => {
    const { name } = req.body;
    
    try {
        // Check if the country already exists
        const existingCountry = await Country.findOne({ name });

        if (existingCountry) {
            return res.status(400).json({ message: "Country already exists" });
        }

        // Create a new country
        const newCountry = await Country.create({ name });

        res.status(201).json({ message: "Country created successfully", country: newCountry });
    } catch (error) {
        console.error("Error creating country:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.getAllCountries = async (req, res) => {
    try {
        const { page = 1, limit = 10, search } = req.query;
        let query = {};

        // If search parameter is provided, construct the query for searching countries
        if (search) {
            query = { name: { $regex: search, $options: "i" } };
        }

        const countries = await Country.find(query)
            .limit(limit * 1) // Convert limit to a number
            .skip((page - 1) * limit) // Calculate number of documents to skip
            .exec();

        const count = await Country.countDocuments(query);

        res.status(200).json({
            countries,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        console.error("Error getting countries:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.getCountryById = async (req, res) => {
    const countryId = req.params.id;

    try {
        const country = await Country.findById(countryId);

        if (!country) {
            return res.status(404).json({ message: "Country not found" });
        }

        res.status(200).json(country);
    } catch (error) {
        console.error("Error getting country by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};