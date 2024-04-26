"use client";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import poster from "../../../../public/images/poster.webp";
import student from "../assets/right-poster.png";
import first from "../assets/1st-right.svg";
import second from "../assets/2st-right.svg";
import third from "../assets/3st-right.svg";

const UserRegistration = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const userID = userId._id;
  const [isLoader, setLoader] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const [studentDetails, setStudentDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await axios.post(
        "https://counselling-backend.vercel.app/api/auth/register",
        studentDetails
      );
      if (response.status === 201) {
        toast.success("Registration Successful!");
        router.push("/user/user-login");
        setUserId(response?.data?.user);
        handleSendOTP(response?.data?.user);
      } else {
        toast.error("Failed to Register. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while registering.");
    } finally {
      setLoader(false);
    }
  };

  const handleSendOTP = async (userID) => {
    try {
      const response = await axios.post(
        "https://counselling-backend.vercel.app/api/auth/generate-otp",
        { userId: userID }
      );
      console.log(response?.data);
    } catch (error) {
      console.error(error);
      console.log("Error occurred while sending OTP");
    }
  };
  return (
    <>
      <section>
        <div className="lg:flex ">
          <div className="lg:hidden">
            <Image src={poster} alt="banner" className=" mx-auto" />
          </div>
          <div className="lg:w-1/2 h-screen flex items-center">
            <div className="w-full">
              <div className=" ">
                <div className=" w-[52%] mx-auto ">
                  <div className=" lg:mt-0">
                    <div className="flex justify-center mt-3 xl:mt-0">
                      <Image
                        src={logo}
                        alt="logo"
                        className=" 2xl:w-[218px] 2xl:h-[73px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]  mb-5 2xl:mb-0"
                      />
                    </div>
                    <div className="flex justify-center lg:gap-1 xl:gap-2 2xl:gap-5 text-center 2xl:mt-[50px] gap-2">
                      <div className="text-center">
                        <h1 className=" w-full inter font-[600] 2xl:text-[30px] xl:text-[25px] lg:text-[18px] text-[22px] 2xl:leading-[36.31px] xl:leading-[30.31px] text-center">
                          Begin your journey
                        </h1>
                      </div>
                      {/* <Image
                        src={together}
                        alt="together-icon"
                        className="2xl:w-[35px] 2xl:h-[35px] xl:w-[20px] xl:h-[20px] lg:w-[15px] lg:h-[15px] lg:mt-[2px] xl:mt-[6px] 2xl:mt-1 w-[15px]"
                      /> */}
                    </div>
                    {/* <div className="flex justify-center sm:gap-2 2xl:my-2  mb-1">
                      <p className="poppins font-[400] text-[#323232] xl:leading-[19.5px] 2xl:text-[16px] xl:text-[12px] text-[10px]">
                        Already have an account?
                      </p>
                      <a href="/user/user-login">
                        <p className="poppins font-[500] text-[#EB2027] xl:leading-[19.5px] underline 2xl:text-[16px] xl:text-[12px] text-[10px]">
                          Log in
                        </p>
                      </a>
                    </div> */}
                  </div>

                  <div className=""></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mx-auto my-2 xl:my-3 2xl:my-[]">
                  <div className=" w-[80%] lg:w-[60%] mx-auto ">
                    {/* <label
                      htmlFor="course"
                      className="montserrat-lable block text-[#000000] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Course
                    </label>
                    <div className="flex my-[2px] xl:my-1 2xl:my-2 gap-3">
                      <div class="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="circleCheckbox"
                          class="hidden"
                        />

                        <input
                          type="radio"
                          name="radio-7"
                          value="neetug"
                          className="radio radio-info w-4 h-4 sm:w-5 sm:h-5  2xl:w-6 2xl:h-6"
                          checked={selectedValue === "neetug"}
                          onChange={handleRadioChange}
                        />
                        <span className="2xl:text-[18px] xl:text-[12px] text-[12px] leading-[19.5px]">
                          NEET UG
                        </span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="circleCheckbox "
                          class="hidden"
                        />

                        <input
                          type="radio"
                          name="radio-7"
                          value="neetpg"
                          className="radio radio-info w-4 h-4 sm:w-5 sm:h-5  2xl:w-6 2xl:h-6"
                          checked={selectedValue === "neetpg"}
                          onChange={handleRadioChange}
                        />
                        <span className="2xl:text-[18px] xl:text-[12px] text-[12px] leading-[19.5px]">
                          NEET PG
                        </span>
                      </div>
                    </div> */}
                    <div className="2xl:my-5 xl:my-3 my-2">
                      <div className="flex 2xl:gap-7 xl:gap-4 lg:gap-3 xl:my-1 2xl:my-2 sm:gap-4 gap-3">
                        <div>
                          <label
                            htmlFor="firstname"
                            className="montserrat-lable block text-[#000000] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                          >
                            First Name
                          </label>
                          <input
                            value={studentDetails.firstname}
                            onChange={inputHandler}
                            maxLength={100}
                            required
                            type="text"
                            id="firstname"
                            name="firstname"
                            className=" montserrat-otp  text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full 2xl:h-[56px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-0 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                            placeholder="First"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="firstname"
                            className="montserrat-lable block text-[#000000] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                          >
                            Last Name
                          </label>
                          <input
                            value={studentDetails.lastname}
                            onChange={inputHandler}
                            maxLength={100}
                            required
                            type="text"
                            id="lastname"
                            name="lastname"
                            className=" montserrat-otp  text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full 2xl:h-[56px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-0 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                            placeholder="Last"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="2xl:my-5 xl:my-3 my-2">
                      <label
                        htmlFor="email"
                        className="montserrat-lable block text-[#000000] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                      >
                        Email
                      </label>
                      <input
                        value={studentDetails.email}
                        onChange={inputHandler}
                        maxLength={100}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                        type="text"
                        id="email"
                        name="email"
                        className=" montserrat-otp  text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full 2xl:h-[56px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                        placeholder="Enter"
                      />
                    </div>
                    <div className="2xl:my-5 xl:my-3 my-2">
                      <label
                        htmlFor="email"
                        className="montserrat-lable block text-[#000000] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                      >
                        Mobile Number
                      </label>
                      <input
                        value={studentDetails.mobile}
                        onChange={inputHandler}
                        maxLength={10}
                        pattern="0-9"
                        required
                        type=""
                        id="mobile"
                        name="mobile"
                        className=" montserrat-otp  text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full 2xl:h-[56px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                        placeholder="Enter"
                      />
                    </div>
                    <div className="2xl:my-5 xl:my-3 my-2">
                      <label
                        htmlFor="password"
                        className="montserrat-lable block text-[#000000] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                      >
                        Create Password
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          className=" absolute  transform -translate-y-1/2 cursor-pointer 
                        2xl:right-7 2xl:top-[37px] xl:right-5 xl:top-[28px] lg:right-5 lg:top-[20px]"
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
                          value={studentDetails.password}
                          type={showPassword ? "text" : "password"}
                          onChange={inputHandler}
                          maxLength={100}
                          required
                          id="password"
                          name="password"
                          className=" montserrat-otp  text-[#979797] border rounded-[6.41px] lg:px-6 lg:py-4 w-full 2xl:h-[56px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <label className="cursor-pointer flex  2xl:gap-2 gap-1 p-0 ">
                        <div>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox rounded-[2.57px] bg-transparent 2xl:w-[22px] 2xl:h-[22px] w-[16px] h-[16px]"
                          />
                        </div>
                        <div className="">
                          <p className="w-full text-start inter text-[#3F3F3F] font-[400] 2xl:text-[16px] xl:text-[12px] text-[12px]  2xl:leading-[19.36px] xl:leading-[16.36px] text-center ">
                            {" "}
                            By signing up, I agree with the Admission Network
                            24’s
                          </p>
                          <p className="w-full text-start inter text-[#0071BC] font-[400] 2xl:text-[16px] xl:text-[12px] text-[12px]  2xl:leading-[19.36px] xl:leading-[16.36px] text-center 2xl:mx-2 xl:mx-1">
                            Terms of Use & Privacy Policy
                          </p>
                        </div>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#0071BC] montserrat-btn  text-white p-3 w-full rounded-[6.41px] 2xl:h-[56px] xl:h-[45px] lg:h-[35px]  lg:my-0  2xl:text-[16px] xl:text-[14px] sm:text-[12px] text-[12px] my-5 2xl:mt-[25px] xl:mt-7"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:block bg-[#0071BC] 2xl:pt-[120px] pt-[40px]">
            <div className="2xl:w-[740px] xl:w-[500px] w-[400px] mx-auto ">
              <div>
                <h1
                  className="inter font-[700] text-white 
                 2xl:text-[40px] xl:text-[30px] lg:text-[20px] sm:text-[] text-[]
   2xl:leading-[48.41px] xl:leading-[35px] lg:leading-[28px] sm:leading-[] leading-[]"
                >
                  Come join us
                </h1>
              </div>
              <hr
                className="2xl:mt-[20px] xl:mt-[10px] lg:mt-[8px] sm:mt-[] mt-[]
              2xl:mb-[35px] xl:mb-[25px] lg:mb-[15px] sm:mb-[] mb-[]"
              />
              <div className="flex items-center gap-[10px] xl:gap-[15px] 2xl:gap-[25px] mx-auto">
                <Image
                  src={first}
                  className="2xl:w-[41.54px] 2xl:h-[40px] h-auto xl:w-[30px] lg:w-[25px] sm:w-[] w-[] "
                />
                <h1
                  className="inter font-[600] text-white 
                 2xl:text-[20px] xl:text-[14px] lg:text-[11px] sm:text-[] text-[]
   2xl:leading-[30px] xl:leading-[26px] lg:leading-[22px] sm:leading-[] leading-[]"
                >
                  Explore articles, tutorials, and guides on diverse subjects
                </h1>
              </div>
              <div className="flex items-center gap-[10px] xl:gap-[15px] 2xl:gap-[25px] mx-auto xl:my-[15px] my-[10px]">
                <Image
                  src={second}
                  className="2xl:w-[41.54px] 2xl:h-[40px] h-auto xl:w-[30px] lg:w-[25px] sm:w-[] w-[] "
                />
                <h1
                  className="inter font-[600] text-white 
                 2xl:text-[20px] xl:text-[14px] lg:text-[11px] sm:text-[] text-[]
   2xl:leading-[30px] xl:leading-[26px] lg:leading-[22px] sm:leading-[] leading-[]"
                >
                  Learn at your own pace and access educational resources
                  anytime
                </h1>
              </div>
              <div className="flex items-center gap-[10px] xl:gap-[15px] 2xl:gap-[25px] mx-auto">
                <Image
                  src={third}
                  className="2xl:w-[41.54px] 2xl:h-[40px] h-auto xl:w-[30px] lg:w-[25px] sm:w-[] w-[] "
                />
                <h1
                  className="inter font-[600] text-white 
                 2xl:text-[20px] xl:text-[14px] lg:text-[11px] sm:text-[] text-[]
   2xl:leading-[30px] xl:leading-[26px] lg:leading-[22px] sm:leading-[] leading-[]"
                >
                  Engage with a community of learners and share insights
                </h1>
              </div>
            </div>
            <div
              className="flex items-center gap-[10px] xl:gap-[15px] 2xl:gap-[25px] mx-auto 2xl:w-[432px] 
              2xl:mt-[80px] xl:mt-[40px] lg:mt-[25px] sm:mt-[] mt-[]"
            >
              <Image
                src={student}
                className="2xl:w-[384px] 2xl:h-[473px] h-auto xl:w-[220px] lg:w-[180px] sm:w-[] w-[] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserRegistration;
