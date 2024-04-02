import React from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";

const Preference = () => {
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
                <div>
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

                <div className="mt-3 xl:mt-4 2xl:mt-5">
                  <h1 className="userdetailHead">State Preference</h1>
                  <div>
                    <label className="inter font-[300] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] mb-1 xl:mb-2">
                      Select first state choice*
                    </label>{" "}
                    <br />
                    <select className="outline-none bg-white px-3 border rounded-[5px] 2xl:w-[263px] 2xl:h-[48px] xl:w-[200px] xl:h-[35px] w-[170px] h-[28px] 2xl:text-[14px] 2xl:leading-[17px] xl:text-[11px] xl:leading-[15px] text-[9px] leading-[12px] 2xl:mr-10 xl:mr-7 mr-5">
                      <option>Select</option>
                      <option>MP</option>
                      <option>UP</option>
                    </select>
                    <a href="/user2nd/academic-detail">
                      <button
                        className="mb-0 bg-[#4F9ED9] rounded-[4px] 2xl:w-[142px] 2xl:h-[48px] xl:w-[95px] xl:h-[35px] w-[80px] h-[28px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px]
                    "
                      >
                        Add State
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex 2xl:gap-4 mt-3 xl:mt-4 2xl:mt-5">
                  <div>
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
                  <div>
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
                  <div>
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
                  <div className="flex flex-col justify-end">
                    <p className="text-[#FF0000] 2xl:text-[12px] 2xl:leading-[17px] xl:text-[10px] xl:leading-[15px] text-[9px] leading-[12px]  2xl:w-[306px] xl:w-[250px] ">If the counseling fees is paid – show the document list as below with a comment – You can share below documents</p>
                  </div>
                </div>
                <div className=" mt-7 xl:mt-10 2xl:mt-14">
                  <a href="/user2nd/user-profile">
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

export default Preference;
