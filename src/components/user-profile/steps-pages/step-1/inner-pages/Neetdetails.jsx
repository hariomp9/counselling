import React, { useState, useEffect } from "react";
import HeadTitle from "../HeadTitle";

const Neetdetails = ({ onFormDataChange, studentDetail }) => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (studentDetail) {
      setFormData((prevFormData) => ({
        NEET_Details: {
          ...prevFormData.NEET_Details,
          FullName:
            studentDetail.FullName || prevFormData?.NEET_Details?.FullName,
          MobileNumber:
            studentDetail.MobileNumber ||
            prevFormData?.NEET_Details?.MobileNumber,
          WhatsappNumber:
            studentDetail.WhatsappNumber ||
            prevFormData?.NEET_Details?.WhatsappNumber,
          NEET_RegisterNumber:
            studentDetail.NEET_RegisterNumber ||
            prevFormData?.NEET_Details?.NEET_RegisterNumber,
          RollNo: studentDetail.RollNo || prevFormData?.NEET_Details?.RollNo,
          Marks: studentDetail.Marks || prevFormData?.NEET_Details?.Marks,
          AllIndiaRank:
            studentDetail.AllIndiaRank ||
            prevFormData?.NEET_Details?.AllIndiaRank,
          StateRank:
            studentDetail.StateRank || prevFormData?.NEET_Details?.StateRank,
        },
      }));
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
              value={formData?.NEET_Details?.FullName}
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
              value={formData?.NEET_Details?.MobileNumber}
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
              value={formData?.NEET_Details?.WhatsappNumber}
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
              value={formData?.NEET_Details?.NEET_RegisterNumber}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> Roll No</label>
            <input
              type="text"
              placeholder="Enter Roll No"
              name="RollNo"
              onChange={handleChange}
              value={formData?.NEET_Details?.RollNo}
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
              value={formData?.NEET_Details?.Marks}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> All India Rank</label>
            <input
              type="text"
              placeholder="Enter All India Rank"
              name="AllIndiaRank"
              onChange={handleChange}
              value={formData?.NEET_Details?.AllIndiaRank}
            />
          </div>
          <div className="col-span-1 profile_input_box">
            <label> State Rank</label>
            <input
              type="text"
              placeholder="Enter State Rank"
              name="StateRank"
              onChange={handleChange}
              value={formData?.NEET_Details?.StateRank}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Neetdetails;
