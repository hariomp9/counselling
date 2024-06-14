import React, { useState, useEffect } from "react";
import HeadTitle from "../HeadTitle";

const Neetdetails = ({ onFormDataChange, studentDetail }) => {
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

  useEffect(() => {
    if (studentDetail) {
      setFormData({
        NEET_Details: {
          FullName: studentDetail.FullName || "",
          MobileNumber: studentDetail.MobileNumber || "",
          WhatsappNumber: studentDetail.WhatsappNumber || "",
          NEET_RegisterNumber: studentDetail.NEET_RegisterNumber || "",
          RollNo: studentDetail.RollNo || "",
          Marks: studentDetail.Marks || "",
          AllIndiaRank: studentDetail.AllIndiaRank || "",
          StateRank: studentDetail.StateRank || "",
        },
      });
    }
  }, [studentDetail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      NEET_Details: {
        ...formData.NEET_Details,
        [name]: value,
      },
    });
    // Pass the updated form data to the parent component
    onFormDataChange({
      ...formData,
      NEET_Details: {
        ...formData.NEET_Details,
        [name]: value,
      },
    });
  };

  console.log("formData:", formData);
  console.log("studentDetail:", studentDetail);

  return (
    <>
      <HeadTitle title="NEET Details" />
      <div className=" ">
        <form className="grid grid-cols-3 gap-[24px] py-[16px]">
          <div className="col-span-1 profile_input_box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="FullName"
              onChange={handleChange}
              value={formData.NEET_Details.FullName}
              maxLength={64}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              name="MobileNumber"
              onChange={handleChange}
              maxLength={15}
              value={formData.NEET_Details.MobileNumber}
              onInput={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                e.target.value = value.slice(0, 15);
                handleChange(e);
              }}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> Whatsapp Number</label>
            <input
              placeholder="Enter Whatsapp Number"
              name="WhatsappNumber"
              maxLength={15}
              onChange={handleChange}
              value={formData.NEET_Details.WhatsappNumber}
              onInput={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                e.target.value = value.slice(0, 15);
                handleChange(e);
              }}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> NEET Register Number</label>
            <input
              type="text"
              placeholder="Enter NEET Register Number"
              name="NEET_RegisterNumber"
              onChange={handleChange}
              value={formData.NEET_Details.NEET_RegisterNumber}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> Roll No</label>
            <input
              type="text"
              placeholder="Enter Roll No"
              name="RollNo"
              onChange={handleChange}
              value={formData.NEET_Details.RollNo}
              // value={
              //   formData.NEET_Details.RollNo
              //     ? formData.NEET_Details.RollNo
              //     : studentDetail.RollNo
              // }
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> Marks</label>
            <input
              type="text"
              placeholder="Enter Marks"
              name="Marks"
              onChange={handleChange}
              value={formData.NEET_Details.Marks}
              // value={
              //   formData.NEET_Details.Marks
              //     ? formData.NEET_Details.Marks
              //     : studentDetail.Marks
              // }
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> All India Rank</label>
            <input
              type="text"
              placeholder="Enter All India Rank"
              name="AllIndiaRank"
              onChange={handleChange}
              value={formData.NEET_Details.AllIndiaRank}
              // value={
              //   formData.NEET_Details.AllIndiaRank
              //     ? formData.NEET_Details.AllIndiaRank
              //     : studentDetail.AllIndiaRank
              // }
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> State Rank</label>
            <input
              type="text"
              placeholder="Enter State Rank"
              name="StateRank"
              onChange={handleChange}
              value={formData.NEET_Details.StateRank}
              // value={
              //   formData.NEET_Details.StateRank
              //     ? formData.NEET_Details.StateRank
              //     : studentDetail.StateRank
              // }
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Neetdetails;
