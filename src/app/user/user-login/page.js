"use client";
import React, { useState } from "react";
import axios from "axios";
import Loader from "@/app/component/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setToken, removeToken, adDetails } from "@/redux/adminSlice/authSlice";

const UserLogin = () => {
  const dispatch = useDispatch();
  const [isLoader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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
      <ToastContainer autoClose={1500} />
      {isLoader && <Loader />}
      <section className="py-10 px-5">
        <div className="mx-auto w-1/2">
          <div className="flex justify-center items-center border border-gray-300 rounded-lg bg-white px-5 h-10 my-5">
            <h2 className="font-semibold">Student Login</h2>
          </div>

          <form action="" className="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 justify-center p-8 lg:p-14 md:max-w-[80%] lg:w-full lg:max-w-[100%] mx-auto ">
              <div className="text-left ">
                <p className="mb-2 2xl:text-[40px] md:text-[35px] text-[30px] leading-[38px] font-bold">
                  Welcome
                </p>
                <p className="2xl:text-[18px] md:text-[16px] text-[15px] font-[400] leading-[26px] text-gray-400 mb-4 text-[#494949]">
                  Welcome back! Please enter your details
                </p>
              </div>
              <div className="md:py-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="login-input w-full mt-2 custom-input"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="enter valid email ex. abc@gmail.com"
                  required
                  onChange={InputHandler}
                />
              </div>
              <div className="">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="login-input w-full mt-2 custom-input"
                  minLength={8}
                  required
                  autoComplete="current-password"
                  onChange={InputHandler}
                />
                <div className="flex items-center mt-4 px-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="showPassword"
                    className="mr-2"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label htmlFor="showPassword" className="login-input-label">
                    Show Password
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isLoader}
                  className="w-full bg-[#1f2432] font-medium text-white p-2 rounded-lg hover:text-black  hover:bg-white hover:border hover:border-gray-300 h-[50px] "
                >
                  {isLoader ? "Loading.." : "Login"}
                </button>

                <div className="text-[16px] font-medium underline text-center py-3 cursor-password">
                  Forgot password
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
