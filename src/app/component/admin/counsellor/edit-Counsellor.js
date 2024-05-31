import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "@/config";

const UpdateCounsellor = ({ editData, closeDrawerO, refreshData }) => {
  const counsellorID = editData._id;
  const [counsellorDetail, setCounsellorDetail] = useState(editData);
  const { token } = useSelector((state) => state?.auth);

  const inputHandler = (e) => {
    setCounsellorDetail({
      ...counsellorDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateCounselor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${config.baseURL}/api/counselor/updateCounselor/${counsellorID}`,
        counsellorDetail,
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
        closeDrawerO();
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
        <h2 className="custom_heading_text font-semibold">Update Counselor</h2>
      </div>
      <form
        onSubmit={handleUpdateCounselor}
        className="flex flex-wrap bg-white border rounded-lg 2xl:p-2 xl:p-2 lg:p-1 md:p-2 p-1 mx-auto"
      >
        {/* ------1.Counselor Name----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Counselor Name</label>
          <input
            defaultValue={
              editData?.firstname
                ? editData?.firstname
                : counsellorDetail?.firstname
            }
            maxLength={100}
            required
            type="text"
            name="firstname"
            className="custom_inputt"
            onChange={inputHandler}
          />
        </div>

        {/* ------2. Counselor location----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Counselor Location</label>
          <input
            defaultValue={
              editData?.lastname
                ? editData?.lastname
                : counsellorDetail?.lastname
            }
            type="text"
            name="lastname"
            className="custom_inputt"
            required
            maxLength={200}
            onChange={inputHandler}
          />
        </div>

        {/* ------3. Counselor website----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Counselor Website</label>
          <input
            defaultValue={
              editData?.mobile ? editData?.mobile : counsellorDetail?.mobile
            }
            type="number"
            name="mobile"
            className="custom_inputt"
            required
            maxLength={10}
            pattern="[0-9]*"
            onChange={inputHandler}
          />
        </div>

        {/* ------4. Counselor phone----- */}
        <div className="w-1/2">
          <label className="custom_input_label">Counselor Email</label>
          <input
            defaultValue={
              editData?.email ? editData?.email : counsellorDetail?.email
            }
            type="text"
            name="email"
            className="custom_inputt"
            required
            title="Please enter only numbers"
            onChange={inputHandler}
          />
        </div>

        <div className="w-full">
          <button type="submit" className="custom_btn">
            Update Counsellor
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCounsellor;
