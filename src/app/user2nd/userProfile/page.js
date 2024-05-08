"use client";
import React, { useEffect, useState } from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfil = () => {
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
//   const { token } = useSelector((state) => state?.auth);

  const [studentDetail, setStudentDetail] = useState({});

  useEffect(() => {
    defaultAUser();
  }, []);

  const defaultAUser = async () => {
    const options = {
      method: "GET",
      url: `http://localhost:4000/api/auth/getUserById/${userid}`,
     
    };
    axios
      .request(options)
      .then((response) => {
        setStudentDetail(response?.data?.user);
        console.log(response?.data?.user, "clg");
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />

            <div className="flex flex-wrap gap-[20px] xl:gap-[30px] 2xl:gap-[40px] 2xl:m-[30px] xl:m-[25px] m-[15px]">
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
              </section>
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
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfil;
