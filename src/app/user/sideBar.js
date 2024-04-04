"use client";
import React from "react";
import Image from "next/image";
import user from "../../../public/images/user.svg";
import sideLogo from "../../../public/images/Group 179.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { removeToken, rem_AdDetails } from "@/redux/adminSlice/authSlice";
import UserProtectedRoute from "@/config/userProtectedRoute";
import Loader from "../component/loader.js";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const SideBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state?.auth);

  const handleLogout = async () => {
    // setLoader(true);

    try {
      const res = await axios.get(
        "https://counselling-backend.vercel.app/api/auth/logout",
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Logout successfully !");
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/user/user-login");
        // setLoader(false);
      } else {
        router.push("/user/user-login");
        toast.error("Logout failed try again !");
        dispatch(removeToken());
        dispatch(rem_AdDetails());
      }
    } catch (error) {
      router.push("/user/user-login");
      console.error("Error occurred:", error);
      // toast.error(error?.response?.data?.error || "Invalid token !");
      toast.success("Logout successfully !");
      dispatch(removeToken());
      dispatch(rem_AdDetails());
    }
  };
  return (
    <>
      <div className="hidden lg:block w-1/12 border h-screen">
        <div className="flex justify-center border border-x-0 pb-2  ">
          <Link href="/user/user-dashboard">
            <Image src={sideLogo} alt="logo" className="mx-auto w-12 h-12 mt-5" />
          </Link>
          <hr />
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-4/6">
            <Image src={user} alt="user" className="w-16  mx-auto " />
            <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
              {" "}
              Shruti Sannon
            </p>
            <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
              {" "}
              NEET PG (Free)
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 2xl:mt-16">
          <div className="w-4/6 hover:text-[#2083C4]">
            <Link href="/user/user-dashboard">
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
            </Link>
          </div>
        </div>
        <div className="flex justify-center  2xl:mt-7 mt-5">
          <div className="w-4/6 hover:text-[#2083C4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bar-chart w-6 h-6 mx-auto"
              viewBox="0 0 16 16"
            >
              <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
            </svg>
            <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
              {" "}
              Rank Predictor
            </p>
          </div>
        </div>
        <div className="flex justify-center  2xl:mt-7 mt-5">
          <div className="w-4/6 hover:text-[#2083C4]">
            <a href="/user/subscription">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-currency-rupee w-6 h-6 mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
              </svg>
              <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                {" "}
                Subscription{" "}
              </p>
            </a>
          </div>
        </div>
        {/* <div className="flex justify-center 2xl:mt-7 mt-5">
          <div className="w-4/6 hover:text-[#2083C4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-badge w-6 h-6 mx-auto"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z" />
            </svg>
            <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
              {" "}
              Advance Profile Search
            </p>
          </div>
        </div> */}
        <div className="flex justify-center 2xl:mt-7 mt-5">
          <div className="w-4/6 hover:text-[#2083C4]">
            <Link href="/user/colleges">
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
            </Link>
          </div>
        </div>
        <div className="flex justify-center  2xl:mt-7 mt-5">
          <div className="w-4/6  hover:text-[#2083C4]">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-paperclip w-6 h-6 mx-auto"
                viewBox="0 0 16 16 "
              >
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
              </svg>
              <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                {" "}
                Document Management
              </p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center  2xl:mt-7 mt-5">
          <div className="w-4/6 flex justify-center hover:text-[#2083C4]">
            <button onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
              <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                {" "}
                Logout
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
