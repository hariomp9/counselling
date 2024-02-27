"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import axios from "axios"; // Import Axios library
import Loader from "../../loader";

const CreateCollege = ({ closeDrawer, refreshData }) => {
  const [isLoader, setLoader] = useState(false);
  const { token } = useSelector((state) => state?.auth);
  const [collegeDetail, setCollegeDetail] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    website: "",
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);

      const response = await axios.post(
        "http://localhost:4000/api/collage/createCollege",
        collegeDetail,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.status === 201) {
        refreshData();
        closeDrawer();
        toast.success("College Added Successfully!");
        refreshData();
      } else {
        toast.error("Failed to add college. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the college.");
    } finally {
      setLoader(false);
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCollegeDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
     {isLoader && <Loader/> }

      <div className="flex justify-center items-center border border-[#f3f3f3] rounded-lg bg-white 2xl:px-5  2xl:h-[50px] 2xl:my-5 xl:px-4  xl:h-[40px] xl:my-4 lg:px-3  lg:h-[35px] lg:my-2 md:px-2  md:h-[30px] md:my-2 sm:px-1 sm:h-[25px] sm:my-2 px-1 h-[25px] my-2">
        <h2 className="custom_heading_text font-semibold">Add New College</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap bg-white border rounded-lg 2xl:p-2 xl:p-2 lg:p-1 md:p-2 p-1 mx-auto"
      >
        {/* ------1.College Name----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Name</label>
          <input
            onChange={inputHandler}
            value={collegeDetail.name}
            maxLength={100}
            required
            type="text"
            name="name"
            className="custom_inputt"
          />
        </div>

        {/* ------2. College location----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Location</label>
          <input
            onChange={inputHandler}
            type="text"
            name="location"
            className="custom_inputt"
            required
            maxLength={200}
            value={collegeDetail.location}
          />
        </div>

        {/* ------3. College website----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Website</label>
          <input
            onChange={inputHandler}
            type="text"
            name="website"
            className="custom_inputt"
            required
            maxLength={64}
            value={collegeDetail.website}
          />
        </div>

        {/* ------4. College phone----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Phone.no</label>
          <input
            onChange={inputHandler}
            type="text"
            name="phone"
            className="custom_inputt"
            required
            pattern="[0-9]*"
            title="Please enter only numbers"
            value={collegeDetail.phone}
          />
        </div>

        {/* ------5. College email----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Email</label>
          <input
            onChange={inputHandler}
            type="email"
            name="email"
            className="custom_inputt"
            required
            value={collegeDetail.email}
          />
        </div>

        <div className="w-full">
          <button type="submit" className="custom_btn">
            Add College
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateCollege;
