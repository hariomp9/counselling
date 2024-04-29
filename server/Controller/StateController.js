const State = require("../Model/StateModel")
const mongoose= require("mongoose")


exports.CreateState = async(req,res)=>{
    const{name,country_id}=req.body
    
    // Check if the state already exists
    const existingState = await State.findOne({ name });
    if(existingState){
        return res.status(400).json({ message: "State already exists" });
    }
    // Create a new state
    const newState = await State.create({ name,country_id });
    res.status(201).json({ message: "State created successfully", state: newState });
}




// exports.getStatesByCountry = async (req, res) => {
//     const countryId = req.params.country_id;

//     try {
//         const states = await State.find({ country_id: countryId }).populate('country_id', 'name');

//         // Group states by country
//         const groupedStates = {};

//         states.forEach(state => {
//             const countryName = state.country_id.name;

//             if (!groupedStates[countryName]) {
//                 groupedStates[countryName] = {
//                     _id: state.country_id._id,
//                     states: []
//                 };
//             }

//             groupedStates[countryName].states.push({
//                 _id: state._id,
//                 name: state.name
//             });
//         });

//         res.status(200).json(groupedStates);
//     } catch (error) {
//         console.error("Error getting states:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };

exports.getStatesByCountry = async (req, res) => {
    const Id = req.params.id;
    try{
        const states=await State.findById(Id)
        if(!states){
            return res.status(404).json({ message: "State not found" });
        }
        res.status(200).json(states)
    }
    catch(error){
        res.status(500).json({ error: "Internal server error" });
    
    }

}





exports.getAllStates = async (req, res) => {
    try {
        const { page = 1, limit = 40, search } = req.query;
        let query = {};

        // If search parameter is provided, construct the query for searching states
        if (search) {
            query = { name: { $regex: search, $options: "i" } };
        }

        const states = await State.find(query)
            .limit(limit * 1) // Convert limit to a number
            .skip((page - 1) * limit) // Calculate number of documents to skip
            .exec();

        const count = await State.countDocuments(query);

        res.status(200).json({
            states,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        console.error("Error getting states:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
