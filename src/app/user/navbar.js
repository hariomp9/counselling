"use client";
import React, { useState } from "react";
import Image from "next/image";
import sideLogo from "../../../public/images/Group 179.svg";
import homeB from "../../../public/images/homeb.svg";
import rank from "../../../public/images/rank-p.svg";
import rs from "../../../public/images/rsb.svg";
import adSearch from "../../../public/images/ad-search.svg";
import docm from "../../../public/images/document-management.svg";
import user from "../../../public/images/user.svg";
import notify from "../../../public/images/bell.svg";
import quary from "../../../public/images/quary.svg";
import line from "../../../public/images/Line 21.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { removeToken, rem_AdDetails } from "@/redux/adminSlice/authSlice";

const Navbar = () => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoader, setLoader] = useState(false);

  const handleLogout = async () => {
    setLoader(true);

    try {
      const res = await axios.get("https://counselling-backend.vercel.app/api/auth/logout", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      if (res?.data?.success) {
        toast.success("Logout successful!");
      } else {
        // toast.error("Logout failed. Please try again!");
      }

      dispatch(removeToken());
      dispatch(rem_AdDetails());
      router.push("/user/user-login");
    } catch (error) {
      toast.error("An error occurred during logout. Please try again later.");
      console.error("Error occurred during logout:", error);
      dispatch(removeToken());
      dispatch(rem_AdDetails());
      router.push("/user/user-login");
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="w-full  z-50">
      <nav>
        <div className="navbar bg-base-100 border p-0 ">
          <div className="flex-1 w-1/2">
            <div className="drawer  w-[20px] m-3 mr-0 lg:hidden block ">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                  <div className="flex justify-end">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay w-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                        />
                      </svg>
                    </label>
                  </div>
                  <li>
                    <Image src={sideLogo} className="mx-auto w-20 h-20 " />
                  </li>
                  {/* Sidebar content here */}
                  <li>
                    <a>
                      <Image src={user} className="w-16  mx-auto " />
                      <div>
                        <p className="text-[10px] montserrat-countinue text-center">
                          Shruti Sannon
                        </p>
                        <p className="text-[10px] montserrat-countinue text-center">
                          NEET PG (Free)
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a href="/user/user-dashboard" className="mx-auto">
                      {" "}
                      <div className="flex justify-center mt-5">
                        <div className=" hover:text-[#2083C4]">
                          <a href="/user/user-dashboard">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-house w-[25px] h-[25px] mx-auto"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                            </svg>
                            <p className="text-[12px]  montserrat-countinue text-center ">
                              Home
                            </p>
                          </a>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="">
                    <a className="mx-auto">
                      {" "}
                      <div className="flex justify-center  2xl:mt-7 mt-3">
                        <div className=" hover:text-[#2083C4]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-bar-chart w-[25px] h-[25px] mx-auto"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                          </svg>
                          <p className="text-[12px] montserrat-countinue text-center">
                            {" "}
                            Rank Predictor
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="mx-auto">
                      {" "}
                      <div className="flex justify-center  2xl:mt-7 mt-3">
                        <div className=" hover:text-[#2083C4]">
                          <a href="/user/subscription">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-currency-rupee w-[25px] h-[25px] mx-auto"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                            </svg>
                            <p className="text-[12px] montserrat-countinue text-center">
                              {" "}
                              Subscription{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* <li className="">
                    <a className="mx-auto">
                      {" "}
                      <div className="flex justify-center 2xl:mt-7 mt-5">
                        <div className=" hover:text-[#2083C4]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-badge w-[25px] h-[25px] mx-auto"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z" />
                          </svg>
                          <p className="text-[12px] montserrat-countinue text-center">
                            {" "}
                            Advance Profile Search
                          </p>
                        </div>
                      </div>
                    </a>
                  </li> */}
                  <li className="">
                    <a className="mx-auto" href="/user/colleges">
                      {" "}
                      <div className="flex justify-center 2xl:mt-7 mt-5">
                        <div className=" hover:text-[#2083C4]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-paperclip  w-[25px] h-[25px] mx-auto"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                          </svg>
                          <p className="text-[12px] montserrat-countinue text-center">
                            {" "}
                            Colleges
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="mx-auto">
                      {" "}
                      <div className="flex justify-center  2xl:mt-7 mt-3">
                        <div className="  hover:text-[#2083C4]">
                          <a>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-paperclip w-[25px] h-[25px] mx-auto"
                              viewBox="0 0 16 16 "
                            >
                              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                            </svg>
                            <p className="text-[12px] montserrat-countinue text-center">
                              {" "}
                              Document Management
                            </p>
                          </a>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="mx-auto">
                      <div className="flex justify-center  2xl:mt-7 mt-3">
                        <div className="w-4/6 flex justify-center hover:text-[#2083C4]">
                          <button onClick={handleLogout}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-[25px] h-[25px] mx-auto"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                              />
                            </svg>
                            <p className="text-[12px] montserrat-countinue text-center">
                              {" "}
                              Logout
                            </p>
                          </button>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="ml-5 2xl:text-[12px] xl:text-[10px] text-[10px]">
                Welcome
              </p>
              <a className="ml-5 2xl:text-[18px] xl:text-[14px] text-[12px] text-[#2083C4] mt-0 leading-0">
                Shruti Shannon
              </a>
            </div>
          </div>
          <div className="flex justify-end w-1/2 ">
            {/* <div className="dropdown dropdown-end sm:w-2/12 flex justify-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle "
              >
                <div className="indicator">
                  <Image src={quary} className="2xl:w-9" />
                  {/* <span className="badge badge-sm indicator-item">8</span> */}
            {/* </div>
              </div>
              <div
                tabIndex={0}
                className="mt-16 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow "
              >
                <div className="card-body ">
                  <span className="font-bold text-lg 2xl:text-2xl">
                    8 Quary
                  </span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-block 2xl:text-xl">
                      View Quary
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <Image src={line} />
            <div className="dropdown dropdown-end sm:w-2/12 flex justify-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <Image src={notify} className="2xl:w-9" />
                  {/* <span className="badge bg-[#EB2027] text-white p-3 badge-sm indicator-item ml-3">5</span> */}
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-16  z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg 2xl:text-2xl">
                    5 Notification
                  </span>
                  {/* <span className="text-info">Subtotal: $999</span> */}
                  <div className="card-actions">
                    <button className="btn  btn-block ">
                      View Notification
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Image src={line} />

            <div className="dropdown dropdown-end sm:w-2/12 flex justify-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className=" rounded-full flex">
                  <div>
                    <Image src={user} className=" last:2xl:w-14" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-16 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/user/user-profile" className=" 2xl:text-xl">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/user/user-favoritelist" className=" 2xl:text-xl">
                    Favorite List
                  </a>
                </li>
                <li>
                  <a href="/user/update-password" className="2xl:text-xl">
                    Settings
                  </a>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <a className="2xl:text-xl">Logout</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
