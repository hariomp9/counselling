"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyOTP = (props) => {
  const userID = props.userID; // Accessing userID prop
  console.log(userID, "ida");
  const [verifyOTP, setVerifyOTP] = useState("");
  const router = useRouter();

  const inputHandler = (e) => {
    const { value } = e.target;
    setVerifyOTP(value);
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/verify-otp",
        {
          userId: userID,
          otp: verifyOTP,
        }
      );
      toast.success("Verification Successful!");
      router.push("/user/user-login");
      console.log("Verification Response:", response.data);
    } catch (error) {
      console.error("Error occurred while sending OTP:", error);
      toast.error("Error occurred while sending OTP");
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="h-screen  py-20 px-3">
        <div className="container mx-auto">
          <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
              <div className="bg-white h-64 py-3 rounded text-center border shadow-md">
                <h1 className="text-2xl font-bold">OTP Verification</h1>
                <div className="flex flex-col mt-4">
                  <span>Enter the OTP you received at your mail</span>
                  <span className="font-bold">h******9@gmail.com</span>
                </div>
                <div
                  id="otp"
                  className="flex flex-row justify-center text-center px-2 mt-5"
                >
                  <input
                    value={verifyOTP}
                    onChange={inputHandler}
                    placeholder="Enter OTP"
                    className="m-2 border h-10 w-full text-center form-control rounded"
                    type="text"
                    id="first"
                    maxLength={6}
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleVerify}
                  className="custom_btn"
                >
                  Submit
                </button>
                <div className="flex justify-center text-center mt-5">
                  <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                    <span className="font-bold">Resend OTP</span>
                    <i className="bx bx-caret-right ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
