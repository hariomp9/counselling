"use client";
import SuperNavbar from "@/app/super-admin/super-navbar";
import SuperSidebar from "@/app/super-admin/super-sidebar";
import config from "@/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const StudentDetails = ({ params }) => {
  const [studentDetail, setStudentDetail] = useState({});
  const { token } = useSelector((state) => state?.auth);
  const firstNameInitial = studentDetail?.firstname
    ? studentDetail.firstname[0]
    : "";
  const lastNameInitial = studentDetail?.lastname
    ? studentDetail.lastname[0]
    : "";
  const createdAt = new Date(studentDetail?.createdAt);
  const formattedDate = createdAt.toLocaleDateString("en-GB");
  const [studentNeetDetail, setStudentNeetDetail] = useState("");

  useEffect(() => {
    defaultAUser();
  }, []);

  const defaultAUser = async () => {
    const options = {
      method: "GET",
      url: `${config.baseURL}/api/auth/getUserById/${params.slug}`,
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response?.data?.user);
        setStudentDetail(response?.data?.user);
        setStudentNeetDetail(response?.data?.user?.NEET_Details);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  return (
    <>
      <section className="bg-white">
        <div className="flex ">
          <SuperSidebar />
          <div className="w-full">
            <SuperNavbar />

            <div className="flex flex-wrap gap-[20px] xl:gap-[30px] 2xl:gap-[40px] 2xl:m-[30px] xl:m-[25px] m-[15px]">
              {/* NEET Details */}
              <section className="userpbox ">
                <div className="userpboxhbox">
                  <div>
                    <h1 className="userpboxhead">NEET Information</h1>
                  </div>
                  <div>
                    <button className="userpboxbtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                </div>
                <div>
                  {studentDetail?.NEET_Details?.map((item, index) => (
                    <div key={index}>
                      <div className="2xl:px-[30px] xl:px-[20px] px-[10px] py-2">
                        <div className="flex flex-wrap justify-between w-full py-3">
                          <div className="w-1/3">
                            <div>
                              <label className="userpboxlabel">
                                Name as per NEET Score Card
                              </label>
                              <h2>{item?.FullName}</h2>
                            </div>
                          </div>
                          <div className="w-1/3 flex justify-center">
                            <div>
                              <label className="userpboxlabel">
                                Mobile Number
                              </label>
                              <h2>{item?.MobileNumber}</h2>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div>
                              <label className="userpboxlabel">
                                WhatsApp Number for Updates
                              </label>
                              <h2>{item?.WhatsappNumber}</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-between w-full py-3">
                          <div className="w-1/3">
                            <div>
                              <label className="userpboxlabel">
                                NEET Registration No
                              </label>
                              <h2>{item?.NEET_RegisterNumber}</h2>
                            </div>
                          </div>
                          <div className="w-1/3 flex justify-center">
                            <div>
                              <label className="userpboxlabel">Roll No.</label>
                              <h2>{item?.RollNo}</h2>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div>
                              <label className="userpboxlabel">Marks</label>
                              <h2>{item?.Marks}</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-between w-full py-3">
                          <div className="w-1/3">
                            <div>
                              <label className="userpboxlabel">
                                All India Rank
                              </label>
                              <h2>{item?.AllIndiaRank}</h2>
                            </div>
                          </div>
                          <div className="w-1/3 flex justify-center">
                            <div>
                              <label className="userpboxlabel">
                                State Rank
                              </label>
                              <h2>{item?.StateRank}</h2>
                            </div>
                          </div>
                          <div className="w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* Admission Preferences */}
              <section className="userpbox ">
                <div className="userpboxhbox">
                  <div>
                    <h1 className="userpboxhead">Educational Information</h1>
                  </div>
                  <div>
                    <button className="userpboxbtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                </div>
              </section>
              <section className="userpbox ">
                <div className="userpboxhbox">
                  <div>
                    <h1 className="userpboxhead">Personal Details</h1>
                  </div>
                  <div>
                    <button className="userpboxbtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                </div>
                <div className="flex 2xl:px-[30px] xl:px-[20px] px-[10px]">
                  <div className="flex flex-wrap justify-between w-full">
                    <div className="w-1/3 ">
                      <div>
                        <label className="userpboxlabel">
                          Name as per NEET Score Card
                        </label>
                        <h2>Hariom Patil</h2>
                      </div>
                    </div>
                    <div className="w-1/3 flex justify-center">
                      <div>
                        <label className="userpboxlabel">Mobile Number</label>
                        <h2>+91 7894563218</h2>
                      </div>
                    </div>
                    <div className="w-1/3 ">
                      <div>
                        <label className="userpboxlabel">
                          WhatsApp Number for Updates
                        </label>
                        <h2>+91 7894563218</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{" "}
              <section className="userpbox ">
                <div className="userpboxhbox">
                  <div>
                    <h1 className="userpboxhead">Admission Preferences</h1>
                  </div>
                  <div>
                    <button className="userpboxbtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 w-3 h-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-y-5 2xl:px-[30px] xl:px-[20px] px-[10px]" >
                  <div className="w-1/2">
                    <div>
                      <label className="userpboxlabel">
                        Course Preferences
                      </label>
                      <h2></h2>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div>
                      <label className="userpboxlabel">
                        Admission Preference
                      </label>
                      <h2></h2>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div>
                      <label className="userpboxlabel">
                        NRI Quota Preference
                      </label>
                      <h2></h2>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div>
                      <label className="userpboxlabel">
                        Interested in Other State admissions
                      </label>
                      <h2></h2>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div>
                      <label className="userpboxlabel">Domicile State</label>
                      <h2></h2>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div>
                      <label className="userpboxlabel">
                        Annual Medical Course Budget
                      </label>
                      <h2></h2>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDetails;
