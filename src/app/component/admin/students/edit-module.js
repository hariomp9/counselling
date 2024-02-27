import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = ({ editData, closeDrawer, refreshData }) => {
  const studentID = editData._id;
  const [studentDetail, setStudentDetail] = useState(editData);
  const { token } = useSelector((state) => state?.auth);

  const inputHandler = (e) => {
    setStudentDetail({ ...studentDetail, [e.target.name]: e.target.value });
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/auth/edit-user/${studentID}`,
        studentDetail,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        refreshData();
        toast.success("Update successfully!");
        closeDrawer();
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center border border-[#f3f3f3] rounded-lg bg-white 2xl:px-5  2xl:h-[50px] 2xl:my-5 xl:px-4  xl:h-[40px] xl:my-4 lg:px-3  lg:h-[35px] lg:my-2 md:px-2  md:h-[30px] md:my-2 sm:px-1 sm:h-[25px] sm:my-2 px-1 h-[25px] my-2">
        <h2 className="custom_heading_text font-semibold">Update Student</h2>
      </div>
      <form
        onSubmit={handleUpdateStudent}
        className="flex flex-wrap bg-white border rounded-lg 2xl:p-2 xl:p-2 lg:p-1 md:p-2 p-1 mx-auto"
      >
        {/* ------1.College First Name----- */}
        <div className="w-1/2">
          <label className="custom_input_label">First Name</label>
          <input
            defaultValue={
              editData?.firstname
                ? editData?.firstname
                : studentDetail?.firstname
            }
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
            defaultValue={
              editData?.lastname ? editData?.lastname : studentDetail?.lastname
            }
            maxLength={100}
            required
            type="text"
            name="lastname"
            className="custom_inputt"
            onChange={inputHandler}
          />
        </div>

        {/* ------2. College location----- */}
        <div className="w-1/2">
          <label className="custom_input_label">NEET Score</label>
          <input
            defaultValue={
              editData?.neetScore
                ? editData?.neetScore
                : studentDetail?.neetScore
            }
            type="text"
            name="neetScore"
            className="custom_inputt"
            required
            maxLength={200}
            onChange={inputHandler}
          />
        </div>

        {/* ------3. College website----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Cast</label>
          <input
            defaultValue={editData?.cast ? editData?.cast : studentDetail?.cast}
            type="text"
            name="cast"
            className="custom_inputt"
            required
            maxLength={64}
            onChange={inputHandler}
          />
        </div>

        {/* ------4. College phone----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Student Email </label>
          <input
            defaultValue={
              editData?.email ? editData?.email : studentDetail?.email
            }
            type="text"
            name="email"
            className="custom_inputt"
            required
            title="Please enter only numbers"
            onChange={inputHandler}
          />
        </div>

        {/* ------5. College email----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Student Phone.no</label>
          <input
            defaultValue={
              editData?.mobile ? editData?.mobile : studentDetail?.mobile
            }
            type="text"
            name="mobile"
            pattern="[0-9]*"
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

export default UpdateStudent;
