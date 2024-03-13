"use client";
import React from "react";
import arrow from "../../../../public/images/arrow.svg";
import countinue from "../../../../public/images/continue-arrow.svg";
import Image from "next/image";
import Navbar from "../navbar";
import SideBar from "../sideBar";

const Subscription = () => {
  const terms = [
    {
      title: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      title: "It is a long established fact that a reader .",
    },
    {
      title: "Lorem Ipsum is that it has a more-or-less normal.",
    },
    {
      title: "Many desktop publishing packages and web page.",
    },
  ];

  const titles = terms.map((term) => term.title);
  console.log(titles);
  return (
    <>
      <section>
        <div className="flex">
          <SideBar />
          <div className="w-full lg:w-11/12">
            <Navbar />
            <div>
              <div className="flex flex-col justify-center md:flex md:flex-row lg:justify-start flex-wrap gap-7 m-7">
                <div
                  id="subscription-first"
                  className=" 2xl:w-[30%] 2xl:h-[320px] xl:w-[36%] xl:h-[235px] lg:w-[41%] lg:h-[200px] md:w-[47%] sm:w-[80%] w-[90%] sm:h-[185px] border rounded-lg mx-auto md:mx-0"
                >
                  <div className="2xl:p-7 xl:p-4 p-3">
                    <div className="flex justify-between">
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] text-[16px]  xl:xl:leading-[32.36px] text-[#323232]">
                        Stater Plan
                      </h1>
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] xl:xl:leading-[32.36px] text-[#323232]">
                        Free
                      </h1>
                    </div>
                    <hr className=" border-[#2F3642] my-1" />
                    <div className=" my-2 xl:my-5">
                      {terms.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <Image
                            src={arrow}
                            className="xl:w-[14.5px] xl:h-[14.5px] lg:w-[10.5px] lg:h-[10.5px] lg:mt-[6px] xl:mt-[4px] 2xl:mt-2"
                          />

                          <p className="montserrat-lable 2xl:text-[16px] xl:text-[12px] text-[10px] my-[2px] 2xl:my-1">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="lg:mt-6 xl:2xl:mt-7 mt-5 2xl:mt-12">
                      <hr className=" border-[#2F3642]" />
                      <div className="flex gap-2 my-2 xl:my-3">
                        <h1 className="montserrat-countinue 2xl:text-[20px] xl:text-[16px] text-[14px]">
                          Continue
                        </h1>
                        <Image src={countinue} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="subscription-second"
                  className=" 2xl:w-[30%] 2xl:h-[320px] xl:w-[36%] xl:h-[235px] lg:w-[41%] lg:h-[200px] md:w-[47%] sm:w-[80%] w-[90%] sm:h-[185px] border rounded-lg mx-auto lg:mx-0"
                >
                  <div className="2xl:p-7 xl:p-4 p-3 ">
                    <div className="flex justify-between">
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] xl:xl:leading-[32.36px] text-[#323232]">
                        Basic Plan
                      </h1>
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] xl:xl:leading-[32.36px] text-[#323232]">
                        ₹650
                      </h1>
                    </div>
                    <hr className=" border-[#2F3642] my-1" />
                    <div className=" my-2 xl:my-5">
                      {terms.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <Image
                            src={arrow}
                            className="xl:w-[14.5px] xl:h-[14.5px] lg:w-[10.5px] lg:h-[10.5px] lg:mt-[6px] xl:mt-[4px] 2xl:mt-2"
                          />

                          <p className="montserrat-lable 2xl:text-[16px] xl:text-[12px] text-[10px]  my-[2px] 2xl:my-1">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="lg:mt-6 xl:2xl:mt-7 mt-5 2xl:mt-12">
                      <hr className=" border-[#2F3642]" />
                      <div className="flex gap-2 my-2 xl:my-3">
                        <h1 className="montserrat-countinue 2xl:text-[20px] xl:text-[16px] text-[14px]">
                          Continue
                        </h1>
                        <Image src={countinue} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center md:flex md:flex-row lg:justify-start flex-wrap gap-7 m-7">
                <div
                  id="subscription-third"
                  className=" 2xl:w-[30%] 2xl:h-[320px] xl:w-[36%] xl:h-[235px] lg:w-[41%] lg:h-[200px]  md:w-[47%] sm:w-[80%] w-[90%] sm:h-[185px] border rounded-lg mx-auto lg:mx-0"
                >
                  <div className="2xl:p-7 xl:p-4 p-3">
                    <div className="flex justify-between">
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] xl:leading-[32.36px] text-[#323232]">
                        Pro Plan
                      </h1>
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] xl:leading-[32.36px] text-[#323232]">
                        ₹1000
                      </h1>
                    </div>
                    <hr className=" border-[#2F3642] my-1" />
                    <div className=" my-2 xl:my-5">
                      {terms.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <Image
                            src={arrow}
                            className="xl:w-[14.5px] xl:h-[14.5px] lg:w-[10.5px] lg:h-[10.5px] lg:mt-[6px] xl:mt-[4px] 2xl:mt-2"
                          />

                          <p className="montserrat-lable 2xl:text-[16px] xl:text-[12px] text-[10px] my-[2px] 2xl:my-1">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="lg:mt-6 xl:2xl:mt-7 mt-5 2xl:mt-12">
                      <hr className=" border-[#2F3642]" />
                      <div className="flex gap-2 my-2 xl:my-3">
                        <h1 className="montserrat-countinue 2xl:text-[20px] xl:text-[16px] text-[14px]">
                          Continue
                        </h1>
                        <Image src={countinue} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="subscription-fourth"
                  className=" 2xl:w-[30%] 2xl:h-[320px] xl:w-[36%] xl:h-[235px] lg:w-[41%] lg:h-[200px] md:w-[47%] sm:w-[80%] w-[90%] sm:h-[185px] border rounded-lg mx-auto lg:mx-0"
                >
                  <div className="2xl:p-7 xl:p-4 p-3">
                    <div className="flex justify-between">
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] xl:leading-[32.36px] text-[#323232]">
                        Advance Counselling
                      </h1>
                      <h1 className="poppins-plan  2xl:text-[24px] xl:text-[18px] xl:leading-[32.36px] text-[#323232]">
                        ₹1550
                      </h1>
                    </div>
                    <hr className=" border-[#2F3642] my-1" />
                    <div className=" my-2 xl:my-5">
                      {terms.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <Image
                            src={arrow}
                            className="xl:w-[14.5px] xl:h-[14.5px] lg:w-[10.5px] lg:h-[10.5px] lg:mt-[6px] xl:mt-[4px] 2xl:mt-2"
                          />

                          <p className="montserrat-lable 2xl:text-[16px] xl:text-[12px] text-[10px] my-[2px] 2xl:my-1">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="lg:mt-6 xl:2xl:mt-7 mt-5 2xl:mt-12">
                      <hr className=" border-[#2F3642]" />
                      <div className="flex gap-2 my-2 xl:my-3">
                        <h1 className="montserrat-countinue 2xl:text-[20px] xl:text-[16px] text-[14px]">
                          Continue
                        </h1>
                        <Image src={countinue} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
