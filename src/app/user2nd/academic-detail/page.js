import React from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";

const AcademicDetail = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="">
            <UserNavbar />
            <div className=" px-[15px] sm:px-[30px]">
              <div className="md:hidden block flex justify-center">
                <ul className="steps w-[90%] my-4 text-[12px]">
                  <li className="step step-info">Step 01</li>
                  <li className="step ">Step 02</li>
                  <li className="step">Step 03</li>
                </ul>
              </div>
              <div className="flex 2xl:mt-[30px] xl:mt-[25px] lg:mt-[20px] mt-[15px]">
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
                      <label className="user-input-label">NEET Score</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        NEET All India Rank*
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">State SML*</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        12th Physics Marks
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        12th Chemistry Marks
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        12th Biology Marks
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        12th English Marks
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Name and address of the college (12th)*
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        UG Domicile state*
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Preferred admission in*
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Annual fees budget*
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Are you open for other state admission*
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
                    <a href="/user2nd/preference">
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

export default AcademicDetail;
