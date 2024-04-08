"use client";
import React, { useState } from "react";
import Image from "next/image";
import one from "./assets/one.svg";
import two from "./assets/two.svg";
import three from "./assets/three.svg";
import four from "./assets/four.svg";
import Counsellor from "./assets/counsellor.svg";
import admin from "./assets/admin.svg";
import Viewer from "./assets/viewer.svg";
import SuperNavbar from "./super-navbar";
import SuperSidebar from "./super-sidebar";
import add from "../../../public//images/add.svg";
import first from "../../../public/images/1st.png";
import second from "../../../public/images/2nd.png";
import third from "../../../public/images/3rd.png";
import forth from "../../../public/images/4rth.png";
import five from "../../../public/images/5th.png";
import starterplan from "./assets/starterplan.svg";
import basicplan from "./assets/basicplan.svg";
import proplan from "./assets/proplan.svg";
import advanceplan from "./assets/advanceplan.svg";
const data = [
  {
    id: 1,
    CounsellingType: "New Title-1",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    image: first,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 2,
    CounsellingType: "New Title-2",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    image: second,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 3,
    CounsellingType: "New Title-3",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    image: third,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 4,
    CounsellingType: "Counselling Type-4",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    image: forth,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 5,
    CounsellingType: "Counselling Type-5",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    image: five,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
];
const SuperHome = () => {
  return (
    <>
      <section>
        <div className="flex ">
          <SuperSidebar />
          <div className="w-full">
            <SuperNavbar />
            <div className="flex justify-between 2xl:px-16 px-5">
              <div className="flex">
                <div className="relative ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3 lg:h-3 sm:w-4 sm:h-4 w-3 h-3 absolute 2xl:left-2 2xl:top-2 xl:left-2 xl:top-[7px] lg:left-1 lg:top-[10px] sm:left-[18px] sm:top-[10px] left-[18px] top-[7px] text-[#A8A8A8]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <input
                    type="search"
                    className="2xl:p-2 2xl:px-10 border rounded-[3px]
                  xl:p-1 xl:px-7  lg:p-2 lg:px-5 2xl:text-[16px] xl:text-[13px] lg:text-[10px] sm:text-[12px] sm:p-[8px] sm:px-7 text-[12px] p-[3px] px-5 w-2/3 sm:w-auto "
                    placeholder="Search"
                  />
                </div>
                <div className="relative hidden sm:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3  lg:h-3  w-5 h-5  absolute lg:right-3 lg:top-[10px] sm:right-3 sm:top-[10px] text-[#A8A8A8]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>

                  <input
                    type="search"
                    className="2xl:py-2  2xl:p-2 border rounded-[3px] 2xl:ml-5 w-[100px]
                  xl:p-1 xl:px-3 xl:ml-3 lg:p-2 lg:px-3 lg:ml-3 2xl:text-[16px] xl:text-[13px] lg:text-[10px] sm:text-[12px] sm:ml-3 sm:p-[8px] sm:px-5"
                    placeholder="Filters"
                  />
                </div>
              </div>
              <div>
                <button className="flex 2xl:gap-2 xl:gap-2 gap-1 justify-center items-center bg-[#5793CE] text-white 2xl:w-[152px] 2xl:h-[35px] xl:w-[110px] xl:h-[28px] h-[25px] w-[110px] rounded-[4px] 2xl:text-[14px] xl:text-[10px] text-[10px]">
                  <Image
                    src={add}
                    className="rounded-full 2xl:w-[15px] xl:w-[10px] w-3"
                  />
                  Create Profile
                </button>
              </div>
            </div>
            <div className="flex justify-around h-screen my-10 2xl:my-16">
              <div className="2xl:w-[1151px] xl:w-[850px] w-[680px]">
                <div className=" bg-[#F5F6FF]  2xl:h-[198px] xl:h-[150px] h-[130px] 2xl:p-[30px] xl:p-[20px] p-[15px]  ">
                  <h1 className="super_head">NEET UG</h1>
                  <div className="flex 2xl:mt-[25px] 2xl:gap-[30px] xl:mt-[15px] xl:gap-[25px] gap-[15px] ">
                    <div className="super_box">
                      <div className="flex">
                        <Image
                          src={one}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Weekly Signup
                          </p>
                          <p className="legend font-[500] super_box_no">561</p>
                        </div>
                      </div>
                    </div>
                    <div className="super_box">
                      <div className="flex ">
                        <Image
                          src={two}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex  ">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Monthly Signup
                          </p>
                          <p className="legend font-[500] super_box_no">2548</p>
                        </div>
                      </div>
                    </div>
                    <div className="super_box">
                      <div className="flex ">
                        <Image
                          src={three}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex  ">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Total Signup
                          </p>
                          <p className="legend font-[500] super_box_no">2548</p>
                        </div>
                      </div>
                    </div>
                    <div className="super_box">
                      <div className="flex ">
                        <Image
                          src={four}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Total Student Signup
                          </p>
                          <p className="legend font-[500] super_box_no">
                            2,13,513
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ========================Two ======================= */}

                <div className="flex 2xl:my-[35px] xl:my-8 my-5 xl:gap-5 gap-3  2xl:gap-[35px]">
                  <div className="super_box_s bg-white">
                    <h1 className="super_head 2xl:mb-[25px] xl:mb-[10px]">
                      Counsellors
                    </h1>
                    <div className="super_box">
                      <div className="flex">
                        <Image
                          src={Counsellor}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div>
                        <p className="inter font-[400] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] lg:text-[10px] text-[#000000]">
                          Total Counsellors
                        </p>
                        <p className="legend font-[500] super_box_no">312</p>
                      </div>
                    </div>
                  </div>
                  <div className="super_box_s bg-white">
                    <h1 className="super_head 2xl:mb-[25px] xl:mb-[10px]">
                      Admin
                    </h1>

                    <div className="super_box">
                      <div className="flex">
                        <Image
                          src={admin}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div>
                        <p className="inter font-[400] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] lg:text-[10px] text-[#000000]">
                          Total Admin
                        </p>
                        <p className="legend font-[500] super_box_no">12</p>
                      </div>
                    </div>
                  </div>
                  <div className="super_box_s bg-white">
                    <h1 className="super_head 2xl:mb-[25px] xl:mb-[10px]">
                      Viewers
                    </h1>
                    <div className="super_box">
                      <div className="flex">
                        <Image
                          src={Viewer}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div>
                        <p className="inter font-[400] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] lg:text-[10px] text-[#000000]">
                          Total Viewers
                        </p>
                        <p className="legend font-[500] super_box_no">5491</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===============table============= */}
                <div className=" 2xl:w-[1151px]  p-5 rounded-[10px]">
                  <div className="bg-[#F5F6FF]">
                    <h1 className="super_head 2xl:p-5 xl:p-3">News Updates</h1>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table table_h bg-[#F5F6FF] sm:w-[110%] lg:w-full ">
                      <thead className="bg-white">
                        <tr>
                          <th className=" tablerow">Title</th>
                          <th className=" tablerow">Details</th>
                          <th className=" tablerow">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td className="tablerow">{item.CounsellingType}</td>
                            <td className="tablerow 2xl:w-[533px] xl:w-[370px] lg:w-[240px] sm:w-[280px] table-para">
                              {item.Details}
                            </td>
                            <td className=" tablerow flex items-center 2xl:gap-5 gap-3">
                              <Image
                                src={item.image}
                                alt={item.name}
                                className="2xl:w-[94px] 2xl:h-[75px] xl:w-[60px] lg:w-[60px] w-[60px] h-auto rounded-[3px]"
                              />
                              <p className="tablerow-link text-[#1172BA] 2xl:w-[200px] xl:w-[120px] w-[120px]">
                                Click Here
                              </p>
                            </td>
                          </tr>
                        ))}
                        {/* row 2 */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="2xl:w-[542px] xl:w-[340px] w-[220px] ">
                <div className="flex justify-between items-center p-5 w-full 2xl:h-[79px] xl:h-[60px] bg-[#F5F6FF]">
                  <h1 className="super_head ">Total Revenue</h1>
                </div>
                <div className="my-[30px] w-full bg-[#F5F6FF] 2xl:p-[35px] xl:p-[20px] p-[10px]">
                  <div>
                    <h1 className="super_head 2xl:mb-[25px] ">Subscription</h1>
                  </div>
                  <div className="flex flex-wrap justify-between ">
                    <div className=" bg-white flex 2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[100px] xl:p-2 xl:gap-2 mt-[25px] rounded-[5px] ">
                      <div className="flex">
                        <Image
                          src={starterplan}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Starter Plan
                          </p>
                          <p className="legend font-[500] super_box_no">9846</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-white flex 2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[100px] xl:p-2 xl:gap-2 mt-[25px] rounded-[5px] ">
                      <div className="flex">
                        <Image
                          src={basicplan}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Basic Plan
                          </p>
                          <p className="legend font-[500] super_box_no">3261</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-white flex 2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[100px] xl:p-2 xl:gap-2 mt-[25px] rounded-[5px] ">
                      <div className="flex">
                        <Image
                          src={proplan}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Pro Plan
                          </p>
                          <p className="legend font-[500] super_box_no">6581</p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-white flex 2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[100px] xl:p-2 xl:gap-2 mt-[25px] rounded-[5px] ">
                      <div className="flex">
                        <Image
                          src={advanceplan}
                          alt="image"
                          className="super_box_img"
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <p className="legend font-[500] super_box_p">
                            Advance Plan
                          </p>
                          <p className="legend font-[500] super_box_no">2548</p>
                        </div>
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

export default SuperHome;
