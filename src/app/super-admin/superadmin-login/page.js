"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setToken, removeToken, adDetails } from "@/redux/adminSlice/authSlice";
import Link from "next/link";
import Loader from "@/app/component/loader";
import RightSection from "@/app/auth/right-section/page";

const SuperAdminLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  // const state = useSelector((state) => state);
  const InputHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axios.post(
        "https://counselling-backend.vercel.app/api/auth/superAdminLogin",
        loginDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res?.data?.success) {
        toast.success("Login successfully!");
        dispatch(setToken(res?.data?.token));
        dispatch(adDetails(res?.data?.user));
        setLoader(false);
        router.push("/super-admin");
      } else {
        toast.error("Login failed please try later!");
        dispatch(removeToken());
        setLoader(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.error || "Server error !");
      dispatch(removeToken());
      setLoader(false);
    }
  };
  return (
    <>
      {isLoader && <Loader />}

      <ToastContainer autoClose={1500} />
      <div className="flex items-center justify-center lg:min-h-screen  ">
        <div className=" w-full mx-auto">
          <div className="relative flex flex-col lg:flex-row 2xl:gap-x-20 xl:gap-x-10 gap-x-7 min-h-screen justify-center lg:shadow-none  items-center space-y-8 md:space-y-0 w-[100%]  bg-white   ">
            <RightSection />
            <div className="w-[100%] lg:w-[60%] xl:w-[50%]">
              <form
                className=" 2xl:mt-14 xl:mt-12 lg:mt-16 w-[70%] md:w-[65%] 2xl:w-[550px] mx-auto md:mt-5 "
                onSubmit={handleSubmit}
              >
                <div className="flex gap-1  2xl:gap-2 text-center xl:my-8 2xl:my-12">
                  <div className="text-center">
                    <h1 className=" w-full legend font-[600] 2xl:text-[40px] xl:text-[25px] lg:text-[18px] text-[22px] leading-[48.76px] text-center mx-auto">
                    Super-Admin Login
                    </h1>
                  </div>

                  {/* <Image
                    src={together}
                    alt="together-icon "
                    className="2xl:w-[35px] 2xl:h-[35px] xl:w-[25px] xl:h-[25px] lg:w-[20px] lg:h-[20px] lg:mt-[10px] xl:mt-2 2xl:mt-1"
                  /> */}
                </div>
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="login-inputad  2xl:mt-2 mt-1   w-full"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="enter valid email ex. abc@gmail.com"
                    required
                    onChange={InputHandler}
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
                        2xl:right-7 2xl:top-[45px] xl:right-5 xl:top-[28px] lg:right-5 lg:top-[28px] z-50"
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
                      name="password"
                      placeholder="Password"
                      className="login-inputad w-full 2xl:mt-2 mt-1   "
                      minLength={8}
                      required
                      autoComplete="current-password"
                      onChange={InputHandler}
                    />
                  </div>
                  <div className="flex justify-end 2xl:my-2 my-1">
                    <Link href="/user/user-login">
                      <p className="legend font-[400]  text-[#0071BC] 2xl:text-[18px] xl:text-[12px] text-[12px]">
                        Forget Password?
                      </p>
                    </Link>{" "}
                  </div>
                  <button
                    type="submit"
                    disabled={isLoader}
                    className="bg-[#0071BC] montserrat-btn  text-white py-2 lg:p-3 w-full rounded-full 2xl:h-[70px] xl:h-[45px] lg:h-[40px]  2xl:my-10 lg:my-5  xl:my-8 2xl:text-[16px] xl:text-[14px] sm:text-[12px] text-[12px] my-3"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminLogin;
