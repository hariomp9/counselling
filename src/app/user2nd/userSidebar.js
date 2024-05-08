"use client";
import React from "react";
import Image from "next/image";
import sideLogo from "./assets/AN24Logo.svg";
import profile from "./assets/profile.svg";
import documentM from "./assets/documents.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { removeToken, rem_AdDetails } from "@/redux/adminSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";
import home from "./assets/home.svg";
import Subscription from "./assets/subscription.svg";
import rankP from "./assets/rank-p.svg";
import privateC from "./assets/private-counselling.svg";

const UserSidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state?.auth);
  console.log(token, "token");

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

  // const handleLogout = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4000/api/auth/logout", {
  //       headers: {
  //         authorization: token,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (res?.data?.success) {
  //       toast.success("Logout successful!");
  //       clearLocalStorageAndRouteToLogin();
  //     } else {
  //       toast.error("Logout failed, please try again!");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred during logout:", error);

  //     toast.error("An error occurred during logout");
  //   } finally {
  //     // setLoader(false);
  //   }
  // };

  const clearLocalStorageAndRouteToLogin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");

    dispatch(removeToken());
    dispatch(rem_AdDetails());

    router.push("/user/user-login");
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
                <Image
                  src={home}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />
                <p className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px] ">
                  Home
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 2xl:mt-[44px]">
            <div className=" hover:text-[#2083C4]">
              <a href="/super-admin/create-user">
                <Image
                  src={rankP}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />

                <p className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  {" "}
                  Rank Predictor
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 2xl:mt-[44px]">
            <div className=" hover:text-[#2083C4]">
              <a href="/user2nd/userSubscription">
                <Image
                  src={Subscription}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />
                <p className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  Subscription
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 2xl:mt-[44px]">
            <div className=" hover:text-[#2083C4]">
              {/* <a href="/user2nd/userProfile"> */}
              <a href="/user2nd/profile">
                <Image
                  src={profile}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />

                <p className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
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
                <p className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  {" "}
                  Document Management
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-[44px] mt-5">
            <div className=" hover:text-[#2083C4]">
              <a href="/user2nd/private-counselling">
                <Image
                  src={privateC}
                  className="mx-auto  w-5 h-5 2xl:w-6 2xl:h-6 mx-auto"
                />
                <p className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[16.94px] text-[10px] inter font-[400] text-center my-[3px]">
                  {" "}
                  Private Counselling
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
                  className="w-6 h-6 mx-auto text-[#66696F]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                <p className="text-[#66696F] 2xl:text-[13px] text-[10px] montserrat-countinue text-center">
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
