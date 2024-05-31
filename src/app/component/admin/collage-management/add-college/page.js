"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../../../loader";
import config from "@/config";

const CreateCollege = ({ closeDrawer, refreshData }) => {
  const [isLoader, setLoader] = useState(false);
  const { token } = useSelector((state) => state?.auth);
  const [collegeDetail, setCollegeDetail] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    website: "",
    admissionCriteria: {
      cutOffPercentage: "",
      entranceExamScore: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);

      const response = await axios.post(
        `${config.baseURL}/api/collage/createCollege`,
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
      admissionCriteria: {
        ...prevDetails.admissionCriteria,
        [name]: value,
      },
      // If the name is not part of admissionCriteria, it will directly update the state
      ...(prevDetails.admissionCriteria.hasOwnProperty(name)
        ? {}
        : { [name]: value }),
    }));
  };
  const InputHandler = (e) => {
    setError("");
    setCollegeDetail({ ...collegeDetail, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      {isLoader && <Loader />}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
            href="/admin/admin-dashboard"
            className="btn btn-ghost text-xl 2xl:text-[22px]"
          >
            Home
          </a>
        </div>
        <div className="navbar-end">
          <a href="/component/admin/collage-management">
            <button className="flex items-center gap-1 border rounded-md py-1 px-3 2xl:text-[22px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              Back
            </button>
          </a>
        </div>
      </div>

      <div className="w-1/2 mx-auto">
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

          <div className="w-1/2">
            <label className="custom_input_label">Cut Off Percentage</label>
            <input
              onChange={inputHandler}
              type="text"
              name="cutOffPercentage"
              className="custom_inputt"
              required
              value={collegeDetail.admissionCriteria.cutOffPercentage}
            />
          </div>

          <div className="w-1/2">
            <label className="custom_input_label">Entrance Exam Score</label>
            <input
              onChange={inputHandler}
              type="text"
              name="entranceExamScore"
              className="custom_inputt"
              required
              value={collegeDetail.admissionCriteria.entranceExamScore}
            />
          </div>

          <div className="w-full flex justify-center">
            <button type="submit" className="custom_btn">
              Add College
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCollege;
