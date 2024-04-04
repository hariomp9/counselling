import React from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";

const Personal = () => {
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
                  <h1 className="inter font-[600] text-[#1172BA] 2xl:text-[20px] 2xl:leading-[45px] xl:text-[15px] xl:leading-[35px] lg:text-[12px] lg:leading-[24px] sm:leading-[16px] text-[12px] leading-[11px]">
                    Personal
                  </h1>
                </a>
                <a href="/user2nd/academic">
                  <h1 className="inter font-[600] text-[#777777] 2xl:text-[20px] 2xl:leading-[45px] xl:text-[15px] xl:leading-[35px] lg:text-[12px] lg:leading-[24px] sm:leading-[16px] text-[12px] leading-[11px]">
                    Academic
                  </h1>
                </a>
                <h1 className="inter font-[600] text-[#777777] 2xl:text-[20px] 2xl:leading-[45px] xl:text-[15px] xl:leading-[35px] lg:text-[12px] lg:leading-[24px] sm:leading-[16px] text-[12px] leading-[11px]">
                  Documentations
                </h1>
              </div>
            </div>
            <div className="2xl:px-[35px] xl:px-[20px] lg:px-[15px] sm:px-3 px-3 my-5">
              <h1 className="userdetailHead">Your Profile</h1>
              <div className="flex flex-wrap 2xl:gap-[35px] xl:gap-[22px] lg:gap-[18px] gap-4">
                <div className="w-[48%] md:w-auto h-auto input_div">
                  <label className="user-input-label">Name </label> <br />
                  <input
                    type="text"
                    placeholder="Enter detail"
                    className="user-input"
                  />
                </div>{" "}
                <div className="w-[48%] md:w-auto h-auto input_div">
                  <label className="user-input-label">Email Id</label> <br />
                  <input
                    type="text"
                    placeholder="Enter detail"
                    className="user-input"
                  />
                </div>{" "}
                <div className="w-[48%] md:w-auto h-auto input_div">
                  <label className="user-input-label">Phone Number</label>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Enter detail"
                    className="user-input"
                  />
                </div>{" "}
                <div className="w-[48%] md:w-auto h-auto input_div">
                  <label className="user-input-label">Address</label> <br />
                  <input
                    type="text"
                    placeholder="Enter detail"
                    className="user-input"
                  />
                </div>{" "}
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
                </div>{" "}
                <div className="w-[48%] md:w-auto h-auto input_div">
                  <label className="user-input-label">
                    Name as per NEET score card*
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Enter detail"
                    className="user-input"
                  />
                </div>{" "}
                <div className="w-[48%] md:w-auto h-auto input_div">
                  <label className="user-input-label">State*</label> <br />
                  <input
                    type="text"
                    placeholder="Enter detail"
                    className="user-input"
                  />
                </div>
                <div className="w-[48%] md:w-auto h-auto input_div">
                  <label className="user-input-label">District*</label> <br />
                  <input
                    type="text"
                    placeholder="Enter detail"
                    className="user-input"
                  />
                </div>
              </div>
              <div className="lg:my-[20px] xl:my-[50px] rounded-[5px] bg-[#F5F6FF] 2xl:h-[176px] xl:h-[130px] lg:h-[110px] p-5 lg:p-0 flex items-center lg:px-[20px] px-[20px] xl:px-[30px] my-5">
                <div>
                  <h1 className="userdetailHead">Change Password</h1>
                  <div className="flex flex-wrap 2xl:gap-[35px] xl:gap-[25px] lg:gap-[20px] gap-[20px]">
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">Old Password*</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">New Password*</label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter detail"
                        className="user-input"
                      />
                    </div>
                    <div className="w-[48%] md:w-auto h-auto input_div">
                      <label className="user-input-label">
                        Re-enter Password*
                      </label>{" "}
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
              <div className=" mt-7 xl:mt-10 2xl:mt-14">
                <a href="/user2nd/preference">
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

export default Personal;
