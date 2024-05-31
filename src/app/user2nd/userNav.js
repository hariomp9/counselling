"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import userImg from "./assets/student.png";
import sideLogo from "./assets/AN24Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { removeToken, rem_AdDetails ,removeUserId } from "@/redux/adminSlice/authSlice";
import logout from "./assets/logout.svg";
import key from "./assets/key.svg";
import user from "./assets/profile-circle.svg";
import config from "@/config";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const [studentDetail, setStudentDetail] = useState({});
  const { token } = useSelector((state) => state?.auth);
  const { _id } = useSelector((state) => state?.auth);
  console.log(_id, "ifgdb");
  const { ad_details } = useSelector((state) => state?.auth);
  console.log(ad_details, "ad_details");
  const [plan, setPlan] = useState("One on One");
  const firstNameInitial = studentDetail?.firstname
    ? studentDetail.firstname[0]
    : "";
  const lastNameInitial = studentDetail?.lastname
    ? studentDetail.lastname[0]
    : "";
  useEffect(() => {
    defaultAUser();
  }, []);

  const defaultAUser = async () => {
    const options = {
      method: "GET",
      url: `http://localhost:4000/api/auth/getUserById/${_id}`,
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setStudentDetail(response?.data?.user);
        setPlan(response?.data?.user?.SubscriptionsPlan);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  const router = useRouter();

  const handleLogout = async () => {
    // setLoader(true);

    try {
      const res = await axios.get(
        `${config.baseURL}/api/auth/logout`,
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
        dispatch(removeUserId());
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
      <ToastContainer autoClose={1000} />
      <section>
        <nav className=" hidden lg:block 2xl:px-10 xl:px-6 lg:px-4 lg:py-[13px] xl:py-[13px] 2xl:p-[9px]  border border-s-0 w-full flex-row ">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <h1 className="inter font-[600] 2xl:text-[25px] 2xl:leading-[45px] xl:text-[18px] xl:leading-[28px] lg:text-[14px] lg:leading-[20px] sm:text-[12px] text-[10px] sm:leading-[16px] ">
                NEET UG 2024
              </h1>
            </div>
            <div className="flex items-center gap-5 2xl:gap-7">
              {plan === "One on One" ? (
                <div>
                  <Link href={`/pages/user-stepsForm/${studentDetail._id}`}>
                    <button
                      className="bg-[#4F9ED9] text-white inter font-[700] rounded-[5px] 2xl:text-[15px] 2xl:leading-[20px] xl:text-[11px] xl:leading-[16px] lg:text-[9px] 
            2xl:w-[216px] 2xl:h-[48px] xl:h-[30px] h-[25px] xl:w-[160px] lg:w-[120px] sm:w-[] w-[]  lg:leading-[14px]"
                    >
                      Complete Your Profile
                    </button>
                  </Link>
                </div>
              ) : (
                ""
              )}

              {/* <div className="flex items-center gap-2">
                <Image
                  src={userImg}
                  className="2xl:w-[50px] 2xl:h-[50px] xl:w-[35px] xl:h-[35px] w-[35px] h-[35px] rounded-full"
                />
                <div>
                  <h1 className="inter font-[600] 2xl:text-[20px] 2xl:leading-[30px] xl:text-[12px] xl:leading-[16px] lg:text-[10px] lg:leading-[16px]">
                    {studentDetail?.firstname}
                  </h1>
                  <h2 className="inter font-[400] text-[#6A6A6A] 2xl:text-[16px] 2xl:leading-[26px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[14px]">
                    {studentDetail?.SubscriptionsPlan}
                  </h2>
                </div>
              </div> */}

              <div className="dropdown dropdown-end 2xl:w-[170px]">
                <div tabIndex={0} role="button" className="  btn-circle ">
                  <div className=" rounded-full w-full">
                    <div className="flex items-center gap-2">
                      <Image
                        src={userImg}
                        className="2xl:w-[50px] 2xl:h-[50px] xl:w-[35px] xl:h-[35px] w-[35px] h-[35px] rounded-full"
                      />
                      <div className="w-[170px]">
                        <h1 className="inter font-[600] 2xl:text-[20px] 2xl:leading-[30px] xl:text-[12px] xl:leading-[16px] lg:text-[10px] lg:leading-[16px] w-[110px] ">
                          {studentDetail?.firstname}
                        </h1>
                        <h2 className="inter font-[400] text-[#6A6A6A] 2xl:text-[16px] 2xl:leading-[26px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[14px] w-[110px]">
                          {studentDetail?.SubscriptionsPlan}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="border menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box 2xl:w-[353px] 2xl:h-[320px]"
                >
                  <div className="flex justify-between 2xl:px-[30px] xl:px-[20px] px-[15px] 2xl:h-[70px]">
                    <div className="flex gap-[15px] items-center">
                      <div className="bg-[#1172BA] rounded-full flex justify-center items-center 2xl:w-[32px] 2xl:h-[32px] xl:w-[45px] xl:h-[45px] w-[45px] h-[45px]">
                        <h1 className="inter text-white font-[600] 2xl:text-[16px] 2xl:leading-[20px] xl:text-[12px] xl:leading-[16px] text-[10px] my-1 2xl:my-2">
                          {firstNameInitial}
                          {lastNameInitial}
                        </h1>
                      </div>
                      <div className="inter font-[700] 2xl:text-[20px] 2xl:leading-[30px] xl:text-[12px] xl:leading-[16px] lg:text-[10px] lg:leading-[16px]">
                        {studentDetail?.firstname} {studentDetail?.lastname}
                      </div>
                    </div>

                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-[25.74px] h-[25.74px]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr />

                  <Link href="/user2nd/profile" className="justify-between">
                    <li className="2xl:px-[20px] xl:px-[20px] px-[15px] 2xl:h-[70px]">
                      <div className="2xl:h-[80px] gap-[15px] flex items-center justify-start">
                        <Image src={user} className="" />

                        <p className="inter font-[400] 2xl:text-[15px] 2xl:leading-[22px] xl:text-[12px] text-[10px]">
                          My Profile
                        </p>
                      </div>
                    </li>
                  </Link>
                  <hr />

                  <Link href="/user/update-profile" className="justify-between">
                    <li className="2xl:px-[20px] xl:px-[20px] px-[15px] 2xl:h-[70px]">
                      <div className="2xl:h-[80px] gap-[15px] flex items-center justify-start">
                        <Image src={key} className="" />
                        <p className="inter font-[400] 2xl:text-[15px] 2xl:leading-[22px] xl:text-[12px] text-[10px]">
                          Change Password
                        </p>{" "}
                      </div>
                    </li>
                  </Link>
                  <hr />

                  <button onClick={handleLogout}>
                    <li className="2xl:px-[20px] xl:px-[20px] px-[15px] 2xl:h-[70px]">
                      <div className="2xl:h-[60px] gap-[15px] flex items-center justify-start">
                        <Image src={logout} className="" />
                        <p className="inter font-[400] text-[#DC2635] 2xl:text-[15px] 2xl:leading-[22px] xl:text-[12px] text-[10px]">
                          Signout
                        </p>
                      </div>
                    </li>
                  </button>
                </ul>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bell-fill w-5 h-5 2xl:w-6 2xl:h-6"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </div>
          </div>
        </nav>

        {/* MOBILE VIEW */}
        <nav className="block lg:hidden flex justify-between border border-s-0 w-full px-5">
          <div className="flex gap-5 items-center">
            <a href="/user/user-dashboard">
              <Image
                src={sideLogo}
                className="mx-auto w-[50px] h-auto my-[21.5px]"
              />
            </a>
            <h1 className="inter font-[600] sm:text-[10px] sm:leading-[16px] nav_text">
              NEET UG 2024
            </h1>
          </div>
          <div className="flex items-center gap-2 2xl:gap-7">
            <div>
              <button className="bg-[#4F9ED9] text-white inter font-[700] px-1 rounded-[5px] h-[25px] sm:text-[8px] sm:leading-[12px] text-[9px] leading-[11px]">
                Complete Your Profile
              </button>
            </div>
            <div className="flex items-center gap-1">
              <Image src={userImg} className="w-[25px] h-[25px]" />
              <div>
                <h1 className="inter font-[600] sm:text-[10px] sm:leading-[16px] text-[9px] leading-[11px]">
                  Mayank
                </h1>
                <h2 className="inter font-[400] text-[#6A6A6A] sm:text-[10px] sm:leading-[16px] text-[9px] leading-[11px]">
                  Starter Plan
                </h2>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell-fill w-5 h-5 "
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
          </div>
        </nav>
      </section>
    </>
  );
};

export default UserNavbar;

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</div>;
