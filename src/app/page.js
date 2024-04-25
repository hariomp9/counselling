import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import news1 from "../../public/news/news1.svg";
import news2 from "../../public/news/news2.svg";
import AddmissionPreference from "@/components/user-profile/steps-pages/addmission-preference";
import Thankyou from "@/components/user-profile/thankyou-page/page";

const page = () => {
  return (
    <>
      {/* <div>
        <nav>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
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
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </div> */}

              {/* ============Logo ================= */}
              {/* <div className=" ">
                <Image
                  src={logo}
                  alt="me"
                  width="20"
                  height="20"
                  className=" w-[30%] "
                />
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl">Counselling</a>
            </div> */}

            {/* =========================================== */}
            {/* <div className="navbar-end">
              <a href="/user/user-login">
                <button className="btn p-1 border mr-4">Login</button>
              </a>
              <button className="btn btn-ghost btn-circle">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="btn btn-ghost btn-circle">
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
        <div className="flex justify-end">
          <div className="w-1/4 rounded-lg border mr-5 p-2">
            <h1 className="font-semibold text-xl m-2">Latest Update</h1>
            <div className="my-5">
              <h1 className="font-semibold text-md m-2">
                NEET MDS 2024: Exams likely postponed; schedule shows under
                process, RTI reveals. Details here
              </h1>
              <div>
                <Image src={news1} width={50} height={50} className="w-full" />
              </div>
            </div>
            <div className="my-5">
              <h1 className="font-semibold text-md m-2">
              NEET MDS 2024: Exam Likely Postponed, Schedule Under Process, Check Details Here
              </h1>
              <div>
                <Image src={news2} width={50} height={50} className="w-full" />
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <Thankyou/>
    </>
  );
};

export default page;
