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
import { setToken, removeToken, adDetails } from "@/redux/adminSlice/authSlice";
import poster from "../../../../public/images/poster.webp";
import student from "../assets/login-student.png"

const UserLogin = () => {
  const dispatch = useDispatch();
  const [isLoader, setLoader] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const InputHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axios.post(
        "https://counselling-backend.vercel.app/api/auth/login",
        loginDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login Response:", res);
      if (res.data.success) {
        toast.success("Login successful!");
        dispatch(setToken(res?.data?.token));
        dispatch(adDetails(res?.data?.user));

        // router.push("/user/user-dashboard");
        router.push("/user2nd/neetUG-home");
      } else {
        toast.error("Login failed, please try again later!");
        dispatch(removeToken());
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Server error!");
        // dispatch(removeToken());
      }
    } finally {
      setLoader(false);
    }
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
                  <div className="flex justify-center 2xl:mt-20 xl:mt-5 lg:mt-3">
                    <Image
                      src={logo}
                      alt="logo"
                      className=" 2xl:w-[218px] 2xl:h-[73px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]"
                    />
                  </div>
                </div>
                <form
                  className="w-full 2xl:mt-36 xl:mt-20 lg:mt-16"
                  onSubmit={handleSubmit}
                >
                  <div className="flex gap-1  2xl:gap-2 text-center xl:my-8 2xl:my-12">
                    <div className="text-center mx-auto">
                      <h1 className=" w-full inter font-[600] 2xl:text-[30px] xl:text-[25px] lg:text-[18px] text-[22px] 2xl:leading-[36.31px] xl:leading-[30.31px] text-center">
                        Welcome back
                      </h1>
                      <p className=" w-full inter text-[#3F3F3F] font-[400] 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[22px] 2xl:leading-[24.2px] text-center">
                        Log in to your account
                      </p>
                    </div>
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Email
                    </label>
                    <input
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      required
                      onChange={InputHandler}
                      type="email"
                      id="email"
                      name="email"
                      className=" montserrat-otp text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Password
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        className=" absolute  transform -translate-y-1/2 cursor-pointer 
                        2xl:right-7 2xl:top-[35px] xl:right-5 xl:top-[28px] lg:right-5 lg:top-[20px]"
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
                        type={showPassword ? "text" : "password"}
                        onChange={InputHandler}
                        minLength={8}
                        required
                        autoComplete="current-password"
                        maxLength={100}
                        id="password"
                        name="password"
                        checked={showPassword}
                        className=" montserrat-otp  text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full  2xl:h-[52px] xl:h-[40px] lg:h-[25px] my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px]  text-[10px] py-3 px-4"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex justify-between 2xl:my-1">
                      <div className="">
                        <label className="cursor-pointer label p-0 flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox rounded-[2.57px] bg-transparent 2xl:w-[22px] 2xl:h-[22px] w-[16px] h-[16px]"
                          />
                          <span className="w-full inter text-[#3F3F3F] font-[400] 2xl:text-[16px] xl:text-[12px] text-[12px]  2xl:leading-[19.36px] xl:leading-[16.36px] text-center 2xl:mx-2 xl:mx-1">
                            Remember me
                          </span>
                        </label>
                      </div>
                      <a href="/user/user-login">
                        <p className="montserrat-lable  text-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[12px]">
                          Forget Password?
                        </p>
                      </a>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoader}
                      className="bg-[#0071BC] inter font-[700] text-white p-3 w-full rounded-[5px] 2xl:h-[70px] xl:h-[45px] lg:h-[35px]  2xl:my-10 lg:my-5  xl:my-8 2xl:text-[16px] xl:text-[14px] sm:text-[12px] text-[12px] my-3"
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <p className="inter text-[#3F3F3F] font-[400] 2xl:text-[20px] xl:text-[16px] text-[14px] text-center">
                      Don’t have an account?
                      <a href="/user/user-registration">
                        <span className="inter font-[700] text-[#0071BC] ">
                          {" "}
                          Register Now
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
                  Log in to your <spam className="font-[700]">Admission Network 24</spam>  Account
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

export default UserLogin;
