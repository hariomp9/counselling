"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/logo.svg";
import poster from "../../../../../public/images/poster.webp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import student from "../../assets/right-poster.png";
import first from "../../assets/1st-right.svg";
import second from "../../assets/2st-right.svg";
import third from "../../assets/3st-right.svg";
import UserRegistration from "../../user-registration/page";
import config from "@/config";

const VerifyOTP = ({ params }) => {
  const router = useRouter();
  const userId = params.slug;
  // console.log(userId);
  const [verifyOTP, setVerifyOTP] = useState("");
  const [seconds, setSeconds] = useState(120); // Set countdown time in seconds

  const inputHandler = (e) => {
    const { value } = e.target;
    setVerifyOTP(value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${config.baseURL}/api/auth/verify-otp`,
        {
          userId: userId,
          otp: verifyOTP,
        }
      );
      toast.success("Verification Successful!");
      router.push(`/user/login-lastStep/${userId}`);
      console.log("Verification Response:", response.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleSendOTP = async (userId) => {
    try {
      const response = await axios.post(
        `${config.baseURL}/api/auth/generate-otp`,
        { userId: userId }
      );
      const otpCode = response.data.otpCode;
      console.log(otpCode, "otpCode"); // Log the OTP code directly

      setOtpM(otpCode);

      handleSendMOTP(otpCode);
    } catch (error) {
      console.error(error);
      console.log("Error occurred while sending OTP");
    }
  };

  const handleSendMOTP = async (otpCode) => {
    try {
      const response = await axios.get(
        `https://2factor.in/API/R1/?module=TRANS_SMS&apikey=3eed462e-e8dc-11ed-addf-0200cd936042&to=${number}&from=ADNETC&templatename=an24_otp&var1=${otpCode}`
      );
      console.log(response?.data, "m");
    } catch (error) {
      console.error(error);
      console.log("Error occurred while sending OTP");
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} />

      <section>
        <div className="lg:flex ">
          <div className="lg:hidden">
            <Image src={poster} className=" mx-auto" />
          </div>

          <div className="lg:w-1/2 lg:h-screen flex mb-16 lg:mb-0 ">
            <div className="w-full 2xl:pt-[120px] pt-[40px]">
              <div className="flex items-center w-[70%] md:w-[45%] xl:w-[280px] 2xl:w-[406px] mx-auto ">
                <div>
                  <div className="my-10 lg:mt-0">
                    <div className="flex justify-center 2xl:mt-20 xl:mt-5 lg:mt-3 otplogo">
                      <Image
                        src={logo}
                        alt="logo"
                        className=" logologin 2xl:w-[218px] 2xl:h-[73px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]"
                      />
                    </div>
                    <div className="flex items-center justify-center lg:mt-16 xl:mt-20 2xl:mt-40 my-7 lg:my-0 loginform">
                      <div>
                        <h1 className=" inter 2xl:w-[389px]  font-[700] 2xl:text-[30px] xl:text-[22px] lg:text-[16px] xl:w-[290px] w-[210px] 2xl:leading-[40px] text-center">
                          Almost done
                        </h1>
                        <p className="mx-auto inter 2xl:w-[406px]  font-[400] 2xl:text-[20px] xl:text-[14px] lg:text-[10px] xl:w-[260px] w-[180px] 2xl:leading-[26px] text-center">
                          We have sent an OTP to your register mobile number
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center my-1">
                      <span className="countdown font-mono 2xl:text-[25px] text-[16px] text-[#0071BC]">
                        {formatTime(seconds)}
                      </span>
                    </div>
                  </div>
                  <form className="lg:mt-5 2xl:mt-10">
                    <input
                      value={verifyOTP}
                      onChange={inputHandler}
                      maxLength={6}
                      required
                      type=""
                      id="number"
                      name="otp"
                      className="logininp text-center montserrat-otp rounded-[6.41px] bg-[#EDEDED]  border w-full 2xl:h-[50px] xl:h-[35px] lg:h-[30px] my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] lg:px-[10px] xl:px-3 2xl:px-4"
                    />

                    <button
                      onClick={handleVerify}
                      type="submit"
                      className="logininp bg-[#0071BC] montserrat-btn  text-white p-3 w-full rounded-[5px] 2xl:h-[66px] xl:h-[42px] lg:h-[35px]  2xl:my-10 lg:my-5  xl:my-5 2xl:text-[16px] xl:text-[14px] sm:text-[12px] text-[12px] my-5"
                    >
                      Verify
                    </button>
                  </form>
                  <div className="flex justify-center">
                    <button
                      className="logininp text-[#0071BC] inter font-[700] 2xl:text-[20px] xl:text-[14px] lg:text-[10px] sm:text-[] text-[]
   2xl:leading-[24.5px] xl:leading-[20px] lg:leading-[16px] sm:leading-[] leading-[]"
                      onClick={() => handleSendOTP()} // Reset the timer on resend
                      disabled={seconds > 0} // Disable the button until the timer runs out
                    >
                      Resend OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 hidden lg:block bg-[#0071BC] 2xl:pt-[120px] pt-[40px] loginC siginbox">
            <div className="2xl:w-[740px] xl:w-[500px] w-[400px] mx-auto ">
              <div>
                <h1
                  className="inter font-[700] text-white 
                 2xl:text-[40px] xl:text-[30px] lg:text-[20px] sm:text-[] text-[]
   2xl:leading-[48.41px] xl:leading-[35px] lg:leading-[28px] sm:leading-[] leading-[] "
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
                className="2xl:w-[384px] 2xl:h-[473px] h-auto xl:w-[220px] lg:w-[180px] sm:w-[] w-[] mx-auto studenImgs"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyOTP;
