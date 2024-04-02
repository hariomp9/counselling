import React from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";

const page = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-11/12">
            <UserNavbar />
            <div className="flex">
              <div className=" bg-[#F5F6FF] 2xl:w-[339px] h-[700px] xl:w-[260px] w-[200px] ">
                <ul className="steps steps-vertical w-[200px] p-5">
                  <li className="step step-info ">
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
              <div className="2xl:p-10 xl:p-7 p-5  2xl:mx-10">
                <div className="flex flex-wrap gap-7">
                  <div className="h-auto">
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Name as per NEET score card*
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="outline-none px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px]"
                    />
                  </div>
                  <div className="h-auto">
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Address
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Enter detail"
                      className="outline-none px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px]"
                    />
                  </div>
                  <div className="h-auto">
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      State
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Enter detail"
                      className="outline-none px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px]"
                    />
                  </div>
                  <div className="h-auto">
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      District
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Enter detail"
                      className="outline-none px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px]"
                    />
                  </div>
                  <div className="h-auto">
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Email ID
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Enter detail"
                      className="outline-none px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px]"
                    />
                  </div>
                  <div className="h-auto">
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Parent’s Phone Number
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Enter detail"
                      className="outline-none px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px]"
                    />
                  </div>
                  
                </div>
                <div className=" mt-7 xl:mt-10 2xl:mt-14">
                  <a href="/user2nd/academic-detail">
                    <button
                      className="mb-0 bg-[#4F9ED9] rounded-[4px] 2xl:w-[147px] 2xl:h-[48px] xl:w-[100px] xl:h-[35px] w-[90px] h-[28px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px]
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
      </section>
    </>
  );
};

export default page;
