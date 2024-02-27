"use client";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Students from "@/app/component/admin/students";
import Counsellor from "@/app/component/admin/counsellor";
import Teachers from "@/app/component/admin/teachers";
import CollageManagement from "@/app/component/admin/collage-management";
import ApplicationManagement from "@/app/component/admin/application-management";
import ReportAnalytical from "@/app/component/admin/report-analytical";
import Setting from "@/app/component/admin/setting";
import Link from "next/link";
import Dashashboard from "@/app/component/dashboard";
import logo from "../../../../public/logo.svg";
import { removeToken, rem_AdDetails } from "@/redux/adminSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Course from "@/app/component/admin/course";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [showDrawer, setShowDrawer] = useState("");
  const [ComponentId, setComponentId] = useState(1);
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const handleClick = (id) => {
    setComponentId(id);
    setShowDrawer(false);
  };

  const menulist = [
    {
      id: 1,
      label: "Dashboard",
      component: <Dashashboard />,
      // icon: dashboard,
    },
    {
      id: 2,
      label: "Student",
      component: <Students />,
      // icon: eventadd,
    },
    {
      id: 3,
      label: "Course",
      component: <Course />,
      // icon: eventlist,
    },
    // {
    //   id: 3,
    //   label: "Counsellor",
    //   component: <Counsellor />,
    //   // icon: eventlist,
    // },
    // {
    //   id: 4,
    //   label: "Teacher",
    //   component: <Teachers />,
    //   // icon: eventlist,
    // },
    {
      id: 4,
      label: "Collage Management",
      component: <CollageManagement />,
      // icon: alluser,
    },
    {
      id: 5,
      label: "Application Management",
      component: <ApplicationManagement />,
      // icon: alluser,
    },
    {
      id: 6,
      label: "Report & analytical",
      component: <ReportAnalytical />,
      // icon: redirect,
    },
    {
      id: 7,
      label: "Setting",
      component: <Setting />,
      // icon: setting,
    },
  ];

  const handleSignout = async () => {
    try {
      const res = await axios.get(`/api/auth/logout`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Logout successfully !");
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/admin-login");
      } else {
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/admin-login");
        toast.error("Logout failed try again !");
      }
    } catch (error) {
      dispatch(removeToken());
      dispatch(rem_AdDetails());
      router.push("/admin-login");
      console.error("Error occurred:", error);
      // toast.error(error?.response?.data?.error || "Invalid token !");
      toast.success("Logout successfully !");
    }
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      {/* {loader && <Loader />} */}

      <section className="z-50">
        <div className="flex min-h-screen  lg:static ">
          <div
            className="py-1 md:py-0 px-3  absolute top-2 md:top-4 flex flex-col gap-[5px] cursor-pointer lg:hidden"
            // onClick={() => setShowDrawer(true)}
          >
            <div className="bg-black h-[2px] w-[20px]"></div>
            <div className="bg-black h-[2px] w-[20px]"></div>
            <div className="bg-black h-[2px] w-[20px]"></div>
          </div>
          <div
            className={`z-50 flex flex-col justify-between min-h-screen md:py-[10px] lg:py-[30px] xl:py-[10px] 2xl:py-[30px] py-[10px] text-white bg-black 
            xl:w-[22%] lg:w-[24%] md:w-[30%] sm:w-[35%] w-[50%]  drawer
                 ${
                   showDrawer
                     ? "block  absolute top-0 left-0 min-h-screen is-show"
                     : "hidden lg:block"
                 }`}
          >
            <div
              className="relative text-white  flex flex-col gap-[5px] cursor-pointer lg:hidden  text-right mr-3 mt-2"
              // onClick={() => setShowDrawer(false)}
            >
              <div className="flex justify-end">
                {" "}
                {/* <Image src={inquiry} className=" sm:w-8  w-7" />{" "} */}
              </div>
            </div>

            <div className="">
              <div className="flex justify-center items-center lg:mt-4 xl:mt-5 2xl:mt-7 md:mt-2 mb-6 sm:mb-0">
                <div className="mx-auto w-2/3">
                  <Image
                    src={logo}
                    alt="me"
                    width="100"
                    height="100"
                    className=" w-[50%] mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col 2xl:gap-6 gap-1 sm:mt-10 lg:mt-10 xl:mt-14 2xl:mt-20">
              {menulist.map((item, index) => (
                <div
                  key={index}
                  className={` pl-1 sm:pl-5 xl:pl-6 py-3 mx-3 xl:mx-5 rounded-md  flex gap-x-3 items-center cursor-pointer  transition-colors font-semibold dash-menu  hover:transition-all ease-in delay-100 duration-300  hover:bg-gray-700 2xl:text-[20px]  xl:text-[14px] lg:text-[12px] md:text-[14px] sm:text-[12px] text-[11px] dashboard_box_t 
                                    ${
                                      item.id === ComponentId
                                        ? "bg-gray-700"
                                        : "hover:menu_secondary hover:text-white hover:rounded-md"
                                    }  `}
                  onClick={() => handleClick(item.id)}
                >
                  {/* <Image
                    src={item?.icon}
                    alt={item.label}
                    height={30}
                    width={30}
                    className="h-[20px] w-[20px] xl:h-[20px] xl:w-[20px] 2xl:h-[30px] 2xl:w-[30px] fill-white"
                  /> */}
                  <p className=" capitalize whitespace-nowrap ">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="">
              <div>
                <div onClick={handleSignout} className="lg:mt-5 xl:mt-7 2xl:mt-12 pl-1 sm:pl-5 xl:pl-6 py-3 mx-3 xl:mx-5 rounded text-center cursor-pointer my-3 flex items-center transition-colors dash-menu gap-x-3  font-semibold hover:bg-menu_secondary hover:text-white hover:rounded-md  hover:bg-gray-700 xl:text-[14px] 2xl:text-[20px] lg:text-[12px] md:text-[14px] sm:text-[12px] text-[11px] dashboard_box_t ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-[20px] w-[20px] xl:h-[20px] xl:w-[20px] 2xl:h-[30px] 2xl:w-[30px] "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
                  <button>Sign Out</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            {menulist.map((item, index) => (
              <Fragment key={index}>
                {ComponentId === item.id && item.component}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
