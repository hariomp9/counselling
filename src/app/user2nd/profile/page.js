import React from "react";
import Image from "next/image";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";
import userImg from "../assets/userImg.png";
import Stepper from "@/components/user-profile/Stepper";

const UserProfile = () => {
  return (
    <>
    <Stepper/>
      {/* <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />

            <div className="w-full 2xl:p-10 xl:p-6 lg:p-4 p-4">
              <div className="2xl:w-[1172px] 2xl:h-[230px] xl:h-[180px] border-[1px] xl:w-[70%] lg:w-[70%] lg:h-[150px]   rounded-[10px] 2xl:p-4 xl:p-3 lg:p-2 p-2">
                <div className="flex justify-between items-center 2xl:my-1 ">
                  <div className="flex justify-between">
                    <h1 className="userdetailHead">Your Profile</h1>
                  </div>
                  <div>
                    <button
                      className="bg-[#4F9ED9] rounded-[4px] 2xl:w-[90px] 2xl:h-[35px] xl:w-[50px] xl:h-[25px] lg:w-[40px] lg:h-[22px] w-[40px] h-[20px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[9px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px]
                    "
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row md:justify-between items-center">
                  <div>
                    <Image
                      src={userImg}
                      className="2xl:w-[74px] 2xl:h-[74px] xl:w-[45px] xl:h-[45px] w-[45px] h-[45px] mx-auto"
                    />
                    <h1 className="inter font-[600] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[12px] xl:leading-[16px] text-[10px] my-1 2xl:my-2">
                      Mayank Patidar
                    </h1>
                  </div>

                  <div>
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mb-4">
                      <p>+91 9874561230</p>
                      <p>patidar.mayank12@gmail.com</p>
                    </div>
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mt-4">
                      <p>Password</p>
                      <p>**********</p>
                    </div>
                  </div>

                  <div className="flex justify-around flex-row lg:flex-col lg:w-auto w-1/2">
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mb-4">
                      <p>Gender</p>
                      <p className="text-[#000]">Male</p>
                    </div>
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] lg:mt-4">
                      <p>Quota</p>
                      <p className="text-[#000]">OBC</p>
                    </div>
                  </div>
                  <div className="lg:w-[160px] xl:w-[200px] 2xl:w-[271px]">
                    <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] lg:mb-4">
                      <p>Address</p>
                      <p className="text-[#000]">
                        1134, vidur nagar, Bangali square, indore, madhya
                        pradesh, india
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mt-4">
                        <p>Parent’s Name</p>
                        <p className="text-[#000]">Rajesh Patidar</p>
                      </div>{" "}
                      <div className="text-[#66696F] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mt-4">
                        <p>Parent’s Phone Number</p>
                        <p className="text-[#000]">+91 7894563218</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <a href="/user2nd/userDetail-CP">
                      <button
                        className="mb-0 bg-[#4F9ED9] rounded-[4px] 2xl:w-[175px] 2xl:h-[35px] xl:w-[100px] xl:h-[25px] lg:w-[90px] lg:h-[22px] w-[120px] h-[22px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[9px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px] mb-5 lg:mb-0
                    "
                      >
                        Complete Your Profile
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="2xl:w-[1172px] xl:w-[70%] lg:w-[70%] 2xl:h-[451px] border-[1px] rounded-[10px] 2xl:my-10 xl:my-7 lg:my-5 my-5 ">
                <div className="bg-[#F5F6FF] flex justify-between items-center my-1 2xl:px-4 2xl:h-[66px] xl:h-[40px] h-[40px] xl:px-3 lg:px-2 px-2">
                  <div className="flex justify-between">
                    <h1 className="inter font-[700] 2xl:text-[20px] 2xl:leading-[40px] xl:text-[14px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] leading-[16px] text-[12px]">
                      Subscription Details
                    </h1>
                  </div>
                  <div>
                    <button
                      className="bg-[#4F9ED9] rounded-[4px] 2xl:w-[120px] 2xl:h-[35px] xl:w-[70px] xl:h-[25px] lg:w-[70px] lg:h-[22px] h-[22px] w-[80px]
                    inter font-[700] text-white 2xl:text-[14px] 2xl:leading-[20px] xl:text-[9px] xl:leading-[16px] lg:text-[8px] lg:leading-[12px] text-[10px] leading-[16px]
                    "
                    >
                      Upgrade Plan
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto mg:w-2/3 lg:w-1/2 2xl:p-4">
                  <table className="table">
                    <thead>
                      <tr className="inter font-[500] text-[#6F6F6F] 2xl:text-[13px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[18px] lg:text-[9px] lg:leading-[18px]">
                        <th>Current Plan</th>
                        <th>Start date</th>
                        <th>End date</th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr>
                        <td className="inter font-[700] text-[#0071BC] 2xl:text-[18px] 2xl:leading-[40px] xl:text-[11px] xl:leading-[25px] lg:text-[8px] lg:leading-[14px] text-[12px] leading-[16px]">
                          Starter Plan{" "}
                          <span className="text-[#000000] ">Free</span>
                        </td>
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[11px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] text-[12px]">
                          March 20th 2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#F5F6FF] flex justify-between items-center my-1 2xl:px-4 xl:px-3 lg:px-2 px-2 2xl:h-[66px] xl:h-[40px] h-[40px] 2xl:mt-10">
                  <div className="flex justify-between">
                    <h1 className="inter font-[700] 2xl:text-[20px] 2xl:leading-[40px] xl:text-[14px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] text-[12px] leading-[16px]">
                      Subscription Details
                    </h1>
                  </div>
                </div>
                <div className="overflow-x-auto 2xl:p-4 ">
                  <table className="table">
                    <thead>
                      <tr className="inter font-[500] text-[#6F6F6F] 2xl:text-[13px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] lg:leading-[18px]">
                        <th>Date</th>
                        <th>Plan</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr className="border-none">
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[10px] lg:leading-[18px] text-[12px] ">
                          20th March 2024
                        </td>
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[12px] lg:leading-[16px] 2xl:w-[317px] xl:w-[250px]">
                          Starter Plan Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry.
                        </td>
                        <td className="inter font-[400] text-[#000000] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[12px] lg:leading-[16px]">
                          Trial
                        </td>
                        <td>
                          <button className="text-[#1172BA] bg-[#DDF0FE] rounded-[3px] 2xl:w-[96px] 2xl:h-[35px] xl:w-[60px] xl:h-[25px] w-[50px] h-[22px] inter font-[400] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[10px] lg:leading-[16px]">
                            Ongoing
                          </button>
                        </td>
                        <td className="">
                          <button className="text-[#000000] border-[1px] border-black  rounded-[3px] 2xl:w-[107px] 2xl:h-[35px] xl:w-[70px] xl:h-[25px] w-[60px] h-[22px] inter font-[400] 2xl:text-[14px] 2xl:leading-[15px] xl:text-[10px] xl:leading-[24px] lg:text-[9px] text-[10px] lg:leading-[16px]">
                            Download
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default UserProfile;
