"use client";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import together from "../../../../public/images/together.svg";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import Loader from "@/app/component/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setToken, removeToken, adDetails } from "@/redux/adminSlice/authSlice";
import poster from "../../../../public/images/poster.svg";

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
        "http://localhost:4000/api/auth/login",
        loginDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login Response:", res); // Log necessary information
      if (res.data.success) {
        toast.success("Login successful!");
        dispatch(setToken(res?.data?.token));
        dispatch(adDetails(res?.data?.user));

        router.push("/user/user-dashboard");
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
            <Image src={poster} className=" mx-auto"/>
          </div>
          <div className="lg:w-1/2 lg:h-screen flex mb-16 lg:mb-0 ">
            <div className="w-full">
              <div className="w-[70%] md:w-[52%] mx-auto ">
                <div className="my-10 lg:mt-0">
                  <div className="flex justify-center 2xl:mt-20 xl:mt-5 lg:mt-3">
                    <Image
                      src={logo}
                      alt="logo"
                      className=" 2xl:w-[188px] 2xl:h-[64px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]"
                    />
                  </div>
                </div>

                <form
                  className="w-full 2xl:mt-36 xl:mt-20 lg:mt-16"
                  onSubmit={handleSubmit}
                >
                  <div className="flex gap-1  2xl:gap-2 text-center xl:my-8 2xl:my-12">
                    <div className="text-center">
                      <h1 className=" w-full montserrat-otp font-[600] 2xl:text-[40px] xl:text-[25px] lg:text-[18px] text-[22px] leading-[48.76px] text-center">
                        Login
                      </h1>
                    </div>

                    <Image
                      src={together}
                      alt="together-icon "
                      className="2xl:w-[35px] 2xl:h-[35px] xl:w-[25px] xl:h-[25px] lg:w-[20px] lg:h-[20px] lg:mt-[10px] xl:mt-2 2xl:mt-1"
                    />
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
                      className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
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
                        className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full  2xl:h-[52px] xl:h-[40px] lg:h-[25px] my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px]  text-[10px] py-3 px-4"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex justify-end 2xl:my-1">
                      <Link href="/user/user-login">
                        <p className="montserrat-lable  text-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[12px]">
                          Forget Password?
                        </p>
                      </Link>{" "}
                    </div>
                    <button
                      type="submit"
                      disabled={isLoader}
                      className="bg-[#0071BC] montserrat-btn  text-white p-3 w-full rounded-full 2xl:h-[70px] xl:h-[45px] lg:h-[35px]  2xl:my-10 lg:my-5  xl:my-8 2xl:text-[16px] xl:text-[14px] sm:text-[12px] text-[12px] my-3"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 hidden lg:block" id="register-bg"></div>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
