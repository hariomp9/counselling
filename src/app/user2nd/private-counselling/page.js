"use client";
import React, { useEffect, useState } from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";
import woman2 from "../assets/woman2.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import axios from "axios";
import rightImg from "../assets/right (1).svg";
import Link from "next/link";
import config from "@/config";
import UserProtectedRoute from "@/config/userProtectedRoute";
import { ToastContainer } from "react-toastify";
import Loader from "@/app/component/loader";

const PrivateCounselling = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [studentDetail, setStudentDetail] = useState({});
  const { token, _id } = useSelector((state) => state?.auth);
  const [plan, setPlan] = useState("One on One");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const [requestStatus, setRequestStatus] = useState("Pending");

  useEffect(() => {
    defaultAUser();
  }, []);

  const defaultAUser = async () => {
    try {
      const options = {
        method: "GET",
        url: `${config.baseURL}/api/auth/getUserById/${_id}`,
        headers: {
          Accept: "application/json",
          Authorization: token,
        },
      };
      const response = await axios.request(options);
      setStudentDetail(response?.data?.user);
      setRequestStatus(response?.data?.user?.Status);
      setPlan(response?.data?.user?.SubscriptionsPlan);
    } catch (error) {
      console.log("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    if (buttonClicked && plan !== "One on One") {
      handleSubscription();
    }
  }, [buttonClicked, plan]);

  const handleSubscription = async () => {
    setLoader(true);

    try {
      const response = await axios.post(
        `${config.baseURL}/api/auth/PushMail/${_id}`
      );
      if (response.status === 200) {
        setSuccessMessageVisible(true);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error triggering subscription:", error);
    }
  };

  return (
    <>
      <section>
        {isLoader && <Loader />}

        <ToastContainer autoClose={1000} />
        <div className="flex">
          <div>
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />

            <div className="2xl:w-[1500px] xl:w-[1200px] xl:h-[100px] 2xl:h-[140px] bg-[#F5F6FF] font-inter mt-[20px] ml-[50px] rounded-[10px] flex items-center">
              <div className="ml-10">
                <div className="2xl:text-[36px] xl:text-[20px] text-[20px] font-[700]">
                  Welcome to Private Counselling
                </div>
                <div className="text-black font-[400] mt-2 2xl:text-[15px] xl:text-[12px] text-[10px] ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-start ml-6 w-[100%]">
                <Image
                  src={woman2}
                  alt="Description of the image"
                  width={552.76}
                  height={492}
                  className="mt-[30px]  2xl:w-[552px] 2xl:h-[492px]"
                />
              </div>

              <div className="flex flex-col justify-center mt-[30px] ">
                <div className="2xl:mr-[300px] w-[80%] mx-auto">
                  <div className="font-inter mt-[40px] font-[400] 2xl:text-[20px] xl:text-[14px] text-[12px] w-[80%] mx-auto">
                    <h1 className=" font-[700] h-[36px]  2xl:text-[30px] xl:text-[20px] text-[14px] my-5">
                      1 on 1 Counselling
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here, content here, making it
                      look like readable English.
                    </p>
                    <div className="mt-2">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here, content here,
                        making it look like readable English.
                      </p>
                    </div>

                    <div>
                      {successMessageVisible && (
                        <div className="text-black mt-2 w-[695px] h-[110px] flex ml-5 p-4 items-center bg-[#E9F3E8] rounded-[10px] my-6 mx-3 font-[500] text-[20px]">
                          <Image
                            src={rightImg}
                            alt="rightimg"
                            className="ml-3 my-6 mr-4"
                          />
                          Your request for Premium counselling is received. Our
                          expert counsellor will get in touch with you shortly.
                        </div>
                      )}
                    </div>

                    {successMessageVisible ? null : plan === "One on One" ? (
                      // Render "Complete Your Profile" button
                      <div className="bg-[#4F9ED9] w-[217px] 2xl:w-[280px]  2xl:text-[20px] xl:text-[14px] text-[12px] my-5 2xl:h-[48px] xl:h-[35px] h-[30px] flex justify-center items-center rounded-md cursor-pointer mb-5">
                        <Link
                          href={`/pages/user-stepsForm/${studentDetail._id}`}
                        >
                          <button
                            className="bg-[#4F9ED9] text-white rounded-md px-4 py-2"
                            onClick={() => setButtonClicked(true)}
                          >
                            Complete Your Profile
                          </button>
                        </Link>
                      </div>
                    ) : (
                      // Render "Click Here To Subscribe" button
                      <div className="bg-[#4F9ED9] w-[217px] 2xl:w-[280px]  2xl:text-[20px] xl:text-[14px] text-[12px] my-5 2xl:h-[48px] xl:h-[35px] h-[30px] flex justify-center items-center rounded-md cursor-pointer mb-5">
                        <button
                          className="bg-[#4F9ED9] text-white rounded-md px-4  2xl:py-2"
                          onClick={() => setButtonClicked(true)}
                        >
                          Click Here To Subscribe
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProtectedRoute(PrivateCounselling);
