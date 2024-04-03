import React from "react";
import Image from "next/image";
import userImg from "./assets/userImg.png";

const UserNavbar = () => {
  return (
    <>
      <section>
        <nav className="2xl:px-10 xl:px-6 lg:px-4 lg:py-[13px] xl:py-[13px] 2xl:p-[9px] flex justify-between border border-s-0 w-full">
          <div className="flex items-center">
            <h1 className="inter font-[600] 2xl:text-[25px] 2xl:leading-[45px] xl:text-[18px] xl:leading-[28px] lg:text-[14px] lg:leading-[20px] sm:text-[10px] sm:leading-[16px]">
              NEET UG 2024
            </h1>
          </div>
          <div className="flex items-center gap-5 2xl:gap-7">
            <div className="flex items-center gap-2">
              <Image
                src={userImg}
                className="2xl:w-[50px] 2xl:h-[50px] xl:w-[35px] xl:h-[35px] w-[35px] h-[35px]"
              />
              <div>
                <h1 className="inter font-[600] 2xl:text-[20px] 2xl:leading-[30px] xl:text-[12px] xl:leading-[16px] lg:text-[10px] lg:leading-[16px] sm:text-[10px] sm:leading-[16px] text-[9px] leading-[11px]">
                  Mayank
                </h1>
                <h2 className="inter font-[400] text-[#6A6A6A] 2xl:text-[16px] 2xl:leading-[26px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[14px] sm:text-[10px] sm:leading-[16px] text-[9px] leading-[11px]">
                  Starter Plan
                </h2>
              </div>
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
        </nav>
      </section>
    </>
  );
};

export default UserNavbar;