"use client";
import React, { Fragment, useEffect, useState } from "react";
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
import dropdown from "./assets/dropdown.svg";
import edit from "./assets/edit.svg";
import deletes from "./assets/delete.svg";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import config from "@/config";
// import SuperAdProtectedR from "@/config/superAdProtectedR";

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
const SuperHome = () => {
  const [getInterstedUsers, setGetInterstedUsers] = useState("");
  const [isOpenDelete, setOpenDelete] = useState(false);
  const [isUpdateUser, setisUpdateUser] = useState(false);
  const [userID, setUserID] = useState("");
  const [isRefresh, setRefresh] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { token } = useSelector((state) => state?.auth);
  const [plan, setPlan] = useState("Pending");
  const [studentDetail, setStudentDetail] = useState("Approved");
  // const statusList = plan.map(user => user.Status);
  // console.log(statusList , "Status")

  function openModal(id) {
    setUserID(id);
    setOpenDelete(true);
  }
  function openUpdateModal(id) {
    setUserID(id);
    setisUpdateUser(true);
  }

  const closeModal = () => setOpenDelete(false);
  const closeModall = () => setisUpdateUser(false);

  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  useEffect(() => {
    defaultUser();
  }, [isRefresh]);

  const defaultUser = () => {
    const option = {
      method: "GET",
      url: `${config.baseURL}/api/auth/getInterstedUsers`,
    };
    axios
      .request(option)
      .then((response) => {
        setGetInterstedUsers(response?.data?.users);
        setPlan(response?.data?.users);
        console.log(response?.data?.users, "status");
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.delete(
        `${config.baseURL}/api/auth/deleteInterstedUsers/${userID}`,
        {
          headers: {
            Accept: "application/json",
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Student remove successfully!");
        closeModal();
        refreshData();
      } else {
        toast.error("Failed. Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed. Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log("Received name:", name);
    console.log("Received value:", value);
    setStudentDetail({
      ...studentDetail,
      Status: value,
    });
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/edit-user/${userID}`,
        studentDetail,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Update successfully!");
        closeModall();
        refreshData();
      } else {
        console.log("Server error");
        toast.error(error?.response?.data?.message || "Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <section className="bg-white">
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
            <div className="flex justify-around mt-10 2xl:mt-16">
              <div className="2xl:w-[1151px] xl:w-[850px] w-[680px]">
                <div className=" bg-[#F5F6FF]  2xl:h-[198px] xl:h-[150px] h-[110px] 2xl:p-[30px] xl:p-[20px] p-[10px]  ">
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
                <div className=" bg-[#F5F6FF]  2xl:h-[198px] xl:h-[150px] h-[110px] 2xl:p-[30px] xl:p-[20px] p-[10px] 2xl:mt-[30px] xl:mt-8 mt-5  ">
                  <h1 className="super_head">Other Logins</h1>
                  <div className="flex 2xl:mt-[25px] 2xl:gap-[30px] xl:mt-[15px] xl:gap-[25px] gap-[15px] ">
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
              </div>

              <div className="2xl:w-[542px] xl:w-[340px] w-[220px] ">
                <div className="flex justify-between items-center p-5 w-full 2xl:h-[79px] xl:h-[60px] h-[45px] border rounded-[10px]">
                  <h1 className="super_head ">Total Revenue</h1>
                  <Image
                    src={dropdown}
                    alt="dropdown-img"
                    className="w-[20px] xl:w-[25px] 2xl:w-[30px]"
                  />
                </div>

                <div className="my-[30px] w-full bg-[#F5F6FF] 2xl:p-[35px] xl:p-[20px] p-[10px]  2xl:h-[317px] xl:h-[280px]">
                  <div>
                    <h1 className="super_head ">Subscription</h1>
                  </div>
                  <div className="flex flex-wrap justify-between ">
                    <div className=" bg-white flex items-center  2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[95px] h-[40px] xl:p-2 xl:gap-2 gap-2 mt-[25px] rounded-[5px] px-1 ">
                      <div className="flex ">
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
                          <p className="legend font-[500] super_box_noo">
                            9846
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-white flex items-center 2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[95px] xl:p-2 xl:gap-2 h-[40px] gap-2 mt-[25px] rounded-[5px] px-1 ">
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
                          <p className="legend font-[500] super_box_noo">
                            3261
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-white flex items-center  2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[95px] xl:p-2 xl:gap-2 h-[40px] gap-2 mt-[25px] rounded-[5px] px-1 ">
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
                          <p className="legend font-[500] super_box_noo">
                            6581
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-white flex items-center  2xl:gap-3 2xl:p-5 2xl:w-[223px] 2xl:h-[93px] xl:w-[140px] xl:h-[55px] w-[95px] xl:p-2 h-[40px] xl:gap-2 gap-2 mt-[25px] rounded-[5px] px-[2px]">
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
                          <p className="legend font-[500] super_box_noo">
                            2548
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===============table============= */}
            <div className=" 2xl:p-[30px] xl:p-[20px] p-[15px] bg-white ">
              <div className="border rounded-[10px] bg-[#F5F6FF] ">
                <h1 className="super_head 2xl:p-5 xl:p-3 p-2">News Updates</h1>

                <div className="overflow-x-auto">
                  <table className="table table-zebra table_h bg-white sm:w-[110%] lg:w-full rounded-none ">
                    <thead className="bg-[#F5F6FF]">
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
                        <tr
                          key={item.id}
                          className="2xl:h-[80px] xl:h-[60px] h-[45px] "
                        >
                          <td className="tablerow">{index + 1}</td>
                          <td className="tablerow">{item.CounsellingType}</td>
                          <td className="tablerow table-para">
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
            </div>
            {/* ===============table============= */}
            <div className=" 2xl:p-[30px] xl:p-[20px] p-[15px] bg-white ">
              <div className="border rounded-[10px] bg-[#F5F6FF] ">
                <h1 className="super_head 2xl:p-5 xl:p-3 p-2">
                  1 on 1 Counselling
                </h1>
                <div className="overflow-x-auto">
                  <table className="table table-xs my-5 md:w-[125%] sm:w-[130%] w-[150%] lg:w-full table_w">
                    <thead>
                      <tr>
                        <th className="craete_tbl_row text-[#A8A8A8]">S.No</th>
                        <th className="craete_tbl_row text-[#A8A8A8]">
                          Student Name
                        </th>
                        <th className="craete_tbl_row text-[#A8A8A8]">
                          Course
                        </th>
                        <th className="craete_tbl_row text-[#A8A8A8]">Email</th>
                        <th className="craete_tbl_row text-[#A8A8A8]">
                          Mobile Number
                        </th>
                        <th className="craete_tbl_row text-[#A8A8A8]">
                          ID Number
                        </th>

                        <th className="craete_tbl_row text-[#A8A8A8]">View</th>
                        <th className="craete_tbl_row text-[#A8A8A8]">
                          Status
                        </th>
                        <th className="craete_tbl_row text-[#A8A8A8]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {Array.isArray(getInterstedUsers) &&
                      getInterstedUsers.map((item, index) => (
                        <tbody key={index} className="border-none">
                          <tr className="2xl:h-[102px] xl:h-[80px] h-[60px]">
                            <td className="py-3">
                              <p className="craete_tbl_row">{index + 1}</p>
                            </td>
                            <td className="py-3">
                              <p className="craete_tbl_row">
                                {item?.firstname} {item?.lastname}
                              </p>
                            </td>
                            <td className="craete_tbl_row">
                              {item?.careerGoals}
                            </td>
                            <td className="craete_tbl_row">{item?.email}</td>
                            <td className="craete_tbl_row">{item?.mobile}</td>

                            <td className="craete_tbl_row">
                              {item?.Id_Number}
                            </td>

                            <td>
                              <button className="craete_tbl_Pbtn">
                                Preview
                              </button>
                            </td>
                            <td className="">
                              {item?.Status === "Pending" ? (
                                <p className="craete_tbl_row text-[#FE9E34]">
                                  Pending
                                </p>
                              ) : (
                                <p className="craete_tbl_row text-[#25B948]">
                                  Approved
                                </p>
                              )}
                            </td>
                            <td className="  ">
                              <button
                                onClick={() => openUpdateModal(item._id)}
                                className=""
                              >
                                <Image
                                  src={edit}
                                  className="mr-2 w-[15px] xl:w-[20px] 2xl:w-[25px]"
                                />
                              </button>
                              <button
                                onClick={() => openModal(item._id)}
                                className=""
                              >
                                <Image
                                  src={deletes}
                                  className="ml-2  w-[15px] xl:w-[20px] 2xl:w-[25px"
                                />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Transition appear show={isOpenDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-8 lg:px-8 2xl:p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="custom_heading_text font-semibold leading-6 text-gray-900 mt lg:mt-5"
                  >
                    Are You Sure! Want to Delete?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-[12px] sm:text-[16px] font-normal ms:leading-[30px] text-gray-500 mt-4">
                      Do you really want to delete these records? You cant view
                      this in your list anymore if you delete!
                    </p>
                  </div>

                  <div className=" mt-4 lg:mt-8">
                    <div className="flex justify-between gap-x-5">
                      <button
                        className="w-full border border-1 rounded-md border-lightBlue-400 text-lightBlue-700 hover:bg-lightBlue-200 text-sm  px-2 py-3
                              hover:border-none  border-sky-400 text-sky-700 hover:bg-sky-200 custom_btn_d "
                        onClick={closeModal}
                      >
                        No, Keep It
                      </button>

                      <button
                        className={`w-full  rounded-md 
            custom_btn_d 
                              border-red-400 text-red-700 bg-red-200  
                              hover:border-none
                        ${isLoading ? "bg-gray-200" : "hover:bg-red-200"}
                        hover:border-none`}
                        onClick={handleDelete}
                        disabled={isLoading}
                      >
                        {isLoading ? "Deleting..." : "Yes, Delete It"}
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isUpdateUser} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-8 lg:px-8 2xl:p-10 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button onClick={closeModall}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="xl:w-8 xl:h-8 w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="custom_heading_text font-semibold leading-6 text-gray-900 mt lg:mt-5"
                  >
                    Are You Sure! Want to Update?
                  </Dialog.Title>
                  <div className="mt-2"></div>

                  <div className=" mt-4 lg:mt-8">
                    <div className="flex justify-between gap-x-5">
                      <button
                        className={`w-full  rounded-md 
            custom_btn_d 
                              border-red-400 text-red-700 bg-red-200  
                              hover:border-none
                        ${isLoading ? "bg-gray-200" : "hover:bg-red-200"}
                        hover:border-none`}
                        value="Rejected"
                        onClick={() => {
                          handleUpdateUser();
                          inputHandler({
                            target: { name: "Status", value: "Rejected" },
                          });
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? "Rejecting..." : "Reject"}
                      </button>
                      <button
                        value="Approved"
                        className="w-full border border-1 rounded-md border-lightBlue-400 text-lightBlue-700 hover:bg-lightBlue-200 text-sm px-2 py-3 hover:border-none border-green-400 text-green-700 hover:bg-green-200 custom_btn_d"
                        onClick={() => {
                          handleUpdateUser();
                          inputHandler({
                            target: { name: "Status", value: "Approved" },
                          });
                        }}
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default SuperHome;

// export default SuperAdProtectedR(SuperHome);
