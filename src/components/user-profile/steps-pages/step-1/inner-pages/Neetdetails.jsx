import React, { useState } from "react";
import HeadTitle from "../HeadTitle";

const Neetdetails = ({ onFormDataChange }) => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    NEET_Details: {
      FullName: "",
      MobileNumber: "",
      WhatsappNumber: "",
      NEET_RegisterNumber: "",
      RollNo: "",
      Marks: "",
      AllIndiaRank: "",
      StateRank: "",
    },
  });
  const handleChange = (e, key) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      NEET_Details: {
        ...formData.NEET_Details,
        [key]: value,
      },
    });
    // Pass the updated form data to the parent component
    onFormDataChange({
      ...formData,
      NEET_Details: {
        ...formData.NEET_Details,
        [key]: value,
      },
    });
  };
  return (
    <>
      <HeadTitle title="NEET Details" />
      <div className="grid grid-cols-3 gap-[24px] py-[16px] ">
        {/* Iterate over the inputFields array and create input elements */}
        {Object.entries(formData.NEET_Details).map(([key, value]) => (
          <div key={key} className="col-span-1 profile_input_box">
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              placeholder={`Enter ${key}`}
              name={key}
              value={value}
              onChange={(e) => handleChange(e, key)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Neetdetails;
