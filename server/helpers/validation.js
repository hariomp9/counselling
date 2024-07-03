const joi = require('joi');
const mongoose = require('mongoose');

// Define the validation schema for domicileStateCategory


const domicileStateCategorySchema = joi.array().items(
    joi.object({
        state_id: joi.string().custom((value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return helpers.error('any.invalid');
            }
            return value;
        }),
        category_id: joi.string().custom((value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return helpers.error('any.invalid');
            }
            return value;
        })
    })
);

// Define the validation for   State_Disrict
const state_districtSchema = joi.array().items(
    joi.object({
        state_id: joi.string().custom((value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return helpers.error('any.invalid');
            }
            return value;
        }),
        district_id: joi.string().custom((value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return helpers.error('any.invalid');
            }
            return value;
        })
    }).required()
);



// // Define the validation schema for OtherStatePreferences
// const OtherStatePreferencesSchema = joi.array().items(
//     joi.object({
//         select_options: joi.string().allow('', null), // Making select_options optional
//         Preference_Fields: joi.array().items(joi.string().custom((value, helpers) => {
//             if (!mongoose.Types.ObjectId.isValid(value)) {
//                 return helpers.error('any.invalid');
//             }
//             return value;
//         })).required() // Assuming Preference_Fields is required
//     })
// );




const coursePreferenceSchema = joi.array().items(
    joi.string().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return helpers.error('any.invalid');
        }
        return value;
    })
);


const allIndiaCategoryIdSchema = joi.object({
    All_India_Category_id: joi.string().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return helpers.error('any.invalid');
        }
        return value;
    })
});


// Validation middleware for domicileStateCategory and OtherStatePreferences
exports.validateUser = async (req, res, next) => {
    try {
        const { domicileStateCategory, OtherStatePreferences,Course_Preference,State_Disrict, All_India_Category_id} = req.body;
        await domicileStateCategorySchema.validateAsync(domicileStateCategory);
        // await OtherStatePreferencesSchema.validateAsync(OtherStatePreferences);
        await coursePreferenceSchema.validateAsync(Course_Preference);
        await state_districtSchema.validateAsync(State_Disrict);
        await allIndiaCategoryIdSchema.validateAsync({ All_India_Category_id });
        next();
    } catch (error) {
        // If validation fails for either property, return a 400 status with the error message
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
};
