"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import SuperNavbar from "../super-navbar";
import sideLogo from "../../../../public/images/Group 179.svg";
import add from "../../../../public/images/add.svg";
import Link from "next/link";
import edit from "../assets/edit.svg";
import deletes from "../assets/delete.svg";
import previews from "../assets/preview.svg";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import DeleteModuleC from "@/app/component/admin/students/delete-module";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Loader from "@/app/component/loader";
import SuperSidebar from "../super-sidebar";
import config from "@/config";

const CreateUser = () => {
  const [getAllUser, setGetAllUser] = useState("");
  const [isRefresh, setRefresh] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const [isOpenDelete, setOpenDelete] = useState(false);
  const [userID, setUserID] = useState("");
  const { token } = useSelector((state) => state?.auth);
  const { _id } = useSelector((state) => state?.auth);

  function openModal(id) {
    setUserID(id);
    setOpenDelete(true);
  }

  const closeModal = () => setOpenDelete(false);

  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  useEffect(() => {
    defaultUser();
  }, [isRefresh]);
  const defaultUser = () => {
    setLoader(true);

    const option = {
      method: "GET",
      url: `${config.baseURL}/api/auth/all-users-data`,
    };
    axios
      .request(option)
      .then((response) => {
        setGetAllUser(response?.data?.user);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(``);
    } catch (error) {
      console.log(error, "Error");
    }
  };
  const [selectedPlan, setSelectedPlan] = useState({ SubscriptionsPlan: [""] });
  // const [studentDetail, setStudentDetail] = useState({
  //   SubscriptionsPlan: [""],
  // });
  // console.log(studentDetail, "subs");

  // const handleSelectChange = (e) => {
  //   const selectedValue = e.target.value;
  //   setStudentDetail((prevState) => ({
  //     ...prevState,
  //     SubscriptionsPlan: [selectedValue],
  //   }));
  // };

  const handleUpdateUser = async (e, _id) => {
    setSelectedPlan((prevSelectedPlan) => ({
      ...prevSelectedPlan,
      ["SubscriptionsPlan"]: [e.target.value], // Update SubscriptionsPlan as an array with the selected value
    }));
    const updatedValue = e.target.value;

    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/edit-user/${_id}`,
        { SubscriptionsPlan: [updatedValue] },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        // refreshData();
        toast.success("Update successfully!");
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
      {isLoader && <Loader />}

      <section>
        <div className="flex">
          {/* <div className="hidden lg:block w-1/12 border h-screen">
            <div className="flex justify-center border border-x-0 pb-4  ">
              <a href="/user/user-dashboard">
                <Image src={sideLogo} className="mx-auto w-10 h-10 mt-5" />
              </a>
              <hr />
            </div>
            <div className="flex justify-center mt-6 2xl:mt-10 mx-4">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin">
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
                <a href="/super-admin/create-user">
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
                </a>
              </div>
            </div>
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin">
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
            <div className="flex justify-center  2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin/approve">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor "
                    class="w-6 h-6  mx-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center">
                    Approve
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center 2xl:mt-7 mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <a href="/super-admin/student-list">
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
                <a href="/super-admin/page2">
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
                <a href="/super-admin/page3">
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
          </div> */}
          <SuperSidebar />
          <div className="w-full">
            <div>
              <SuperNavbar />
            </div>
            <div>
              <div className="2xl:my-14 flex flex-wrap 2xl:gap-[70px] 2xl:ml-8  xl:gap-[40px] xl:my-8 lg:gap-[40px] lg:my-8 md:gap-[30px] md:my-8  md:ml-6 sm:gap-[30px] gap-[20px] sm:my-8  sm:ml-6  sm:mr-6 justify-center my-5 sm:justify-start">
                <button className="bg-[#323232] add_btn">
                  <Image src={add} className="add_img " />
                  Create Admin
                </button>
                <Link href="/super-admin/createUser">
                  <button className="bg-[#FE9E34] add_btn">
                    <Image src={add} className="add_img " />
                    Create Student{" "}
                  </button>
                </Link>
                <button className="bg-[#FC4742] add_btn">
                  <Image src={add} className="add_img " />
                  Create Counsellor
                </button>
                <button className="bg-[#25B948] add_btn">
                  <Image src={add} className="add_img " />
                  Create Viewer
                </button>
              </div>

              {/* ======== TABLE ============= */}
              <div className=" 2xl:p-[30px] xl:p-[20px] p-[15px] bg-white ">
                <div className="border rounded-[10px] bg-[#F5F6FF] ">
                  <div className="flex justify-between bg-[#F5F6FF] items-center 2xl:h-[80px] rounded-[10px] xl:h-[60px] h-[50px] 2xl:px-[20px] xl:px-[15px] px-[10px]">
                    <h1 className="legend text-[#1172BA] font-[700] 2xl:text-[20px] 2xl:leading-[40px] xl:text-[16px] xl:leading-[30px] lg:text-[14px] lg:leading-[28px] lg:ml-0 md:ml-6 ml-5">
                      Manage User
                    </h1>
                    {/* <button className="flex 2xl:gap-2 xl:gap-2 gap-1 justify-center items-center bg-[#5793CE] text-white 2xl:w-[152px] 2xl:h-[48px] xl:w-[110px] xl:h-[35px] h-[25px] w-[110px] rounded-[4px] 2xl:text-[14px] xl:text-[10px] text-[10px]">
                      <Image
                        src={add}
                        className="rounded-full 2xl:w-[15px] xl:w-[10px] w-3"
                      />
                      Create Profile
                    </button> */}
                  </div>
                  <hr />
                  <div className="overflow-x-auto">
                    <table className="table table-zebra table-xs my-5 md:w-[125%] sm:w-[130%] w-[150%] lg:w-full table_w ]">
                      <thead className="2xl:px-[20px] xl:px-[15px] px-[10px">
                        <tr>
                          <th className="craete_tbl_row text-[#A8A8A8]">
                            User Name
                          </th>
                          <th className="craete_tbl_row text-[#A8A8A8]">
                            Course
                          </th>
                          <th className="craete_tbl_row text-[#A8A8A8]">
                            Email Id
                          </th>
                          <th className="craete_tbl_row text-[#A8A8A8]">
                            Phone Number
                          </th>
                          {/* <th className="craete_tbl_row text-[#A8A8A8]">
                            Subscription Type
                          </th> */}
                          {/* <th className="craete_tbl_row text-[#A8A8A8]">
                            Status
                          </th> */}
                          <th className="craete_tbl_row text-[#A8A8A8]">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="2xl:px-[20px] xl:px-[15px] px-[10px] bg-white">
                        {Array.isArray(getAllUser) &&
                          getAllUser.map((item, index) => (
                            <tr key={index}>
                              <td className="py-3">
                                <div className="flex gap-3 items-center">
                                  <div className="superAD_sImg">
                                    {item?.firstname[0]}
                                    {item?.lastname[0]}
                                  </div>
                                  <div>
                                    <p className="craete_tbl_row gap-1">
                                      {item?.firstname}
                                      {item?.lastname}
                                    </p>
                                    <p className="text-[#A8A8A8] legend font-[400] 2xl:text-[13px] 2xl:leading-[20px] xl:text-[11px] xl:leading-[18px] lg:text-[10px] lg:leading-[16px] sm:text-[10px] sm:leading-[12px] text-[9px] leading-[12px]">
                                      UG
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td className="craete_tbl_row">
                                {" "}
                                {item?.careerGoals}
                              </td>
                              <td className="craete_tbl_row">{item?.email}</td>
                              <td className="craete_tbl_row">
                                {" "}
                                {item?.mobile}
                              </td>

                              {/* <td>
                                <select
                                  className="border rounded-sm p-1"
                                  // value={studentDetail.SubscriptionsPlan}
                                  onChange={(e) =>
                                    handleUpdateUser(e, item._id)
                                  }
                                >
                                  <option value="">
                                    {item?.SubscriptionsPlan}
                                  </option>
                                  <option value="Free">Free</option>
                                  <option value="One on One">One on One</option>
                                </select>
                              </td> */}

                              {/* <td className="craete_tbl_row text-[#FE9E34]">
                            Pending 
                          </td> */}

                              <td className="  ">
                                <Link href={`/pages/studentDetails/${item?._id}`}>
                                  <button className="">
                                    <Image
                                      src={edit}
                                      className="mr-2 mr-2 w-[15px] xl:w-[20px] 2xl:w-[25px]"
                                    />
                                  </button>
                                </Link>
                                <button
                                  onClick={() => openModal(item._id)}
                                  className=""
                                >
                                  <Image
                                    src={deletes}
                                    className="ml-2 mr-2 w-[15px] xl:w-[20px] 2xl:w-[25px]"
                                  />
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
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
                  <DeleteModuleC
                    userID={userID}
                    closeModal={closeModal}
                    refreshData={refreshData}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateUser;
