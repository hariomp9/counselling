const State_District = require('../Model/State_DistrictModel')

const mongoose = require('mongoose')

const { ObjectId } = require('mongodb');

exports.createState_District = async (req, res, next) => {
    const { state_id, district_ids } = req.body;
  
     console.log(req.body)


    try {
        if (!ObjectId.isValid(state_id)) {
            return res.status(400).json({ message: "Invalid state id" });
        }

        if (!district_ids || district_ids.length === 0 || !Array.isArray(district_ids)) {
            return res.status(400).json({ message: "Please provide at least one valid district id" });
        }
        if (district_ids.some(id => !ObjectId.isValid(id))) {
            return res.status(400).json({ message: "Invalid district id" });
        }

        const existingStateDistrict = await State_District.findOne({ state_id });
        if (existingStateDistrict) {
            return res.status(400).json({ message: "State relationship already exists" });
        }

        const objectIdDistrictIds = district_ids.map(id => id);
        const state_district = new State_District({
            state_id: state_id,
            district_ids: objectIdDistrictIds
        });

        const newStateDistrict = await state_district.save();
        res.status(201).json(newStateDistrict);
    } catch (error) {
        next(error);
    }
};



// Get all State_Districts from the database also populate the state and district details

// exports.getStateByDistrict = async (req, res) => {
//     const stateId = req.params.stateId

//     try{

//         const stateDistrict = await State_District.find({state_id: stateId}).populate({
//            path:'state_id',
//            select:'name'
//         })

//         // Group Districts by State with Districts count

//         const stateDistricts={};

//         for(const stateDistrict of stateDistrict){
//             if(!stateDistricts[stateDistrict.state_id.name]){
//                 stateDistricts[stateDistrict.state_id.name]={
//                     state:stateDistrict.state_id.name,
//                     districts:[]
//                 }
//             }

//             stateDistricts[stateDistrict.state_id.name].districts.push(stateDistrict)
//         }

//         try{

//             const statedata = await State.findById().populate({stateDistrict.state_id})
//             if(statedata){
//               statedata.stateDistricts=stateDistricts
//             }
//         }catch(error){

//             res.status(500).json({message:'Something went wrong'})
//         }
//         const stateDistrictArray = Object.values(stateDistricts)

//     }catch(error){
    
//     }

// }

// Get all State_Districts from the database and populate the state and district details
exports.getStateByDistrict = async (req, res) => {
    const stateId = req.params.stateId;
    console.log(stateId)
    try {
        // Find state-district relationships for the specified state ID and populate state and district details
        const stateDistricts = await State_District.find({ state_id: stateId })
            .populate({
                path: 'state_id',
                select: 'name' // Only select the 'name' field of the state
            })
            .populate('district_ids'); // Populate all district details

        res.status(200).json(stateDistricts);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
