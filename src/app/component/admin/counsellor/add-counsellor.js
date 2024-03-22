"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../../loader";

const AddCounsellor = () => {
  const [isLoader, setLoader] = useState(false);
  const { token } = useSelector((state) => state?.auth);
  const [isError, setError] = useState("");
  const [counselloDetail, setCounsellorDetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);

      const response = await axios.post(
        "https://counselling-backend.vercel.app/api/counselor/addCounselor",
        counselloDetail,
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
        toast.success("counsellor Added Successfully!");
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
    setError("");
    setCounsellorDetail({
      ...counselloDetail,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="flex justify-center items-center border border-[#f3f3f3] rounded-lg bg-white 2xl:px-5  2xl:h-[50px] 2xl:my-5 xl:px-4  xl:h-[40px] xl:my-4 lg:px-3  lg:h-[35px] lg:my-2 md:px-2  md:h-[30px] md:my-2 sm:px-1 sm:h-[25px] sm:my-2 px-1 h-[25px] my-2">
        <h2 className="custom_heading_text font-semibold">
          Add New Counsellor
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap bg-white border rounded-lg 2xl:p-2 xl:p-2 lg:p-1 md:p-2 p-1 mx-auto"
      >
        {/* ------1.counsellor Name----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Counsellor lastname</label>
          <input
            onChange={inputHandler}
            value={counselloDetail.firstname}
            maxLength={100}
            required
            type="text"
            name="firstname"
            className="custom_inputt"
          />
        </div>
        <div className="w-1/2">
          <label className="custom_input_label">Counsellor lastname</label>
          <input
            onChange={inputHandler}
            value={counselloDetail.lastname}
            maxLength={100}
            required
            type="text"
            name="lastname"
            className="custom_inputt"
          />
        </div>

        {/* ------4. counsellor phone----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Counsellor Phone.no</label>
          <input
            onChange={inputHandler}
            value={counselloDetail.mobile}
            type="text"
            name="mobile"
            className="custom_inputt"
            required
            pattern="[0-9]*"
            title="Please enter only numbers"
          />
        </div>

        {/* ------5. counsellor email----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Counsellor Email</label>
          <input
            onChange={inputHandler}
            value={counselloDetail.email}
            type="email"
            name="email"
            className="custom_inputt"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="custom_input_label">Counsellor Email</label>
          <input
            onChange={inputHandler}
            value={counselloDetail.password}
            type="password"
            name="password"
            className="custom_inputt"
            required
          />
        </div>

        <div className="w-full">
          <button type="submit" className="custom_btn">
            Add Counsellor
          </button>
        </div>
      </form>
    </>
  );
};

export default AddCounsellor;
