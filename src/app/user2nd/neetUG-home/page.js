import React from "react";
import Image from "next/image";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";
import cllgPre from "../../../../public/images/coursepredictor.png";
import cllgData from "../../../../public/images/collegedatabase.png";
import choice from "../../../../public/images/choicefilling.png";
import first from "../../../../public/images/1st.png";
import second from "../../../../public/images/2nd.png";
import third from "../../../../public/images/3rd.png";
import forth from "../../../../public/images/4rth.png";
import five from "../../../../public/images/5th.png";
import web1 from "../../../../public/images/webinars1.png";
import web2 from "../../../../public/images/webinars2.png";
import college from "../../../../public/images/college11.png";
import users from "../../../../public/images/2user.svg";
import campus1 from "../../../../public/images/campus1.png";
import campus2 from "../../../../public/images/campus2.png";
import neetcard from "../../../../public/images/neetcard.svg";
const data = [
  {
    id: 1,
    CounsellingType: "Counselling Type-1",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    image: first,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 2,
    CounsellingType: "Counselling Type-2",
    Details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    image: second,
    Links: "Lorem Ipsum is simply dumm text of the printing and industry.",
  },
  {
    id: 3,
    CounsellingType: "Counselling Type-3",
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
            <div className="w-[1725px] mx-auto ">
              <div className="flex gap-[30px]  2xl:mt-[30px]">
                <div className="relative 2xl:w-[1090px] xl:w-[750px] lg:w-[600px] ">
                  <Image src={neetcard} alt="neetcard" className="neetCard" />
                  <div className="bg-[#F5F6FF] rounded-[10px] flex items-center 2xl:p-10 xl:p-5 lg:p-4 2xl:h-[127px] xl:h-[80px] lg:h-[60px] ">
                    <div>
                      <h1 className="inter font-[400] 2xl:text-[30px] 2xl:leading-[36.31px] xl:text-[20px] xl:leading-[25px] lg:text-[16px] lg:leading-[25px]">
                        Welcome <span className="font-semibold">Mayank!</span>
                      </h1>
                      <p className="inter font-[400] 2xl:text-[14px] 2xl:leading-[24px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[14px] 2xl:my-1">
                        Welcome back and explore the knowledge |{" "}
                        <span className="text-[#FF0000]">
                          {" "}
                          Profile Completed 30%{" "}
                        </span>{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 2xl:my-10 xl:my-7 lg:my-4">
                    <div>
                      <Image src={cllgPre} alt="coursepredictor" className="neetdata" />
                      <h1 className="neethead">Course Predictor</h1>
                    </div>
                    <div>
                      <Image src={cllgData} alt="collegedatabase" className="neetdata" />
                      <h1 className="neethead">College Database</h1>
                    </div>
                    <div>
                      <Image src={choice} alt="choicefilling" className="neetdata" />
                      <h1 className="neethead">Choice Filling</h1>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="table bg-[#F5F6FF]">
                      <thead>
                        <tr>
                          <th className=" tablerow">Counselling Type</th>
                          <th className=" tablerow">Details</th>
                          <th className=" tablerow">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td className="tablerow">{item.CounsellingType}</td>
                            <td className="tablerow 2xl:w-[426px] xl:w-[300px] lg:w-[280px]">
                              {item.Details}
                            </td>
                            <td className=" tablerow flex 2xl:gap-5 gap-3">
                              <Image
                                src={item.image}
                                alt={item.name}
                                className="2xl:w-[94px] 2xl:h-[75px] xl:w-[60px] lg:w-[60px] h-auto rounded-[3px]"
                              />
                              <p className="tablerow 2xl:w-[200px] xl:w-[120px]">
                                {item.Links}
                              </p>
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
                      <div className="flex xl:gap-5 gap-3 mt-3 ">
                        <div>
                          <Image
                            src={web1}
                            alt="webinars1"
                            className="2xl:w-[160px] 2xl:h-[112px] xl:w-[120px] xl:h-auto rounded-[3px] "
                          />
                        </div>
                        <div>
                          <h1 className="inter font-[600] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px]">
                            College Counselling Session
                          </h1>
                          <p className="text-[#A6A6A6] inter font-[600] 2xl:text-[12px] 2xl:leading-[20px] xl:text-[8px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] ">
                            15th April 2024
                          </p>
                          <p className="tablerow 2xl:my-3 my-1 2xl:w-[361px] xl:w-[240px]">
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
                            className="2xl:w-[160px] 2xl:h-[112px] xl:w-[120px] xl:h-auto rounded-[3px]"
                          />
                        </div>{" "}
                        <div>
                          <h1 className="inter font-[600] 2xl:text-[14px] 2xl:leading-[20px] xl:text-[10px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px]">
                            College Counselling Session
                          </h1>
                          <p className="text-[#A6A6A6] inter font-[600] 2xl:text-[12px] 2xl:leading-[20px] xl:text-[8px] xl:leading-[18px] lg:text-[8px] lg:leading-[12px] sm:text-[10px] ">
                            15th April 2024
                          </p>
                          <p className="tablerow 2xl:my-3 my-1 2xl:w-[361px] xl:w-[240px]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F5F6FF] flex 2xl:gap-10 xl:gap-5 gap-3 2xl:mt-10 mt-7">
                    <Image
                      src={college}
                      alt="college"
                      className="2xl:w-[227px] 2xl:h-[304px] xl:w-[160px] lg:w-[100px] rounded-[10px]"
                    />

                    <div className="2xl:w-[254px] xl:w-[180px] flex items-center">
                      <div>
                        <h1 className="inter font-[700]  2xl:text-[20px] 2xl:leading-[27px] xl:text-[14px] xl:leading-[20px] lg:text-[8px] lg:leading-[12px] sm:text-[10px]">
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
                  </div>

                  <div className="bg-[#F5F6FF]  2xl:mt-10 mt-5 2xl:p-8 p-4 ">
                    <h1 className="inter font-[700] 2xl:text-[20px] 2xl:leading-[40px] xl:text-[14px] xl:leading-[20px] lg:text-[10px] lg:leading-[16px] sm:text-[10px] ">
                      Contrary to popular belief Lorem Ipsum
                    </h1>
                    <hr className="2xl:my-3 my-2" />

                    <div className="flex 2xl:gap-10 xl:gap-5 gap-3">
                      <div className="2xl:w-[245px] xl:w-[180px] lg:w-[120px]">
                        <h1 className="neethead3">There are many variations</h1>
                        <p className="tablerow">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry,s standard
                        </p>
                        <Image src={campus1} alt="campus1" className="campusimg" />
                      </div>
                      <div className="2xl:w-[245px] xl:w-[180px] lg:w-[120px]">
                        <h1 className="neethead3">
                          Passages Lorem Ipsum available
                        </h1>
                        <p className="tablerow ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry,s standard
                        </p>
                        <Image src={campus2} alt="campus2" className="campusimg" />
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
