import React from "react";
import Image from "next/image";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";
import cllgPre from "../../../../public/images/coursepredictor.svg";
import cllgData from "../../../../public/images/collegedatabase.svg";
import choice from "../../../../public/images/choicefilling.svg";
import first from "../../../../public/images/1st.png";
import second from "../../../../public/images/2nd.png";
import third from "../../../../public/images/3rd.png";
import forth from "../../../../public/images/4rth.png";
import five from "../../../../public/images/5th.png";
import web1 from "../../../../public/images/webinars1.png";
import web2 from "../../../../public/images/webinars2.png";
import college from "../../../../public/images/college11.png";
import users from "../../../../public/images/2user.svg";
import campus1 from "../assets/campus1.png";
import campus2 from "../assets/campus2.png";
import neetcard from "../../../../public/images/neetcard.svg";
import dummy1 from "../assets/dummy1.svg";
import dummy2 from "../assets/dummy2.svg";
import web3 from "../assets//webinar3.png";

const data = [
  {
    id: 1,
    CounsellingType: "Madhya Pradesh Counselling Update",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image: first,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 2,
    CounsellingType: "Maharashtra College News",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    startDate: "02-05-2024",
    endDate: "10-05-2024",
  },
  {
    id: 3,
    CounsellingType: "Madhya Pradesh Counselling Update",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image: third,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 4,
    CounsellingType: "Maharashtra College News",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image: forth,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 5,
    CounsellingType: "Madhya Pradesh Counselling Update",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    image: five,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
];
const page = () => {
  return (
    <>
      <section>
        <div className="flex w-full">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />
            <div className="2xl:w-[1725px] xl:w-[1150px] lg:w-[880px] mx-auto px-[15px] sm:px-[30px] mt-[20px] lg:px-0 ">
              <div className="flex flex-col lg:flex-row gap-[30px]  2xl:mt-[30px] xl:mt-[25px] lg:mt-[20px]">
                <div>
                  <div className="relative 2xl:w-[1090px] xl:w-[750px] lg:w-[600px] ">
                    <div className="bg-[#F5F6FF] rounded-[10px] flex items-center 2xl:p-10 xl:p-5 lg:p-4 p-3 2xl:h-[127px] xl:h-[80px] lg:h-[70px] h-[70px] ">
                      <div>
                        <h1 className="inter font-[400] 2xl:text-[30px] 2xl:leading-[36.31px] xl:text-[20px] xl:leading-[25px] lg:text-[16px] lg:leading-[25px] sm:text-[14px] sm:leading-[20px] text-[14px] leading-[20px]">
                          Welcome <span className="font-semibold">Mayank!</span>
                        </h1>
                        <p className="inter font-[400] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[14px] 2xl:my-1 sm:text-[10px] sm:leading-[14px] text-[10px] leading-[14px] para_h">
                          Welcome back and explore the knowledge |{" "}
                          <span className="text-[#FF0000]">
                            {" "}
                            Profile Completed 30%{" "}
                          </span>{" "}
                        </p>
                      </div>
                      <div className=" flex justify-center absolute right-3 rounded-[10px] bg-white 2xl:w-[154px] 2xl:h-[105px] h-auto xl:w-[100px] lg:w-[80px] sm:w-[] w-[]">
                        <div className="text-center p-1">
                          <p
                            className="inter font-[400] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] sm:text-[] text-[]
   2xl:leading-[24px] xl:leading-[20px] lg:leading-[12px]"
                          >
                            Subscription
                          </p>
                          <h1
                            className="inter font-[600] text-[#EB2027] 2xl:text-[20px] xl:text-[14px] lg:text-[10px] sm:text-[] text-[]
   2xl:leading-[24.2px] xl:leading-[16px] lg:leading-[12px] sm:leading-[] leading-[]"
                          >
                            Community
                          </h1>
                          <button
                            className="bg-[#EB2027] text-white 2xl:w-[110px] 2xl:h-[35px] h-auto xl:w-[75px] lg:w-[55px] sm:w-[] w-[] inter font-[700] 2xl:text-[14px]
                         xl:text-[10px] lg:text-[9px] sm:text-[] text-[]
   2xl:leading-[26px] xl:leading-[20px] lg:leading-[16px] sm:leading-[] leading-[] rounded-[5px] 2xl:mt-[10px] xl:mt-[5px] mt-[3px]"
                          >
                            Upgrade
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F5F6FF] rounded-[10px] 2xl:h-[360px] xl:h-[250px] lg:h-[220px] h-[70px] my-[25px]">
                    <h1
                      className="inter font-[700] 2xl:p-5 xl:p-3 lg:p-4 p-3   2xl:text-[20px] xl:text-[14px] lg:text-[10] sm:text-[] text-[]
   2xl:leading-[24px] xl:leading-[20px] lg:leading-[16px] sm:leading-[] leading-[]"
                    >
                      Quick Access
                    </h1>
                    <hr />
                    <div className="flex justify-center items-center 2xl:p-5 xl:p-3 lg:p-4 p-3  gap-[20px] 2xl:gap-[30px] ">
                      <div>
                        <Image
                          src={cllgPre}
                          alt="coursepredictor"
                          className="neetdata"
                        />
                        <h1 className="neethead">Course Predictor</h1>
                      </div>
                      <div>
                        <Image
                          src={cllgData}
                          alt="collegedatabase"
                          className="neetdata"
                        />
                        <h1 className="neethead">College Database</h1>
                      </div>
                      <div>
                        <Image
                          src={choice}
                          alt="choicefilling"
                          className="neetdata"
                        />
                        <h1 className="neethead">Choice Filling</h1>
                      </div>

                      <div>
                        <Image
                          src={dummy1}
                          alt="choicefilling"
                          className="neetdata"
                        />
                        <h1 className="neethead">Dummy Content-1</h1>
                      </div>

                      <div>
                        <Image
                          src={dummy2}
                          alt="choicefilling"
                          className="neetdata"
                        />
                        <h1 className="neethead">Dummy Content-2</h1>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="table table_h bg-[#F5F6FF] sm:w-[110%] lg:w-auto xl:w-full  ">
                    
                      <thead>
                        <tr>
                          <th className=" tablerow">Sr. No.</th>
                          <th className=" tablerow">Title</th>
                          <th className=" tablerow">Details</th>
                          <th className=" tablerow">Start Date</th>
                          <th className=" tablerow">End Date</th>
                          <th className=" tablerow">Link</th>
                        </tr>
                      </thead>
                      <tbody> 
                        {data.map((item, index) => (
                          <tr key={item.id} className="h-[80px]">
                            <td className="tablerow">{index + 1}</td>
                            <td className="tablerow">{item.CounsellingType}</td>
                            <td className="tablerow 2xl:w-[330px] xl:w-[240px] lg:w-[180px] sm:w-[120px] table-para">
                              {item.Details}
                            </td>
                            <td className=" tablerow ">
                              <p className="tablerow ">02-05-2024</p>
                            </td>
                            <td className=" tablerow ">
                              <p className="tablerow ">10-05-2024</p>
                            </td>
                            <td className=" tablerow ">
                              <p className="tablerow ">Click Here</p>
                            </td>
                          </tr>
                        ))}
                        {/* row 2 */}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="2xl:w-[604px] xl:w-[450px] lg:w-[300px] ">
                  <div className="bg-[#F5F6FF] 2xl:p-5 p-4">
                    <h1 className="neethead2">
                      Join AN’24’s Upcoming Counselling Webinars
                    </h1>
                    <div>
                      <div className="flex xl:gap-5 gap-3 mt-5 ">
                        <div>
                          <Image
                            src={web1}
                            alt="webinars1"
                            className="2xl:w-[160px] 2xl:h-[112px] xl:w-[120px] sm:w-[120px] w-[100px] h-auto rounded-[3px] "
                          />
                        </div>
                        <div>
                          <h1 className="inter font-[600] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] text-[10px]">
                            College Counselling Session
                          </h1>
                          <p className="text-[#A6A6A6] inter font-[600] 2xl:text-[12px] 2xl:leading-[20px] xl:text-[8px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] text-[10px] ">
                            15th April 2024
                          </p>
                          <p className="tablerow 2xl:my-3 my-1 2xl:w-[361px] xl:w-[240px] ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                      <div className="flex xl:gap-5 gap-3 mt-5 ">
                        <div>
                          <Image
                            src={web2}
                            alt="webinars2"
                            className="2xl:w-[160px] 2xl:h-[112px] xl:w-[120px] sm:w-[120px] w-[100px] h-auto rounded-[3px]"
                          />
                        </div>{" "}
                        <div>
                          <h1 className="inter font-[600] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] text-[10px]">
                            College Counselling Session
                          </h1>
                          <p className="text-[#A6A6A6] inter font-[600] 2xl:text-[12px] 2xl:leading-[20px] xl:text-[8px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] text-[10px] ">
                            15th April 2024
                          </p>
                          <p className="tablerow 2xl:my-3 my-1 2xl:w-[361px] xl:w-[240px] ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                      <div className="flex xl:gap-5 gap-3 mt-5 ">
                        <div>
                          <Image
                            src={web3}
                            alt="webinars2"
                            className="2xl:w-[160px] 2xl:h-[112px] xl:w-[120px] sm:w-[120px] w-[100px] h-auto rounded-[3px]"
                          />
                        </div>{" "}
                        <div>
                          <h1 className="inter font-[600] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] text-[10px]">
                            College Counselling Session
                          </h1>
                          <p className="text-[#A6A6A6] inter font-[600] 2xl:text-[12px] 2xl:leading-[20px] xl:text-[8px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] text-[10px] ">
                            15th April 2024
                          </p>
                          <p className="tablerow 2xl:my-3 my-1 2xl:w-[361px] xl:w-[240px] ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-[#F5F6FF] flex 2xl:gap-10 xl:gap-5 gap-3 2xl:mt-10 mt-7">
                    <Image
                      src={college}
                      alt="college"
                      className="2xl:w-[227px] 2xl:h-[304px] xl:w-[160px] lg:w-[120px] sm:w-[120px] w-[100px] rounded-[10px]"
                    />

                    <div className="2xl:w-[254px] xl:w-[180px] flex items-center">
                      <div>
                        <h1 className="inter font-[700]  2xl:text-[20px] 2xl:leading-[27px] xl:text-[14px] xl:leading-[20px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] text-[10px]">
                          Contrary to popular belief Lorem Ipsum
                        </h1>
                        <p className="mt-4 text-[#A6A6A6] inter font-[600] neetpara">
                          Lorem Ipsum
                        </p>
                        <p className="text-[#000000] inter font-[400] neetpara">
                          Lorem Ipsum is simply dummy
                        </p>
                        <div className="mt-7 xl:mt-16 flex justify-between ">
                          <div className="flex gap-1 items-center ">
                            <Image
                              src={users}
                              className="2xl:w-[20px] 2xl:h-[15px] xl:w-[16px] lg:w-[12px] rounded-[3px]"
                            />
                            <p className="text-[#A6A6A6] text-[12px]">182</p>
                          </div>
                          <button className="neetbtn">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="bg-[#F5F6FF]  2xl:mt-10 mt-5 2xl:p-8 p-4 ">
                    <h1 className="inter font-[700] 2xl:text-[20px] 2xl:leading-[40px] xl:text-[14px] xl:leading-[20px] lg:text-[10px] lg:leading-[16px] sm:text-[13px] w-[85%] text-[12px] ">
                    The point of using Lorem Ipsum is that it has a more-or-less normal
                    </h1>
                    <hr className="2xl:my-3 my-2" />


                    <p className="tablerow  my-2">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    <div className="flex flex-col sm:flex-row 2xl:gap-10 xl:gap-5 gap-3">
                      <div className="2xl:w-[245px] xl:w-[180px] lg:w-[120px] sm:w-1/2">
                      <Image
                          src={campus1}
                          alt="campus1"
                          className="campusimg"
                        />
                        <p className="tablerow 2xl:w-[245px] xl:w-[180px] lg:w-[120px] w-[200px] my-2">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry,s standard
                        </p>
                       
                      </div>
                      <div className="2xl:w-[245px] xl:w-[180px] lg:w-[120px] sm:w-1/2">
                      <Image
                          src={campus2}
                          alt="campus2"
                          className="campusimg"
                        />
                        <p className="tablerow 2xl:w-[245px] xl:w-[180px] lg:w-[120px] w-[200px] my-2 ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry,s standard
                        </p>
                      
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

export default page;
