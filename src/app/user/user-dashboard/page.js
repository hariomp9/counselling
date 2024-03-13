"use client";
import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import user from "../../../../public/images/user.svg";
import sideLogo from "../../../../public/images/Group 179.svg";
import arrorRight from "../../../../public/images/right-arrow.svg";
import UserProtectedRoute from "@/config/userProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../sideBar";


const UserDashboard = () => {
  const data = [
    {
      counselling: "Lorem ipsum dolor",
      detail: "It is a long established fact that a reader will distracted",
      link: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy ever 1500s",
    },
    {
      counselling: "Lorem ipsum dolor",
      detail: "It is a long established fact that a reader will distracted",
      link: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy ever 1500s",
    },
    {
      counselling: "Lorem ipsum dolor",
      detail: "It is a long established fact that a reader will distracted",
      link: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy ever 1500s",
    },
  ];
 
  return (
    <>
      <ToastContainer autoClose={1000} />
      <section>
        <div className="flex">
          <SideBar/>
          <div className="w-full lg:w-11/12">
            <Navbar />

            <div className="sm:m-10 m-5">
              <div className="md:flex 2xl:gap-10 xl:gap-7 gap-7">
                <div className="flex 2xl:w-1/3 xl:w-[40%] lg:w-[40%] md:w-[48%] w-full my-5 bg-[#F3F5F9] rounded-[10px] 2xl:p-8 p-5">
                  <div className="2xl:w-10/12 xl:w-11/12 w-11/12">
                    <h1 className="poppins font-[500] 2xl:text-[30px] xl:text-[22px] sm:text-[16px] text-[14px]">
                      Announcement & Events
                    </h1>
                    <p className="montserrat font-[300] 2xl:my-5 xl:my-3 lg:my-2 my-3 2xl:text-[16px] xl:text-[14px] text-[12px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever.
                    </p>
                  </div>
                  <div className="w-2/12 flex justify-end relative">
                    {" "}
                    <Image
                      src={arrorRight}
                      className="absolute bottom-0 w-5 lg:w-5 xl:w-6 2xl:w-8"
                    />
                  </div>
                </div>
                <div className=" flex 2xl:w-1/3 xl:w-[40%] lg:w-[40%] md:w-[48%] w-full my-5 bg-[#FEF8E1] rounded-[10px] 2xl:p-8 p-5">
                  {" "}
                  <div className="2xl:w-10/12 xl:w-11/12 w-11/12">
                    <h1 className="poppins font-[500] 2xl:text-[30px] xl:text-[22px] sm:text-[16px] text-[14px]">
                      Private counselling
                    </h1>
                    <p className="montserrat font-[300] 2xl:my-5 xl:my-3 lg:my-2 my-3 2xl:text-[16px] xl:text-[14px] text-[12px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever.
                    </p>
                  </div>
                  <div className="w-2/12 flex justify-end relative">
                    <Image
                      src={arrorRight}
                      className="absolute bottom-0 w-5 lg:w-5 xl:w-6 2xl:w-8"
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto 2xl:mt-20 xl:mt-8 lg:mt-10 mt-14">
                <table className="table 2xl:w-[900px] xl:w-[800px] lg:w-[700px]  md:w-[90%] sm:w-[110%] w-[120%] 2xl:h-[440px] bg-[#F2FAFF] rounded-md u_table">
                  <thead>
                    <tr className="">
                      <th className="poppinsfive text-[#323232] 2xl:text-[20px] lg:text-[14px] text-[12px]  2xl:py-6 xl:py-4 lg:py-2">
                        Counselling
                      </th>
                      <th className="poppinsfive text-[#323232] 2xl:text-[20px] lg:text-[14px] text-[12px] ">
                        News & Details
                      </th>
                      <th className="poppinsfive text-[#323232] 2xl:text-[20px] lg:text-[14px] text-[12px] ">
                        Links
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="montserrat-lable 2xl:text-[14px] 2xl:leading-24 w-3/12 md:text-[12px] text-[12px]">
                          {item.counselling}
                        </td>
                        <td className="montserrat-lable 2xl:text-[14px] 2xl:leading-24 md:text-[12px] text-[12px]">
                          {item.detail}
                        </td>
                        <td className="montserrat-lable 2xl:text-[14px] montserratItalic text-[#07588A] leading-24  md:text-[12px] text-[12px]">
                          {item.link}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProtectedRoute(UserDashboard);
