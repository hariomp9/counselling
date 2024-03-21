"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import female from "../../../../public/images/female.svg";
import Navbar from "../navbar";
import SideBar from "../sideBar";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfile = () => {
  const { token } = useSelector((state) => state?.auth);
  const [getUser, setGetUser] = useState("");

  useEffect(() => {
    defaultUser();
  }, []);
  const defaultUser = () => {
    const option = {
      method: "GET",
      url: "https://counselling-backend.vercel.app/api/auth/getaUser",
      headers: {
        authorization: token,
      },
    };
    axios
      .request(option)
      .then((response) => {
        setGetUser(response?.data?.getaUser);
        // console.log(response?.data?.getaUser);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  return (
    <>
      <section>
        <div className="flex">
          <SideBar />
          <div className="w-full lg:w-11/12">
            <Navbar />

            <div>
              <div className="2xl:h-[58px] xl:h-[50px] lg:h-[45px] md:h-[40px] sm:h-[35px] h-[35px] text-[14px] bg-[#E7F4FD] flex items-center">
                <h1 className="montserrat-countinue 2xl:leading-[19.5px] 2xl:text-[16px]  2xl:p-10 pl-5">
                  Parent’s Details<span className="text-[#E72027]">*</span>
                </h1>
              </div>
              <form className="flex flex-wrap gap-7 sm:gap-20 2xl:gap-40 xl:gap-36 lg:gap-28 2xl:pl-10 pl-5 2xl:my-5">
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="montserrat-lable block  userprofileU "
                  >
                    Name
                  </label>
                  <p className="2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                    Sanjay Shannon
                  </p>
                </div>
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="montserrat-lable text-[#A8A8A8] block 2xl:text-[18px] xl:text-[14px] text-[12px]"
                  >
                    Phone Number
                  </label>
                  <p className=" text-[#A8A8A8] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                    123456789
                  </p>
                </div>
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="montserrat-lable block userprofileU "
                  >
                    City
                  </label>
                  <p className="2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                    Ujjain
                  </p>
                </div>
              </form>
            </div>

            <div className=" 2xl:mt-40 xl:mt-20 lg:mt-12 mt-10">
              <div className="2xl:h-[58px] xl:h-[50px] lg:h-[45px] md:h-[40px] sm:h-[35px] h-[35px] text-[14px] bg-[#E7F4FD] flex items-center">
                <h1 className="montserrat-countinue 2xl:leading-[19.5px] 2xl:text-[16px]  2xl:p-10 pl-5">
                  Student Details<span className="text-[#E72027]">*</span>
                </h1>
              </div>
              <form className="">
                <div className="flex flex-wrap gap-7 sm:gap-20 2xl:gap-40  xl:gap-36 lg:gap-28  2xl:pl-10 pl-5 xl:mt-5 lg:mt-3">
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className=" text-[#A8A8A8] montserrat-lable block  2xl:text-[18px] xl:text-[14px] text-[12px]"
                    >
                      Name
                    </label>
                    <p className=" text-[#A8A8A8] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                      Shruti shannon
                    </p>
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className=" text-[#A8A8A8] montserrat-lable block 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Email
                    </label>
                    <p className="text-[#A8A8A8] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                      shruti123@gmail.com
                    </p>
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="email"
                      className=" text-[#A8A8A8] montserrat-lable block 2xl:text-[18px] xl:text-[14px] text-[12px] "
                    >
                      Phone Number
                    </label>
                    <p className=" text-[#A8A8A8] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                      9665446699
                    </p>
                  </div>
                </div>
                <div className="flex 2xl:gap-20 xl:gap-10 lg:gap-7 pl-5  2xl:my-5">
                  <div>
                    <div className="flex gap-20 2xl:pl-5">
                      <div className="mb-4  md:mb-0">
                        <div className="flex flex-wrap gap-7 sm:gap-20 2xl:gap-48  xl:gap-44 lg:gap-32 lg:my-7 my-3">
                          <div className="my-2 md:my-0">
                            <label
                              htmlFor="email"
                              className="montserrat-lable block userprofileU "
                            >
                              Gender
                            </label>
                            <div className="flex gap-2">
                              <Image
                                src={female}
                                className="mx-auto lg:w-auto w-3"
                                alt="icon"
                              />

                              <p className=" text-[#323232] my-1 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                                Female
                              </p>
                            </div>
                          </div>

                          <div className="my-2 md:my-0">
                            <label
                              htmlFor="email"
                              className="montserrat-lable block userprofileU "
                            >
                              College Type
                            </label>
                            <p className="text-[#323232] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                              Pvt.
                            </p>
                          </div>

                          <div className="my-2 md:my-0">
                            <label
                              htmlFor="email"
                              className="montserrat-lable block userprofileU "
                            >
                              Course Type
                            </label>
                            <p className=" text-[#323232] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[14px]">
                              MD
                            </p>
                          </div>

                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
