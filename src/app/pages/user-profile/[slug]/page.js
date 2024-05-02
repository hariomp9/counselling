"use client";
import SuperNavbar from "@/app/super-admin/super-navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import sideLogo from "/public/images/Group 179.svg";
import axios from "axios";
import { useSelector } from "react-redux";

const UserDetails = ({ params }) => {
  const [studentDetail, setStudentDetail] = useState({});
  const { token } = useSelector((state) => state?.auth);
  console.log(studentDetail, "users");

  useEffect(() => {
    openModal();
  }, []);

  const openModal = async () => {
    const options = {
      method: "GET",
      url: `http://localhost:4000/api/auth/getUserById/${params.slug}`,
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setStudentDetail(response?.data?.user);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  return (
    <>
      <section>
        <div className="flex">
          <div className="hidden lg:block w-1/12 border h-screen">
            <div className="flex justify-center border border-x-0 pb-4  ">
              <a href="/user/user-dashboard">
                <Image
                  src={sideLogo}
                  alt="side-logo"
                  className="mx-auto w-10 h-10 mt-5"
                />
              </a>
              <hr />
            </div>
            <div className="flex justify-center mt-6 2xl:mt-10 mx-4">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center ">
                    Home
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin/create-user">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-plus w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Create User
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-video w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    Admin
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin/approve">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor "
                    class="w-6 h-6  mx-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    Approve
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center 2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin/student-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-mortarboard w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Student
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center 2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin/page2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-paperclip w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Colleges
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6  hover:text-[#2083C4]">
                <a href="/super-admin/page3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-vcard h-6 w-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Application
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 flex justify-center hover:text-[#2083C4]">
                <button
                //  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gear w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Setting
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div>
              <SuperNavbar />
            </div>
            <div className="w-full 2xl:p-10 xl:p-6 lg:p-4 p-4">
              <div className="2xl:w-[1172px] 2xl:h-[253px] xl:h-[180px] border-[1px] xl:w-[70%] lg:w-[70%] lg:h-[150px]   rounded-[10px] ">
                <div className="flex justify-between items-center rounded-t-box bg-[#F5F6FF] 2xl:h-[80px] xl:p-3 lg:p-2 p-2 ">
                  <div className="flex justify-between">
                    <h1 className="userdetailHead">User Profile</h1>
                  </div>
                  <div>
                    <Link href="/user2nd/user-profile">
                      <button
                        className="bg-[#4F9ED9] rounded-[4px] 2xl:w-[90px] 2xl:h-[35px] xl:w-[50px] xl:h-[25px] lg:w-[40px] lg:h-[22px] w-[40px] h-[20px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[9px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px]
                    "
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row md:justify-between 2xl:p-4 xl:p-3 lg:p-2 p-2">
                  <div>
                    <div className="bg-[#1172BA] rounded-full flex justify-center items-center 2xl:w-[68px] 2xl:h-[68px] xl:w-[45px] xl:h-[45px] w-[45px] h-[45px]">
                      <h1 className="inter text-white font-[600] 2xl:text-[20px] 2xl:leading-[20px] xl:text-[12px] xl:leading-[16px] text-[10px] my-1 2xl:my-2">
                        {studentDetail?.firstname}
                      </h1>
                    </div>

                    <h1 className="inter text-[#000000] font-[600] 2xl:text-[15px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] text-[9px] my-1 2xl:my-2">
                      {studentDetail?.firstname} {studentDetail?.lastname}
                    </h1>
                  </div>

                  <div>
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mb-4">
                      <p>+91 {studentDetail?.mobile}</p>
                      <p>{studentDetail?.email}</p>
                    </div>
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mt-4">
                      <p>Whatsapp Number</p>
                      <p>+91 {studentDetail?.mobile}</p>
                    </div>
                  </div>

                  <div className="flex justify-around flex-row lg:flex-col lg:w-auto w-1/2">
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mb-4">
                      <p>Gender</p>
                      <p className="text-[#000]">Male</p>
                    </div>
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] lg:mt-4">
                      <p>Quota</p>
                      <p className="text-[#000]">
                        {studentDetail?.All_India_Category_id?.Select_category}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] lg:mb-4">
                      <p>Current City</p>
                      <p className="text-[#000]">Indore</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mt-4">
                        <p>District</p>
                        <p className="text-[#000]">Indore</p>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] lg:w-[160px] xl:w-[200px] 2xl:w-[271px] ">
                    <p>Subscription</p>
                    <p className="text-[#000]">Indore</p>
                  </div>
                </div>
              </div>

              <div className="2xl:w-[1172px] xl:w-[70%] lg:w-[70%] 2xl:h-[451px] border-[1px] rounded-[10px] 2xl:my-10 xl:my-7 lg:my-5 my-5 ">
                <div className="bg-[#F5F6FF] flex justify-between items-center 2xl:px-4 2xl:h-[66px] xl:h-[40px] h-[40px] xl:px-3 lg:px-2 px-2">
                  <div className="flex justify-between">
                    <h1 className="userdetailHead">Subscription Details</h1>
                  </div>
                  <div>
                    <button
                      className="bg-[#4F9ED9] rounded-[4px] 2xl:w-[120px] 2xl:h-[48px] xl:w-[70px] xl:h-[25px] lg:w-[70px] lg:h-[22px] h-[22px] w-[80px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[9px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px]
                    "
                    >
                      Upgrade Plan
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto mg:w-2/3 lg:w-1/2 2xl:p-4">
                  <table className="table">
                    <thead>
                      <tr className="inter font-[500] text-[#6F6F6F] 2xl:text-[13px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[18px] lg:text-[9px] lg:leading-[18px]">
                        <th>Current Plan</th>
                        <th>Start date</th>
                        <th>End date</th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr>
                        <td className="inter font-[700] text-[#0071BC] 2xl:text-[18px] 2xl:leading-[40px] xl:text-[11px] xl:leading-[25px] lg:text-[8px] lg:leading-[14px] text-[12px] leading-[16px]">
                          Starter Plan{" "}
                          <span className="text-[#000000] ">Free</span>
                        </td>
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[11px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] text-[12px]">
                          March 20th 2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#F5F6FF] flex justify-between items-center 2xl:px-4 xl:px-3 lg:px-2 px-2 2xl:h-[66px] xl:h-[40px] h-[40px] 2xl:mt-10">
                  <div className="flex justify-between">
                    <h1 className="userdetailHead">Subscription Details</h1>
                  </div>
                </div>
                <div className="overflow-x-auto 2xl:p-4 ">
                  <table className="table">
                    <thead>
                      <tr className="inter font-[500] text-[#6F6F6F] 2xl:text-[13px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] lg:leading-[18px]">
                        <th>Date</th>
                        <th>Plan</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr className="border-none">
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] text-[12px] ">
                          20th March 2024
                        </td>
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[12px] lg:leading-[16px] 2xl:w-[317px] xl:w-[250px]">
                          Starter Plan Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry.
                        </td>
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[12px] lg:leading-[16px]">
                          Trial
                        </td>
                        <td>
                          <button className="text-[#1172BA] bg-[#DDF0FE] rounded-[3px] 2xl:w-[96px] 2xl:h-[35px] xl:w-[60px] xl:h-[25px] w-[50px] h-[22px] inter font-[600] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[10px] lg:leading-[16px]">
                            Ongoing
                          </button>
                        </td>
                        <td className=" flex justify-end">
                          <button className="text-white bg-[#4F9ED9]  rounded-[3px] 2xl:w-[107px] 2xl:h-[48px] xl:w-[70px] xl:h-[25px] w-[60px] h-[22px] inter font-[400] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[10px] lg:leading-[16px]">
                            Download
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            ;
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetails;
