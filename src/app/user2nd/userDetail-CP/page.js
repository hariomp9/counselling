import React from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";

const page = () => {
  return (
    <>
      <section>
        <div className="flex w-full">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />
            <div className="2xl:w-[1725px] xl:w-[1150px] lg:w-[880px] mx-auto px-[15px] sm:px-[30px] mt-[20px] lg:px-0  ">
              <div className="w-full 2xl:h-[127px] xl:h-[90px] h-[70px] lg:px-[35px] sm:px-[20px] px-[10px] bg-[#F5F6FF] rounded-[10px] flex items-center 2xl:mt-[30px]">
                <div>
                  <h1 className="inter font-[700] 2xl:text-[30px] 2xl:leading-[36.31px] xl:text-[20px] xl:leading-[25px] lg:text-[16px] lg:leading-[20px]  sm:leading-[18px] text-[14px] leading-[20px]">
                    Complete your profile
                  </h1>
                  <p className="inter font-[400] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[18px] text-[10px] leading-[18px]">
                    Start completing your profile to get better result and
                    analysis
                  </p>
                </div>
              </div>
              <div className="md:hidden block flex justify-center">
                <ul className="steps w-[90%] my-4 text-[12px]">
                  <li className="step step-info">Step 01</li>
                  <li className="step ">Step 02</li>
                  <li className="step">Step 03</li>
                </ul>
              </div>
              <div className="flex 2xl:mt-[30px] xl:mt-[25px] lg:mt-[20px] mt-[15px] ">
              
                <div className=" bg-[#F5F6FF] 2xl:w-[339px] h-[400px] 2xl:h-[700px] xl:w-[260px]  md:w-[200px] w-[100px] hidden md:block">
                  <ul className="steps steps-vertical md:w-[300px] w-[100px] xl:w-[700px] md:p-5 p-2 lg:text-[12px] 2xl:text-[18px] lg:leading-[18px] text-[12px] ">
                    <li className="step step-info">
                      <p>Step 01</p>
                      {/* <h1>Personal Details</h1> */}
                    </li>
                    <li className="step step-[#1172BA]">
                      <p>Step 02</p>
                      {/* <h1>Academic Details</h1> */}
                    </li>
                    <li className="step">
                      <p>Step 03</p>
                      {/* <h1>Preferences</h1> */}
                    </li>
                  </ul>
                </div>

                <div className="2xl:p-10 xl:p-7 p-5 2xl:mx-10 mx-auto">
                  <div className="flex flex-wrap lg:gap-7 gap-3 sm:gap-5">
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Name as per NEET score card*
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">Address</label> <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">State</label> <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">District</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">Email ID</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Parent’s Phone Number
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                  </div>
                  <div className=" mt-7 xl:mt-10 2xl:mt-14">
                    <a href="/user2nd/academic-detail">
                      <button
                        className="mb-0 bg-[#4F9ED9] rounded-[4px] 2xl:w-[147px] 2xl:h-[48px] xl:w-[100px] xl:h-[35px] w-[90px] h-[28px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[12px] lg:leading-[12px] text-[12px] leading-[12px]
                    "
                      >
                        next
                      </button>
                    </a>
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

export default page;
