"use client";
import React from "react";
import Image from "next/image";
import sideLogo from "./assets/AN24Logo.svg";
import profile from "./assets/profile.svg";
import documentM from "./assets/document-manage.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { removeToken, rem_AdDetails } from "@/redux/adminSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";

const UserSidebar = () => {
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
        router.push("/super-admin/superadmin-login");
        // setLoader(false);
      } else {
        router.push("/super-admin/superadmin-login");
        toast.error("Logout failed try again !");
        dispatch(removeToken());
        dispatch(rem_AdDetails());
      }
    } catch (error) {
      router.push("/super-admin/superadmin-login");
      console.error("Error occurred:", error);
      // toast.error(error?.response?.data?.error || "Invalid token !");
      toast.success("Logout successfully !");
      dispatch(removeToken());
      dispatch(rem_AdDetails());
    }
  };
  return (
    <>
      <section>
        <div className="hidden lg:block  border h-screen xl:w-[130px] ">
          <div className="flex justify-center border border-x-0">
            <a href="/user/user-dashboard">
              <Image
                src={sideLogo}
                alt="logo"
                className="mx-auto 2xl:w-[75px] 2xl:h-[29.02px] w-[50px] h-auto my-[21.5px]"
              />
            </a>
            <hr />
          </div>
          <div className="flex justify-center mt-6 2xl:mt-[20px] mx-4">
            <div className=" hover:text-[#2083C4]">
              <a href="/user2nd/neetUG-home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house w-5 h-5 2xl:w-6 2xl:h-6 mx-auto text-[#66696F]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                <p className="2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px] ">
                  Home
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 2xl:mt-[44px]">
            <div className=" hover:text-[#2083C4]">
              <a href="/super-admin/create-user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bar-chart w-5 h-5 2xl:w-6 2xl:h-6 mx-auto text-[#66696F]"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                </svg>
                <p className="2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  {" "}
                  Rank Predictor
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 2xl:mt-[44px]">
            <div className=" hover:text-[#2083C4]">
              <a href="/user2nd/userSubscription">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-rupee w-5 h-5 2xl:w-6 2xl:h-6 mx-auto text-[#66696F]"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                <p className="2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  Subscription
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 2xl:mt-[44px]">
            <div className=" hover:text-[#2083C4]">
              <a href="/user2nd/user-profile">
                <Image
                  src={profile}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />

                <p className="2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  Profile
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-[44px] mt-5">
            <div className=" hover:text-[#2083C4]">
              <a href="/user2nd">
                <Image
                  src={documentM}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />
                <p className="2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  {" "}
                  Document Management
                </p>
              </a>
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
      </section>
    </>
  );
};

export default UserSidebar;
