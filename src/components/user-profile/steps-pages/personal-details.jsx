import React from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";

const PersonalDetails = () => {
  return (
    <>
      {" "}
      <section>
        <div className="main_div mx-auto">
          <div>
            <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
              Student’s Address
            </h1>
            <div className="flex flex-wrap xl:gap-[35px] gap-[20px]  xl:my-[30px] my-[20px]">
              <div className="flex flex-col">
                <label className="pre_input_lable">House No/Road</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">Area</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">City</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">District</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>{" "}
              <div className="flex flex-col">
                <label className="pre_input_lable">State</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>{" "}
              <div className="flex flex-col">
                <label className="pre_input_lable">Pin Code</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="2xl:my-[20px] xl:my-[15px] my-[10px]">
            <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
              Students Details
            </h1>
            <div className="flex flex-wrap xl:gap-[35px] gap-[20px]  xl:my-[30px] my-[20px]">
              <div className="flex flex-col">
                <label className="pre_input_lable">Gender</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">Students email Id</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">
                  Students alternate mobile number
                </label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="2xl:my-[20px] xl:my-[15px] my-[10px]">
            <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
              Parents Details
            </h1>
            <div className="flex flex-wrap xl:gap-[35px] gap-[20px]  xl:my-[30px] my-[20px]">
              <div className="flex flex-col">
                <label className="pre_input_lable">Parents Full Name</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">Parents email Id</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">Parents Phone Number</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div className="flex flex-col">
                <label className="pre_input_lable">Parents Profession</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
            </div>
            <div className="flex  2xl:gap-[25px] xl:gap-[25px] gap-[30px] 2xl:my-[25px] xl:my-[20px] my-[10px]">
              <p className="pre_input_lable">Is your parent</p>
              <div className=" flex items-center 2xl:gap-2 gap-1 ">
                <input
                  type="checkbox"
                  className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] sm:w-[] w-[] "
                />
                <h1 className="inter font-[400] pre_input_lable text-[#000000]">
                  Govt of Maharashtra Employee?
                </h1>
              </div>
              <div className=" flex items-center 2xl:gap-2 gap-1 ">
                <input
                  type="checkbox"
                  className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] sm:w-[] w-[] "
                />
                <h1 className="inter font-[400] pre_input_lable text-[#000000]">
                  Govt of India Employee?
                </h1>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="pre_input_lable">Family Annual Income</label>
              <input
                type="text"
                className="pre_input"
                placeholder="Enter detail"
              />
            </div>
          </div>
          <div className="flex xl:gap-[30px] gap-[20px] 2xl:mb-[60px] xl:mb-[40px]">
            <div className="  2xl:my-[30px] xl:my-[20px]">
              <button className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                <Image
                  src={arrow}
                  className="rotate-180 2xl:w-[14px] 2xl:h-[10px] rounded-full"
                />
                Back
              </button>
            </div>
            <div className="2xl:my-[30px] xl:my-[20px]">
              <button className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                Next
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

export default PersonalDetails;
