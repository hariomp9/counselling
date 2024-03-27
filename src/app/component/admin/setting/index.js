"use client";
import React, { useState } from "react";
import Image from "next/image";
import ChangePassword from "./update-password";
import poster from "../../../../../public/images/profile-poster.svg";
import profile from "../../../../../public/images/profile.svg";

const Setting = () => {
  return (
    <>
      <section className=" px-[20px] 2xl:mt-[20px] lg:mt-0">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost 2xl:text-2xl text-xl  mb-2">Profile</a>
          </div>
          <div className="flex-none">
            <h1 className="font-semibold 2xl:text-2xl text-xl mr-7 mb-2">
              {" "}
              Welcome
            </h1>
          </div>
        </div>
        <div>
          <div className="relative">
            <Image src={poster} className="" />
            <Image
              src={profile}
              className="absolute 2xl:w-[140px] 2xl:h-[140px] w-[80px] h-[80px] 2xl:top-20 2xl:left-10 xl:top-16 xl:left-5"
            />
          </div>
        </div>

        <div role="tablist" className="tabs tabs-lifted mt-10">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab font-semibold 2xl:text-[22px] "
            aria-label="  Update Password"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <ChangePassword />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab font-semibold 2xl:text-[22px]"
            aria-label="Notification"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 my-1"
          >
            Notification
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab font-semibold 2xl:text-[22px]"
            aria-label="Privacy"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
