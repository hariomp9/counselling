import React from "react";
import Image from "next/image";
import add from "../../../../public/images/add.svg";
import arrow from "../../assets/arrow.svg";

const AddmissionPreference = () => {
  const courses = [
    { id: "1", courseName: "MBBS" },
    { id: "2", courseName: "BDS" },
    { id: "3", courseName: "BAMS" },
    { id: "4", courseName: "BHMS" },
    { id: "5", courseName: "BUMS" },
    { id: "6", courseName: "BPTh" },
    { id: "7", courseName: "BOTH" },
    { id: "8", courseName: "BASLP" },
    { id: "9", courseName: "BP & O" },
    { id: "10", courseName: "BSc,Nursing" },
  ];
  const addmissionpreference = [
    { id: "1", collegeName: "Government College" },
    { id: "2", collegeName: "Private/Management" },
    { id: "3", collegeName: "Deemed University" },
  ];
  return (
    <section>
      <div className="main_div mx-auto">
        <div className="">
          {/* =============01============ */}
          <div>
            <div className="flex gap-2">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[24px] xl:leading-[20px] lg:leading-[16px] ">
                Course Preferences{" "}
              </h1>
              <p className="inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[24px] xl:leading-[20px] lg:leading-[16px]">
                (Click on the courses to select/deselect. You can select
                multiple courses)
              </p>
            </div>
            <div className="flex flex-wrap 2xl:w-[510px] xl:w-[370px] w-[320px] 2xl:gap-[25px] xl:gap-[17px] gap-[12px] 2xl:my-[25px] xl:my-[20px] my-[15px]">
              {courses.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-[3px] bg-white  2xl:px-[15px] xl:px-[8px] lg:px-[6px] sm:px-[] px-[]
                2xl:py-[8px] xl:py-[5px] lg:py-[3px] sm:py-[] py-[] "
                >
                  <h1 className="inter font-[400] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[12px] text-[12px]">
                    {item.courseName}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {/* =============02============ */}

          <div className="2xl:my-[30px] xl:my-[20px] my-[15px]">
            <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[40px] xl:leading-[30px] lg:leading-[25px]">
              Admission Preference
            </h1>
            <div className="flex  2xl:gap-[25px] xl:gap-[25px] gap-[30px] 2xl:my-[25px] xl:my-[20px] my-[10px]">
              {addmissionpreference.map((item, index) => (
                <div
                  key={index}
                  className=" flex items-center 2xl:gap-2 gap-1 "
                >
                  <input
                    type="checkbox"
                    className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] sm:w-[] w-[] "
                  />
                  <h1 className="inter font-[400] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[13px] text-[12px]">
                    {item.collegeName}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {/* =============03============ */}

          <div>
            <div className="2xl:my-[30px] xl:my-[20px] my-[15px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                NRI Quota Preference
              </h1>
            </div>
            <div className="flex gap-[40px] xl:my-[30px] inter font-[400] 2xl:text-[14px] xl:text-[12px] text-[10px]">
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />{" "}
                Yes
              </div>
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />
                No
              </div>
            </div>
            <div className="flex xl:gap-[35px] gap-[20px]  xl:my-[30px] my-[20px]">
              <div>
                <label className="pre_input_lable">
                  Relationship with Sponser
                </label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div>
                <label className="pre_input_lable">Sponsors country</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                />
              </div>
              <div>
                <label className="pre_input_lable">
                  Sponsors country state
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
          {/* =============04============ */}

          <div>
            <div className="2xl:my-[30px] xl:my-[20px] my-[15px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                Interested in Other State admissions
              </h1>
            </div>
            <div className="flex gap-[40px] xl:mt-[30px] inter font-[400] 2xl:text-[14px] xl:text-[12px] text-[10px]">
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />{" "}
                Yes
              </div>
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />
                No
              </div>
            </div>
            <div className="flex gap-[35px] mb-[30px]">
              <div className=" ">
                <div className="flex items-center gap-[45px]">
                  <label className="pre_input_lable2">Preference No. 1</label>
                  <input
                    type="text"
                    className="pre_input"
                    placeholder="Enter detail"
                  />
                </div>
                <div className="flex items-center gap-[45px]">
                  <label className="pre_input_lable2">Preference No. 2</label>
                  <input
                    type="text"
                    className="pre_input"
                    placeholder="Enter detail"
                  />
                </div>
              </div>
              <div className=" relative ">
                <button className="flex justify-center items-center gap-2 absolute inter font-[700] bottom-0 2xl:my-[10px] xl:my-[8px] bg-[#4F9ED9] text-white 2xl:w-[143px] xl:w-[100px] w-[80px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px] lg:my-[4px]">
                  <Image
                    src={add}
                    className="2xl:w-[15px] 2xl:h-[15px] xl:w-[12px] xl:h-[12px] w-[11px] h-[11px] rounded-full"
                  />
                  Add State
                </button>
              </div>
            </div>
          </div>

          <hr />
          {/* =============05============ */}

          <div>
            <div className="2xl:my-[30px] xl:my-[20px] my-[15px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                Annual Medical Course Budget
              </h1>
            </div>
            <div className="flex gap-[40px] 2xl:my-[30px] xl:my-[20px] my-[15px]">
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
      </div>
    </section>
  );
};

export default AddmissionPreference;
