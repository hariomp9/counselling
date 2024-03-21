"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setToken, removeToken, adDetails } from "@/redux/adminSlice/authSlice";
import Link from "next/link";
import RightSection from "../../app/auth/right-section/page";
import Loader from "@/app/component/loader";
import google from "../../../public/images/google.svg";
import logo from "../../../public/images/logo.svg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <ToastContainer autoClose={1500} />
      <div className="flex items-center justify-center lg:min-h-screen  ">
        <div className=" w-full mx-auto">
          <div className="relative flex flex-col lg:flex-row 2xl:gap-x-20 xl:gap-x-10 gap-x-7 min-h-screen justify-center lg:shadow-none  items-center space-y-8 md:space-y-0 w-[100%]  bg-white   ">
            <RightSection />
            <div className="w-[100%] lg:w-[60%] xl:w-[50%]">
              <div className=" ">
                <div className=" w-[52%] mx-auto ">
                  <div className=" lg:mt-0">
                    <div className="flex justify-center mt-3 xl:mt-0">
                      <Image
                        src={logo}
                        alt="logo"
                        className=" 2xl:w-[188px] 2xl:h-[64px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]  mb-5 2xl:mb-0"
                      />
                    </div>
                    <div className="flex justify-center lg:gap-1 xl:gap-2 2xl:gap-5 text-center 2xl:mt-16 gap-2">
                      <div className="text-center">
                        <h1 className=" w-full poppins font-[600] 2xl:text-[30px] xl:text-[20px]  lg:text-[16px] text-[20px] 2xl:leading-[36.57px] text-center">
                          Get Started
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center sm:gap-2 2xl:my-2  mb-1">
                      <p className="poppins font-[400] text-[#323232] xl:leading-[19.5px] 2xl:text-[16px] xl:text-[12px] text-[10px]">
                        Already have an account?
                      </p>
                      <a href="/admin-login">
                        <p className="poppins font-[500] text-[#EB2027] xl:leading-[19.5px] underline 2xl:text-[16px] xl:text-[12px] text-[10px]">
                          Log in
                        </p>
                      </a>
                    </div>
                  </div>

                  <div className=""></div>
                </div>
              </div>
              <form
              // onSubmit={handleSubmit}
              >
                <div className="mx-auto my-2 xl:my-3 2xl:my-5">
                  <div className=" w-[70%] md:w-[65%] lg:w-[70%] mx-auto ">
                    <div className="2xl:my-5 xl:my-3 my-2">
                      <label
                        htmlFor="firstname"
                        className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                      >
                        Name
                      </label>
                      <div className="flex 2xl:gap-7 xl:gap-4 lg:gap-3 xl:my-1 2xl:my-2 sm:gap-4 gap-3">
                        <input
                          // value={studentDetails.firstname}
                          // onChange={inputHandler}
                          maxLength={100}
                          required
                          type="text"
                          id="firstname"
                          name="firstname"
                          className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px] h-[30px] my-1 xl:my-0 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                          placeholder="Admin Name"
                        />
                        <input
                          // value={studentDetails.lastname}
                          // onChange={inputHandler}
                          maxLength={100}
                          required
                          type="text"
                          id="lastname"
                          name="lastname"
                          className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px] h-[30px]   my-1 xl:my-0 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                          placeholder="Admin Surname"
                        />
                      </div>
                    </div>
                    <div className="2xl:my-5 xl:my-3 my-2">
                      <label
                        htmlFor="email"
                        className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                      >
                        Email
                      </label>
                      <input
                        // value={studentDetails.email}
                        // onChange={inputHandler}
                        maxLength={100}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                        type="text"
                        id="email"
                        name="email"
                        className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px] h-[30px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                        placeholder="Enter"
                      />
                    </div>
                    <div className="2xl:my-5 xl:my-3 my-2">
                      <label
                        htmlFor="password"
                        className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                      >
                        Create Password
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          className=" absolute  transform -translate-y-1/2 cursor-pointer 
                        2xl:right-7 2xl:top-[45px] xl:right-5 xl:top-[28px] lg:right-5 lg:top-[20px]"
                          onClick={handleToggle}
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="2xl:w-[25px] 2xl:h-[25px] xl:w-[18px] xl:h-[18px] lg:w-[15px] lg:h-[15px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="2xl:w-[25px] 2xl:h-[25px] xl:w-[18px] xl:h-[18px] lg:w-[15px] lg:h-[15px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          )}
                        </button>
                        <input
                          // value={studentDetails.password}
                          // onChange={inputHandler}
                          type={showPassword ? "text" : "password"}
                          maxLength={100}
                          required
                          id="password"
                          name="password"
                          className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px] h-[30px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between w-full items-center my-3 xl:my-4 2xl:my-6">
                      <hr className="w-[45%] border-2" />
                      <p className="poppins text-[#BCBCBC] font-[400] 2xl:text-[18px] xl:text-[16px] lg:text-[12px] ">
                        or
                      </p>
                      <hr className="w-[45%] border-2" />
                    </div>
                    <div className="flex gap-3 lg:mb-4 xl:mb-3 2xl:mb-10">
                      <div className="w-full flex justify-center border-[1.49px] border-[#E1E1E1] rounded-full p-1 xl:p-2 2xl:p-3">
                        <a
                          target="_blank"
                          href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.co.in%2F%3Fpli%3D1&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1375757007%3A1709800522255495&theme=glif"
                        >
                          <div className="flex gap-2 items-center">
                            <Image
                              src={google}
                              alt="google-icon "
                              className="2xl:w-7 2xl:h-7 xl:w-5 xl:h-5 lg:w-5 lg:h-5 w-5 h-5"
                            />
                            <p className="quicksand font-[600] 2xl:text-[16px] xl:text-[14px] text-[10px]">
                              Sign Up with Google
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#0071BC] montserrat-btn  text-white p-2 xl:p-3 w-full rounded-full 2xl:h-[70px] xl:h-[45px] lg:h-[35px]  lg:my-0  2xl:text-[16px] xl:text-[14px] sm:text-[12px] text-[12px] my-5 "
                    >
                      Register
                    </button>
                  </div>

                  <div className="lg:my-5 flex justify-center 2xl:text-[16px] xl:text-[14px] text-[10px]">
                    <p>
                      By clicking Next, you agree to our{" "}
                      <span className="text-[#0071BC]">
                        Terms and Conditions
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
