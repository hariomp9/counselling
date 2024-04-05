
import React from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";

const Academic = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />
            <div className="bg-[#F8F8F8] 2xl:h-[86px]  xl:h-[70px] lg:h-[50px] h-[50px] flex flex-col justify-end">
              <div className="flex 2xl:gap-[75px] xl:gap-[45px] lg:gap-[75px] gap-[50px] 2xl:px-[35px] xl:px-[20px] lg:px-[15px] px-[15px] pb-[10px] lg:pb-[10px] xl:pb-[15px] 2xl:pb-[20px] ">
                <a href="/user2nd/personal">
                  <h1 className="inter font-[600] text-[#777777] 2xl:text-[20px] 2xl:leading-[45px] xl:text-[15px] xl:leading-[35px] lg:text-[12px] lg:leading-[24px] sm:leading-[16px] text-[12px] leading-[11px]">
                    Personal
                  </h1>
                </a>
                <a href="/user2nd/academic">
                  <h1 className="inter font-[600] text-[#1172BA] 2xl:text-[20px] 2xl:leading-[45px] xl:text-[15px] xl:leading-[35px] lg:text-[12px] lg:leading-[24px] sm:leading-[16px] text-[12px] leading-[11px]">
                    Academic
                  </h1>
                </a>
                <h1 className="inter font-[600] text-[#777777] 2xl:text-[20px] 2xl:leading-[45px] xl:text-[15px] xl:leading-[35px] lg:text-[12px] lg:leading-[24px] sm:leading-[16px] text-[12px] leading-[11px]">
                  Documentations
                </h1>
              </div>
            </div>
            <div className="2xl:px-[35px] xl:px-[20px] lg:px-[15px] sm:px-3 px-3 my-5">
              <div className="lg:my-[20px] xl:my-[50px] my-5 rounded-[5px] flex items-center">
                <div>
                  <h1 className="userdetailHead">NEET Score Card</h1>
                  <div className="flex flex-wrap 2xl:gap-[35px] gap-4 xl:gap-[22px] lg:gap-[18px]">
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">NEET Score</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
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
                  </div>
                </div>
              </div>
              <div className="lg:my-[20px] xl:my-[50px] my-5 rounded-[5px] bg-[#F5F6FF] 2xl:h-[176px] xl:h-[130px] lg:h-[120px] flex items-center p-5 lg:p-0 px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                <div>
                  <h1 className="userdetailHead">12th Marks</h1>
                  <div className="flex flex-wrap 2xl:gap-[35px] xl:gap-[22px] lg:gap-[18px] gap-4">
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">Physics*</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">Chemistry*</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">Biology*</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">English*</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5 lg:my-0">
                <h1 className="userdetailHead">Course Preferences</h1>
                <div className="flex flex-wrap 2xl:gap-7 xl:gap-4 gap-3 xl:my-2 my-1 ">
                  <button className="userdetailBtn">MBBS</button>
                  <button className="userdetailBtn">BDS</button>
                  <button className="userdetailBtn">BAMS</button>
                  <button className="userdetailBtn">BHMS</button>
                  <button className="userdetailBtn">BUMS</button>
                  <button className="userdetailBtn">BPTh</button>
                  <button className="userdetailBtn">BOTH</button>
                  <button className="userdetailBtn">BASLP</button>
                  <button className="userdetailBtn">BP & O</button>
                  <button className="border-[1px] rounded-[3px] hover:border-[#1172BA] hover:text-[#1172BA] 2xl:w-[103px] xl:w-[80px] xl:h-[25px]  2xl:h-[32px] w-[65px] h-[22px] inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px]">
                    BSc, Nursing
                  </button>
                </div>
              </div>
              <div className="2xl:mt-[50px] xl:mt-[30px] rounded-[5px] bg-[#F5F6FF] 2xl:h-[176px] xl:h-[175px] lg:h-[200px] flex items-center p-5 lg:p-0 px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] my-5">
                <div>
                  <h1 className="userdetailHead">College Details</h1>
                  <div className="flex flex-wrap 2xl:gap-[35px] xl:gap-[22px] lg:gap-[18px] gap-4">
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Name and address of the college (12th)**
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
                    <div className=" w-[48%] md:w-auto h-auto input_div">
                      <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                        Preferred admission in*
                      </label>{" "}
                      <br />
                      <select className="user-input">
                        <option>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
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
                    <div className=" w-[48%] md:w-auto h-auto input_div">
                      <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                        Are you open for other state admission*
                      </label>{" "}
                      <br />
                      <select className="user-input">
                        <option>Yes / No</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5 lg:my-[35px]">
                <h1 className="userdetailHead">State Preference</h1>
                <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                  Select first state choice*
                </label>{" "}
                <br />
                <select className="outline-none bg-white px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] 2xl:mr-10 xl:mr-7 mr-5 my-2 lg:my-0">
                  <option>Select</option>
                  <option>MP</option>
                  <option>UP</option>
                </select>
                <a href="/user2nd/academic-detail">
                  <button
                    className="mb-0 bg-[#4F9ED9] rounded-[4px] 2xl:w-[142px] 2xl:h-[48px] xl:w-[95px] xl:h-[35px] w-[80px] h-[28px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] text-[10px] lg:leading-[12px] my-2 lg:my-0
                    "
                  >
                    Add State
                  </button>
                </a>
              </div>
              <div className="2xl:mt-[50px] xl:mt-[30px] rounded-[5px] bg-[#F5F6FF] 2xl:h-[190px] xl:h-[150px] lg:h-[140px] flex items-center px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                <div className="flex flex-wrap 2xl:gap-4 mt-3 xl:mt-4 2xl:mt-5">
                  <div className="my-2 lg:my-0">
                    <h1 className="userdetailHead">NRI Quota</h1>
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Are you willing for NRI quota seat*
                    </label>{" "}
                    <br />
                    <select className="outline-none bg-white px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] 2xl:mr-10 xl:mr-7 mr-5">
                      <option>Yes / No</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="my-2 lg:my-0">
                    <h1 className="userdetailHead">Free counselling session</h1>
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Have you attended free session?
                    </label>{" "}
                    <br />
                    <select className="outline-none bg-white px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] 2xl:mr-10 xl:mr-7 mr-5">
                      <option>Yes / No</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="my-2 lg:my-0">
                    <h1 className="userdetailHead">Counselling Fees paid</h1>
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Counselling Fees paid - Full / Partial
                    </label>{" "}
                    <br />
                    <select className="outline-none bg-white px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] 2xl:mr-10 xl:mr-7 mr-5">
                      <option>Yes / No</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="text-[#FF0000] 2xl:text-[12px] 2xl:leading-[17px] xl:text-[10px] xl:leading-[15px] text-[9px] leading-[12px]  2xl:w-[306px] xl:w-[180px] my-2 lg:my-1">
                      If the counseling fees is paid – show the document list as
                      below with a comment – You can share below documents
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mt-7 xl:mt-10 2xl:my-10">
                <a href="/user2nd/user-profile">
                  <button
                    className="mb-0 bg-[#4F9ED9] rounded-[4px] 2xl:w-[147px] 2xl:h-[48px] xl:w-[100px] xl:h-[35px] w-[90px] h-[28px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[12px] lg:leading-[12px] text-[12px] leading-[12px]
                    "
                  >
                    Next
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academic;

