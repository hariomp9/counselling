"use client";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import Loader from "@/app/component/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  setUserId,
  setToken,
  removeToken,
  adDetails,
  userCourse,
} from "@/redux/adminSlice/authSlice";
import poster from "../../../../public/images/poster.webp";
import student from "../assets/login-student.png";

const GetStart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoader, setLoader] = useState(false);
  const handleSubmit = async (examType) => {
    await dispatch(userCourse(examType));
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      {isLoader && <Loader />}
      <section>
        <div className="  lg:flex  lg:flex-row ">
          <div className="lg:hidden">
            <Image src={poster} alt="banner-img" className=" mx-auto" />
          </div>
          <div className="lg:w-1/2 lg:h-screen flex mb-16 lg:mb-0 ">
            <div className="w-full">
              <div className="w-[70%] md:w-[52%] mx-auto ">
                <div className="my-10 lg:mt-0">
                  <div className="flex justify-center 2xl:mt-20 xl:mt-5 lg:mt-10">
                    <Image
                      src={logo}
                      alt="logo"
                      className=" 2xl:w-[218px] 2xl:h-[73px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]"
                    />
                  </div>
                </div>
                <form
                  className="w-full 2xl:mt-36 xl:mt-20 lg:mt-16"
                  //   onSubmit={handleSubmit}
                >
                  <div className="flex gap-1  2xl:gap-2 text-center xl:my-10 2xl:my-12 pt-[10px]">
                    <div className="text-center mx-auto">
                      <h1 className=" w-full inter font-[600] 2xl:text-[30px] xl:text-[25px] lg:text-[18px] text-[22px] 2xl:leading-[36.31px] xl:leading-[30.31px] text-center">
                        Get Started Absolutely Free
                      </h1>
                      <p className=" w-full inter text-[#3F3F3F] font-[400] 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[22px] 2xl:leading-[24.2px] text-center">
                        Create an account
                      </p>
                    </div>
                  </div>

                  <div className="2xl:pt-[50px] pt-[20px]">
                    <p className="inter text-[#3F3F3F] font-[400] 2xl:text-[30px] leading-[36px] xl:text-[16px] text-[14px] text-center">
                      Select your counselling
                    </p>
                  </div>
                  <div className="2xl:my-[30px] my-[15px] flex justify-center 2xl:gap-[25px] gap-[15px]">
                    <div className="">
                      <Link href="/user/user-registration">
                        <button
                          onClick={() => handleSubmit("NEET UG 2024")}
                          className="inter font-[700] rounded-[5px] 2xl:text-[18px] 2xl:leading-[21.78px] xl:text-[12px] text-[10px] 2xl:w-[261px] 2xl:h-[72px] xl:w-[140px] xl:h-[40px] w-[100px] h-[30px] border-[2px] border-[#0071BC] text-[#0071BC] hover:text-white hover:bg-[#0071BC]"
                        >
                          NEET UG 2024
                        </button>
                      </Link>
                    </div>
                    <div className="">
                      <Link href="/user/user-registration">
                        <button
                          onClick={() => handleSubmit("NEET PG 2024")}
                          className="inter font-[700] rounded-[5px] 2xl:text-[18px] 2xl:leading-[21.78px] xl:text-[12px] text-[10px] 2xl:w-[261px] 2xl:h-[72px] xl:w-[140px] xl:h-[40px] w-[100px] h-[30px] border-[2px] border-[#0071BC] text-[#0071BC] hover:text-white hover:bg-[#0071BC]"
                        >
                          NEET PG 2024
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="inter text-[#3F3F3F] font-[400] 2xl:text-[20px] xl:text-[16px] text-[14px] text-center">
                      Already have a AN24 account?
                      <a href="/user/user-login">
                        <span className="inter font-[700] text-[#0071BC] ">
                          {" "}
                          Sign in
                        </span>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 hidden lg:block bg-[#0071BC] 2xl:pt-[120px] pt-[82px]">
            <div className=" ">
              <div className="2xl:w-[600px] xl:w-[400px] w-[300px] mx-auto">
                <h1
                  className="inter font-[300] text-white 
                 2xl:text-[40px] xl:text-[30px] lg:text-[20px] sm:text-[] text-[]
   2xl:leading-[52px] xl:leading-[35px] lg:leading-[28px] sm:leading-[] leading-[]"
                >
                  Log in to your{" "}
                  <spam className="font-[700]">Admission Network 24</spam>{" "}
                  Account
                </h1>
              </div>
            </div>
            <div
              className="flex items-center gap-[10px] xl:gap-[15px] 2xl:gap-[25px] mx-auto  
              2xl:mt-[75px] xl:mt-[40px] lg:mt-[58px] sm:mt-[] mt-[]"
            >
              <Image
                src={student}
                className="2xl:w-[664.78px] 2xl:h-[697.4px] h-auto xl:w-[450px] lg:w-[300px] sm:w-[] w-[] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStart;
