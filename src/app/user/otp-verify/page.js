// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const VerifyOTP = (props) => {
//   const { id } = props;
//   console.log(id, "jj");
//   const [verifyOTP, setVerifyOTP] = useState("");
//   const router = useRouter();

//   const inputHandler = (e) => {
//     const { value } = e.target;
//     setVerifyOTP(value);
//   };

//   const handleVerify = async () => {
//     try {
//       const response = await axios.post(
//         "https://counselling-backend.vercel.app/api/auth/verify-otp",
//         {
//           userId: id,
//           otp: verifyOTP,
//         }
//       );
//       toast.success("Verification Successful!");
//       router.push("/user/user-login");
//       console.log("Verification Response:", response.data);
//     } catch (error) {
//       console.error("Error occurred while sending OTP:", error);
//       toast.error("Error occurred while sending OTP");
//     }
//   };

//   return (
//     <>
//       <ToastContainer autoClose={1000} />
//       <div className="h-screen  py-20 px-3">
//         <div className="container mx-auto">
//           <div className="max-w-sm mx-auto md:max-w-lg">
//             <div className="w-full">
//               <div className="bg-white h-64 py-3 rounded text-center border shadow-md">
//                 <h1 className="text-2xl font-bold">OTP Verification</h1>
//                 <div className="flex flex-col mt-4">
//                   <span>Enter the OTP you received at your mail</span>
//                   <span className="font-bold">h******9@gmail.com</span>
//                 </div>
//                 <div
//                   id="otp"
//                   className="flex flex-row justify-center text-center px-2 mt-5"
//                 >
//                   <input
//                     value={verifyOTP}
//                     onChange={inputHandler}
//                     placeholder="Enter OTP"
//                     className="m-2 border h-10 w-full text-center form-control rounded"
//                     type="text"
//                     id="first"
//                     maxLength={6}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   onClick={handleVerify}
//                   className="custom_btn"
//                 >
//                   Submit
//                 </button>
//                 <div className="flex justify-center text-center mt-5">
//                   <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
//                     <span className="font-bold">Resend OTP</span>
//                     <i className="bx bx-caret-right ml-1" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VerifyOTP;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import poster from "../../../../public/images/poster.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyOTP = (props) => {
  const { id } = props;
  console.log(id, "jj");
  const [verifyOTP, setVerifyOTP] = useState("");
  const [userId, setUserId] = useState("");

  const router = useRouter();

  const inputHandler = (e) => {
    const { value } = e.target;
    setVerifyOTP(value);
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        "https://counselling-backend.vercel.app/api/auth/verify-otp",
        {
          userId: id,
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
            <Image src={poster} className=" mx-auto" />
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
                  <div className="flex items-center justify-center lg:mt-16 xl:mt-20 2xl:mt-40 my-7 lg:my-0">
                    <h1 className=" montserrat 2xl:w-[389px]  font-[600] 2xl:text-[30px] xl:text-[22px] lg:text-[16px] xl:w-[290px] w-[210px] 2xl:leading-[40px] text-center">
                      Enter your phone number and submit OTP
                    </h1>
                  </div>
                </div>
                <form className="lg:mt-5 2xl:mt-10">
                  <div className="xl:my-3 2xl:my-5">
                    <label
                      htmlFor="email"
                      className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Enter your phone number
                    </label>
                    <input
                      // value={studentDetails.firstname}
                      // onChange={inputHandler}
                      maxLength={10}
                      required
                      type="number"
                      id="number"
                      name="number"
                      className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                      placeholder="Number"
                    />
                    <div className="flex justify-end xl:my-1">
                      <button onClick={handleSendOTP}>
                        <p className="montserrat-otp  text-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[12px]">
                          Get OTP
                        </p>
                      </button>{" "}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="montserrat-lable block text-[#323232] 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Enter 6 digit number
                    </label>
                    <input
                      value={verifyOTP}
                      onChange={inputHandler}
                      maxLength={6}
                      required
                      type="number"
                      id="number"
                      name="number"
                      className=" montserrat-otp  text-[#979797] border rounded-full lg:px-6 lg:py-4 w-full 2xl:h-[70px] xl:h-[40px] lg:h-[25px]   my-1 xl:my-2 outline-[#0071BC] 2xl:text-[16px] xl:text-[12px] text-[10px] py-3 px-4"
                      placeholder="Enter OTP"
                    />
                  </div>
                  <button
                    onClick={handleVerify}
                    type="submit"
                    className="bg-[#0071BC] montserrat-btn  text-white p-3 w-full rounded-full 2xl:h-[70px] xl:h-[45px] lg:h-[35px]  2xl:my-10 lg:my-5  xl:my-8 2xl:text-[16px] xl:text-[14px] sm:text-[12px] text-[12px] my-5"
                  >
                    Login
                  </button>
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

export default VerifyOTP;
