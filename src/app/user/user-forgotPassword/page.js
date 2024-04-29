"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import posterF from "../../../../public/images/forgotPassword.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import forgotPoassword from "../assets/forgot-password-img.svg";

const VerifyOTP = () => {
  return (
    <>
      <section>
        <div className="lg:flex h-screen">
          <div className="lg:hidden">
            <Image src={posterF} className=" mx-auto w-[212px] sm:w-[512px] sm:h-[461.15px] mt-5 lg:mt-0" />
          </div>
          <div className="lg:w-1/2 lg:h-screen flex mb-16 lg:mb-0 ">
            <div className="w-full">
              <div className="2xl:w-[549px] xl:w-[400px] w-[300px] mx-auto ">
                <div className="my-10 lg:mt-0">
                  <div className="flex justify-center 2xl:mt-20 xl:mt-5 lg:mt-3">
                    <Image
                      src={logo}
                      alt="logo"
                      className=" 2xl:w-[218px] 2xl:h-[73px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]"
                    />
                  </div>
                  <div className=" items-center justify-center lg:mt-16 xl:mt-20 2xl:mt-40 my-7 lg:my-0">
                    <h1 className=" inter 2xl:w-[389px] mx-auto font-[600] 2xl:text-[30px] xl:text-[22px] lg:text-[18px] xl:w-[290px] w-[210px] 2xl:leading-[36.31px] sm:text-[20px] text-[18px] text-center">
                      Forgot your password?
                    </h1>
                    <p className="inter lg:w-auto lg:px-[26px] xl:px-6 2xl:px-4 text-[#3F3F3F] mx-auto text-center 2xl:w-[466px] 2xl:text-[20px] xl:text-[14px]  lg:text-[12px] sm:text-[14px] text-[12px] sm:w-[250px] w-[220px] 2xl:leading-[26px] my-1">
                      Enter your email so that we can send you password reset
                      link
                    </p>
                  </div>
                </div>
                <form className="lg:mt-5 2xl:mt-20 xl:mt-16">
                  <div className="xl:my-3 2xl:my-5">
                    <label
                      htmlFor="email"
                      className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Enter your email
                    </label>
                    <input
                      // value={studentDetails.firstname}
                      // onChange={inputHandler}
                      maxLength={10}
                      required
                      type="email"
                      id="number"
                      name="email"
                      className=" montserrat-otp  text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full 2xl:h-[56px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] sm:py-3 sm:px-4 py-2 px-4"
                      placeholder="Enter your email"
                    />
                  </div>

                  <button
                    // onClick={handleVerify}
                    type="submit"
                    className="bg-[#0071BC] montserrat-btn  text-white sm:p-3 py-2 w-full rounded-[6.41px] 2xl:h-[66px] xl:h-[45px] lg:h-[35px]  2xl:my-5 lg:my-2  xl:my-2 2xl:text-[18px] xl:text-[12px] sm:text-[10px] text-[10px] lg:text-[10px] my-2  "
                  >
                    Send Email
                  </button>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-[30px] h-[30px] text-[#000000]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>

                    <a href="/user/user-login">
                      <p className="2xl:text-[18px] xl:text-[12px] text-[10px] text-[#000000] font-semibold">
                        Back to Login
                      </p>
                    </a>
                  </div>
                  <div className="flex justify-center 2xl:mt-32 xl:mt-28 lg:mt-16 mt-12">
                    <p className="inter font-[400] 2xl:text-[20px] xl:text-[14px] leading-[24.2px] lg:text-[10px] sm:text-[12px] text-[12px]">
                      Don’t have an account?{" "}
                      <a href="/user/user-registration">
                        <span className="text-[#0071BC] font-[600]">Register Now</span>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 hidden lg:block  h-screen  bg-[#0071BC] 2xl:pt-[120px] pt-[82px]">
          <div
              className="flex items-center gap-[10px] xl:gap-[15px] 2xl:gap-[25px] mx-auto  
              2xl:mt-[65px] xl:mt-[30px] lg:mt-[48px] sm:mt-[] mt-[]"
            >
              <Image
                src={forgotPoassword}
                className="2xl:w-[664.78px] 2xl:h-[697.4px] h-auto xl:w-[450px] lg:w-[300px] sm:w-[] w-[] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyOTP;
