"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import config from "@/config";

const UpdateCounsellor = ({ params }) => {
  const router = useRouter();
  const [counsellorDetail, setCounsellorDetail] = useState();
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
        `${config.baseURL}/api/counselor/updateCounselor/${params.slug}`,
        counsellorDetail,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Update successfully!");
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };

  useEffect(() => {
    openModall();
  }, []);

  const openModall = async () => {
    // setLoader(true);
    try {
      const options = {
        method: "GET",
        url: `https://counselling-backend.vercel.app/api/counselor/getCounselorById/${params.slug}`,
      };
      const response = await axios.request(options);
      if (response.status === 200) {
        setCounsellorDetail(response?.data?.counselor);
        // setLoader(false);
      } else {
        console.error("Error: Unexpected response status");
        // setLoader(false);
      }
    } catch (error) {
      console.error(error);
      // setLoader(false);
    }
  };
  return (
    <>
      <ToastContainer autoClose={1000} />

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
          <a href="/component/admin/counsellor">
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
          <h2 className="custom_heading_text font-semibold">
            Update Counselor
          </h2>
        </div>
        <form
          onSubmit={handleUpdateCounselor}
          className="flex flex-wrap bg-white border rounded-lg 2xl:p-2 xl:p-2 lg:p-1 md:p-2 p-1 mx-auto"
        >
          {/* ------1.Counselor Name----- */}
          <div className="w-1/2">
            <label className="custom_input_label">Counselor Name</label>
            <input
              defaultValue={counsellorDetail?.firstname}
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
              defaultValue={counsellorDetail?.lastname}
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
              defaultValue={counsellorDetail?.mobile}
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
              defaultValue={counsellorDetail?.email}
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
    </>
  );
};

export default UpdateCounsellor;
