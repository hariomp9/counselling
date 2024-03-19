import SideBar from "@/app/user/sideBar";
import React from "react";
import Image from "next/image";
import SuperNavbar from "../super-navbar";
import sideLogo from "../../../../public/images/Group 179.svg";
import one from "../../../../public/images/fi_137.svg";
import three from "../../../../public/images/Group.svg";
import s1 from "../../../../public/images/s1.svg";
import s2 from "../../../../public/images/s2.svg";
import s3 from "../../../../public/images/s3.svg";
import s4 from "../../../../public/images/s4.svg";
import s5 from "../../../../public/images/s5.svg";

const Pages = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="hidden lg:block w-1/12 border h-screen">
            <div className="flex justify-center border border-x-0 pb-8  ">
              <a href="/user/user-dashboard">
                <Image src={sideLogo} className="mx-auto w-10 h-10 mt-5" />
              </a>
              <hr />
            </div>

            <div className="flex justify-center mt-10 2xl:mt-16">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/user/user-dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center ">
                    Home
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-plus w-6 h-6 mx-auto"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  <path
                    fill-rule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                  {" "}
                  Create User
                </p>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/user/subscription">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-video w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    Admin
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center 2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/user/colleges">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-mortarboard w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Student
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center 2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/user/colleges">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-paperclip w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Colleges
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6  hover:text-[#2083C4]">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-vcard h-6 w-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Application
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 flex justify-center hover:text-[#2083C4]">
                <button
                //  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gear w-6 h-6 mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    {" "}
                    Setting
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div>
              <SuperNavbar />
            </div>

            <div className="flex h-screen  w-full my-10 2xl:my-16">
              <div className="w-1/2">
                <div className="flex lg:gap-6 xl:gap-8 2xl:gap-16 2xl:ml-16 ml-7">
                  <div className="super_box">
                    <div className="flex  items-center">
                      <div>
                        <p className="legend font-[500] text-[#0071BC] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] xl:leading-[18px] lg:text-[10px] lg:leading-[16px]">
                          Student allotted today
                        </p>
                        <p className="legend font-[500] super_box_no">6</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Image src={one} className="super_box_img" />
                    </div>
                  </div>

                  <div className="super_box">
                    <div className="flex  items-center">
                      <div>
                        <p className="legend font-[500] text-[#0071BC] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] xl:leading-[18px]  lg:text-[10px] lg:leading-[16px]">
                          Student allotted last month
                        </p>
                        <p className="legend font-[500] super_box_no">510</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Image src={three} className="super_box_img" />
                    </div>
                  </div>
                </div>
                <div className="flex xl:justify-between lg:gap-6 lg:my-7 xl:my-12 2xl:ml-16 ml-7">
                  <div className="rounded-md flex justify-between 2xl:p-7 xl:p-5 shadow-md bg-[#EDF8FF] 2xl:w-[467px] xl:w-[360px] lg:w-[250px] 2xl:h-[147px] lg:p-3">
                    <div className="flex  items-center w-full">
                      <div className="w-full">
                        <p className="legend font-[500] text-[#0071BC] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] xl:leading-[18px]  lg:text-[10px] lg:leading-[16px]">
                          Today’s -{" "}
                          <span className="text-[#323232]">1 on 1 session</span>
                        </p>
                        <div className="flex justify-between w-full">
                          <p className="legend font-[500] super_box_no">9:am</p>{" "}
                          <p className="legend font-[500] super_box_no">
                            12:pm
                          </p>{" "}
                          <p className="legend font-[500] super_box_no">5:pm</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md flex justify-between 2xl:p-7 bg-[#EDF8FF] xl:p-5 lg:p-3 shadow-md 2xl:w-[242px] 2xl:h-[147px] lg:w-[150px]">
                    <div className="flex  items-center">
                      <div>
                        <p className="legend font-[500] text-[#0071BC] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[12px] xl:leading-[18px]  lg:text-[10px] lg:leading-[16px]">
                          Total sessions this month
                        </p>
                        <p className="legend font-[500] super_box_no">65</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="2xl:w-[835px] lg:w-1/2  mr-5">
                <div className="2xl:w-[835px] lg:w-2/2  2xl:ml-[70px] xl:ml-[30px] bg-[#FEF8E1]">
                  <div className="flex justify-between xl:p-5 lg:p-4">
                    <h1 className="legend font-[500] 2xl:text-[30px] 2xl:leading-[40px] xl:text-[22px] xl:leading-[30px] lg:text-[18px] lg:leading-[25px]">
                      Student’s News
                    </h1>

                    <button className="legend font-[700] 2xl:text-[16px] 2xl:leading-[24px] xl:text-[12px] xl:leading-[20px] lg:text-[10px] lg:leading-[16px] text-[#0071BC] underline">
                      View All
                    </button>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-around">
                      <div className="superAD_sdiv  mx-auto">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s1} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Suresh Inamdar
                              </h1>
                              <h1 className="superAD_sdate">Under Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                      <div className="superAD_sdiv  mx-auto">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s1} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Suresh Inamdar
                              </h1>
                              <h1 className="superAD_sdate">Under Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-around">
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s2} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Narendra Mathur
                              </h1>
                              <h1 className="superAD_sdate">Post Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s2} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Narendra Mathur
                              </h1>
                              <h1 className="superAD_sdate">Post Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-around">
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s3} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Dipali Sharma
                              </h1>
                              <h1 className="superAD_sdate">Under Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s3} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Dipali Sharma
                              </h1>
                              <h1 className="superAD_sdate">Under Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-around">
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s4} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Chetan Rao
                              </h1>
                              <h1 className="superAD_sdate">Under Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s4} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Chetan Rao
                              </h1>
                              <h1 className="superAD_sdate">Under Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-around">
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s5} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Kavita Agrawal
                              </h1>
                              <h1 className="superAD_sdate">Post Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                        </div>
                      </div>
                      <div className="superAD_sdiv mt-5">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-3">
                            <Image src={s5} className="superAD_sImg" />
                            <div>
                              <h1 className="superAD_sName text-[#323232]">
                                Kavita Agrawal
                              </h1>
                              <h1 className="superAD_sdate">Post Graduate</h1>
                            </div>
                          </div>
                          <div>
                            <button className="superAD_sbtn">
                              View Detail
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-6 my-3">
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
                          <div>
                            <h1 className="superAD_sdate">Start date</h1>
                            <h1 className="superAD_sBdate">13-03-2024</h1>
                          </div>
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

export default Pages;
