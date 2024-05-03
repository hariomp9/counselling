import React, { useState } from "react";
import HeadTitle from "../HeadTitle";

const Neetdetails = ({ onFormDataChange, studentDetail }) => {
  // State to hold the form data

  console.log(studentDetail);
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
  const handleChange = (e) => {
    // const { name } = e.target.value;
    setFormData({
      ...formData,
      NEET_Details: {
        ...formData.NEET_Details,
        [e.target.value]: e.target.value,
      },
    });
    // Pass the updated form data to the parent component
    onFormDataChange({
      ...formData,
      NEET_Details: {
        ...formData.NEET_Details,
        [e.target.value]: e.target.value,
      },
    });
  };
  return (
    <>
      <HeadTitle title="NEET Details" />
      <div className=" ">
        {/* Iterate over the inputFields array and create input elements */}

        <form className="grid grid-cols-3 gap-[24px] py-[16px]">
          <div className="col-span-1 profile_input_box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="FullName"
              onChange={handleChange}
              defaultValue={studentDetail?.FullName}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="MobileNumber"
              onChange={handleChange}
              defaultValue={studentDetail?.MobileNumber}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> Whatsapp Number</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="WhatsappNumber"
              onChange={handleChange}
              defaultValue={studentDetail?.WhatsappNumber}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> NEET_RegisterNumber</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="NEET_RegisterNumber"
              onChange={handleChange}
              defaultValue={studentDetail?.NEET_RegisterNumber}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> RollNo</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="RollNo"
              onChange={handleChange}
              defaultValue={studentDetail?.RollNo}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> Marks</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="Marks"
              onChange={handleChange}
              defaultValue={studentDetail?.Marks}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> AllIndiaRank</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="AllIndiaRank"
              onChange={handleChange}
              defaultValue={studentDetail?.AllIndiaRank}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> StateRank</label>
            <input
              type="text"
              placeholder="Enter FullName"
              name="StateRank"
              onChange={handleChange}
              defaultValue={studentDetail?.StateRank}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Neetdetails;

// import React, { useState } from "react";
// import HeadTitle from "../HeadTitle";

// const Neetdetails = ({ onFormDataChange }) => {
//   // State to hold the form data
//   const [formData, setFormData] = useState({
//     NEET_Details: {
//       FullName: "",
//       MobileNumber: "",
//       WhatsappNumber: "",
//       NEET_RegisterNumber: "",
//       RollNo: "",
//       Marks: "",
//       AllIndiaRank: "",
//       StateRank: "",
//     },
//   });
//   const handleChange = (e, key) => {
//     const { value } = e.target;
//     setFormData({
//       ...formData,
//       NEET_Details: {
//         ...formData.NEET_Details,
//         [key]: value,
//       },
//     });
//     // Pass the updated form data to the parent component
//     onFormDataChange({
//       ...formData,
//       NEET_Details: {
//         ...formData.NEET_Details,
//         [key]: value,
//       },
//     });
//   };
//   return (
//     <>
//       <HeadTitle title="NEET Details" />
//       <div className="grid grid-cols-3 gap-[24px] py-[16px] ">
//         {/* Iterate over the inputFields array and create input elements */}
//         {Object.entries(formData.NEET_Details).map(([key, value]) => (
//           <div key={key} className="col-span-1 profile_input_box">
//             <label htmlFor={key}>{key}</label>
//             <input
//               type="text"
//               placeholder={`Enter ${key}`}
//               name={key}
//               value={value}
//               onChange={(e) => handleChange(e, key)}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Neetdetails;
