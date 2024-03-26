"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state?.auth);
  const [studentDetail, setStudentDetail] = useState({});
  const inputHandler = (e) => {
    setStudentDetail({ ...studentDetail, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    openModal();
  }, []);

  const openModal = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://counselling-backend.vercel.app/api/auth/getUserById/${params.slug}`,
        headers: {
          Accept: "application/json",
          authorization: token,
        },
      };
      const response = await axios.request(options);
      if (response.status === 200) {
        setStudentDetail(response?.data?.user);
      } else {
        console.error("Error: Unexpected response status");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch student details.");
    }
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://counselling-backend.vercel.app/api/auth/edit-user/${params.slug}`,
        studentDetail,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Update successfully!");
        router.push("/component/admin/students");
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };

  return (
    <div>
      <ToastContainer autoClose={1000} />
      <div className="flex justify-center items-center border border-[#f3f3f3] rounded-lg bg-white 2xl:px-5  2xl:h-[50px] 2xl:my-5 xl:px-4  xl:h-[40px] xl:my-4 lg:px-3  lg:h-[35px] lg:my-2 md:px-2  md:h-[30px] md:my-2 sm:px-1 sm:h-[25px] sm:my-2 px-1 h-[25px] my-2">
        <h2 className="custom_heading_text font-semibold">
          Update Student Details
        </h2>
      </div>
      <form
        onSubmit={handleUpdateStudent}
        className="flex flex-wrap bg-white border rounded-lg 2xl:p-2 xl:p-2 lg:p-1 md:p-2 p-1 mx-auto"
      >
        {/* ------1.student First Name----- */}
        <div className="w-1/2">
          <label className="custom_input_label">First Name</label>
          <input
            defaultValue={studentDetail?.firstname}
            maxLength={100}
            required
            type="text"
            name="firstname"
            className="custom_inputt"
            onChange={inputHandler}
          />
        </div>
        <div className="w-1/2">
          <label className="custom_input_label">Last Name</label>
          <input
            defaultValue={studentDetail?.lastname}
            maxLength={100}
            required
            type="text"
            name="lastname"
            className="custom_inputt"
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student Fathers Name</label>
          <input
            defaultValue={studentDetail?.fathersName}
            type="text"
            name="fathersName"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">
            Student Fathers Occupation
          </label>
          <input
            defaultValue={studentDetail?.fathersOccupation}
            type="text"
            name="fathersOccupation"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>
        <div className="w-1/2">
          <label className="custom_input_label">Student Mothers Name</label>
          <input
            defaultValue={studentDetail?.mothersName}
            type="text"
            name="mothersName"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">
            Student Mothers Occupation
          </label>
          <input
            defaultValue={studentDetail?.mothersOccupation}
            type="text"
            name="mothersOccupation"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">NEET Score</label>
          <input
            defaultValue={studentDetail?.neetScore}
            type="text"
            name="neetScore"
            className="custom_inputt"
            required
            maxLength={200}
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Cast</label>
          <input
            defaultValue={studentDetail?.cast}
            type="text"
            name="cast"
            className="custom_inputt"
            required
            maxLength={64}
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student Email </label>
          <input
            defaultValue={studentDetail?.email}
            type="text"
            name="email"
            className="custom_inputt"
            required
            title="Please enter only numbers"
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student Phone.no</label>
          <input
            defaultValue={studentDetail?.mobile}
            type="text"
            name="mobile"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student Address</label>
          <input
            defaultValue={studentDetail?.address}
            type="text"
            name="address"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student City</label>
          <input
            defaultValue={studentDetail?.city}
            type="text"
            name="city"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student Phone.no</label>
          <input
            defaultValue={studentDetail?.state}
            type="text"
            name="mobile"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student 10th Percentage</label>
          <input
            defaultValue={studentDetail?.tenthPercentage}
            type="text"
            name="tenthPercentage"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student 12th Percentage</label>
          <input
            defaultValue={studentDetail?.twelfthPercentage}
            type="text"
            name="twelfthPercentage"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-1/2">
          <label className="custom_input_label">Student Career Goals</label>
          <input
            defaultValue={studentDetail?.careerGoals}
            type="text"
            name="careerGoals"
            className="custom_inputt"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="w-full">
          <button type="submit" className="custom_btn">
            Update Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
