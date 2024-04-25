import React from "react";
import Image from "next/image";
import thankyou from "../../assets/thankyou-img.png";
import arrow from "../../assets/arrow.svg";
const Thankyou = () => {
  return (
    <>
      <section>
        <div className="bg-[#F5F6FF] flex justify-center items-center  2xl:w-[1725px] 2xl:h-[765px] xl:w-[] lg:w-[] sm:w-[] w-[] mx-auto">
          <div className="w-[1137px]">
            <Image
              src={thankyou}
              className=" 2xl:w-[248px] 2xl:h-[335px] h-auto xl:w-[180px] lg:w-[] sm:w-[] w-[] mx-auto"
            />
            <h1 className="inter font-[600] 2xl:text-[30px] 2xl:leading-[45px] xl:text-[20px] xl:leading-[35px] text-[16px] leading-[25px] text-center">
              Thank you for completing your profile.
            </h1>
            <h1 className="inter font-[600] 2xl:text-[30px] 2xl:leading-[45px] xl:text-[20px] xl:leading-[35px] text-[16px] leading-[25px] text-center">
              We wil review your application and our counsellor will get in
              touch with you
            </h1>
            <div className="2xl:my-[30px] xl:my-[20px]">
              <button className="flex mx-auto justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[181px] xl:w-[140px] w-[120px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                Go to Home Page
                <Image
                  src={arrow}
                  className="2xl:w-[14px] 2xl:h-[10px] rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
