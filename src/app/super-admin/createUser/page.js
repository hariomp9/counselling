"use client";
import React, { useEffect, useState } from "react";
import SuperNavbar from "../super-navbar";
import sideLogo from "../../../../public/images/Group 179.svg";
import Image from "next/image";
import men from "../assets/men.svg";
import women from "../assets/women.svg";
import arrow from "../assets/arrow.svg";
import cut from "../assets/cut.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuperSidebar from "../super-sidebar";
import { useSelector } from "react-redux";
import config from "@/config";

const CreateUserForm = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const { _id } = useSelector((state) => state?.auth);
  const { token } = useSelector((state) => state?.auth);
  const userID = userId._id;
  const [isLoader, setLoader] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [getStates, setGetStates] = useState("");
  const [getDist, setGetDist] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateID, setStateID] = useState("");
  const [distId, setDistId] = useState("");
  const state_id = stateID;
  const district_id = distId;

  const [studentDetails, setStudentDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    Gender: "",
    whatsappMobile: "",
    State_District: [
      {
        state_id: state_id,
        district_id: district_id,
      },
    ],
    Subscription: "",
    Comments: "",
    password: "",
  });

  console.log(studentDetails, "studentDetail");

  const [showPassword, setShowPassword] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  // const inputHandler = (e) => {
  //   const { name, value } = e.target;
  //   setStudentDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [name]: value,
  //   }));
  // };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "state_id" || name === "district_id") {
      setStudentDetails((prevState) => ({
        ...prevState,
        State_District: [
          {
            ...prevState.State_District[0],
            [name]: value,
          },
        ],
      }));
    } else {
      setStudentDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await axios.post(
        `${config.baseURL}/api/auth/register`,
        studentDetails
      );
      if (response.status === 201) {
        toast.success("User created Successful!");
        router.push("/super-admin/create-user");
        setUserId(response?.data?.user);
      } else {
        toast.error("Failed to User create. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while User create.");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    defaultState();
  }, []);

  const defaultState = async () => {
    const options = {
      method: "GET",
      url: `${config.baseURL}/api/state/getAllStates`,
    };
    axios
      .request(options)
      .then((response) => {
        setGetStates(response?.data?.states);
        console.log(response?.data, "State");
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  useEffect(() => {
    defaultDist();
  }, [state_id]);

  const defaultDist = async () => {
    const options = {
      method: "GET",
      url: `${config.baseURL}/api/state_district/${state_id}`,
    };
    axios
      .request(options)
      .then((response) => {
        setGetDist(response?.data[0]?.district_ids);
        console.log(response?.data[0]?.district_ids, "dist");
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  return (
    <>
      <ToastContainer autoClose={1000} />
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
              <div className="bg-[#F5F6FF] mx-auto 2xl:w-[1725px] 2xl:h-[751px] xl:h-[550px] h-auto xl:w-[1200px] lg:w-[900px] sm:w-[] w-[] 2xl:px-[35px] xl:px-[25px] 2xl:py-[45px] xl:py-[35px] 2xl:mt-[20px] xl:mt-[10px] mt-[8px]">
                <h1
                  className="inter font-[700] 2xl:text-[30px] xl:text-[20px] lg:text-[14px] sm:text-[] text-[]
                   2xl:leading-[36.31px] xl:leading-[30px] lg:leading-[20px] sm:leading-[] leading-[]"
                >
                  Create User
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex 2xl:gap-[130px] xl:gap-[80px]"
                >
                  <div className="2xl:w-[549px] xl:w-[400px] lg:w-[320px] ">
                    <div className="flex justify-between 2xl:mt-[15px] xl:mt-[10px]">
                      <div className="2xl:w-[260px] xl:w-[190px] lg:w-[120px]">
                        <label className="createUser-label">First Name</label>
                        <input
                          value={studentDetails.firstname}
                          onChange={inputHandler}
                          maxLength={20}
                          required
                          type="text"
                          className="createUser-input"
                          placeholder="Enter First Name"
                          name="firstname"
                        />
                      </div>
                      <div className="2xl:w-[260px] xl:w-[190px] lg:w-[120px]">
                        <label className="createUser-label">Last Name</label>
                        <input
                          type="text"
                          className="createUser-input"
                          placeholder="Enter Last Name"
                          name="lastname"
                          value={studentDetails.lastname}
                          onChange={inputHandler}
                          maxLength={20}
                          required
                        />
                      </div>
                    </div>
                    <div className="2xl:mt-[15px] xl:mt-[10px]">
                      <div>
                        <label className="createUser-label">Email Id</label>
                        <input
                          type="text"
                          className="createUser-input2"
                          placeholder="Enter email id"
                          name="email"
                          value={studentDetails.email}
                          onChange={inputHandler}
                          maxLength={100}
                        />
                      </div>
                    </div>
                    <div className="2xl:mt-[15px] xl:mt-[10px]">
                      <div>
                        <label className="createUser-label">Phone Number</label>
                        <input
                          className="createUser-input2"
                          placeholder="000 000 0000"
                          name="mobile"
                          value={studentDetails.mobile}
                          onChange={inputHandler}
                          pattern="0-9"
                          required
                          onInput={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            e.target.value = value.slice(0, 15);
                            inputHandler(e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="2xl:mt-[15px] xl:mt-[10px]">
                      <div>
                        <label className="createUser-label">
                          Whatsapp Number
                        </label>
                        <input
                          className="createUser-input2"
                          placeholder="000 000 0000"
                          name="whatsappMobile"
                          value={studentDetails.whatsappMobile}
                          onChange={inputHandler}
                          required
                          onInput={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            e.target.value = value.slice(0, 15);
                            inputHandler(e);
                          }}
                        />
                      </div>
                    </div>
                    {/* <div className="2xl:mt-[15px] xl:mt-[10px] 2xl:w-[251px] xl:w-[200px] lg:w-[160px]">
                      <div>
                        <label className="createUser-label">Gender</label>
                        <div className="flex ">
                          <div className="flex items-center xl:gap-2 gap-1 w-1/2">
                            <Image
                              src={men}
                              className="2xl:w-[48px] 2xl:h-[48px] h-auto xl:w-[40px] lg:w-[30px] sm:w-[] w-[] cursor-pointer"
                            />
                            <p className="inter font-[400] text-[#747474] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] cursor-pointer">
                              Male
                            </p>
                          </div>
                          <div className="flex items-center xl:gap-2 gap-1 w-1/2">
                            <Image
                              src={women}
                              className="2xl:w-[48px] 2xl:h-[48px] h-auto xl:w-[40px] lg:w-[30px] sm:w-[] w-[] cursor-pointer"
                            />
                            <p className="inter font-[400] text-[#747474] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] cursor-pointer">
                              Female
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <div className="flex 2xl:mt-[25px] xl:mt-[10px] 2xl:gap-7 xl:gap-4  ">
                      {/* <div
                          className={`flex items-center xl:gap-2 gap-1 w-1/2 hover:border-red-800 ${
                            selectedGender === "Male"
                              ? "border border-red-500"
                              : ""
                          }`}
                          onClick={() =>
                            inputHandler({
                              target: { name: "Gender", value: "Male" },
                            })
                          }
                        >
                          <Image
                            src={men}
                            className="2xl:w-[48px] 2xl:h-[48px] h-auto xl:w-[40px] lg:w-[30px] sm:w-[] w-[] cursor-pointer"
                          />
                          <p className="inter font-[400] text-[#747474] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] cursor-pointer">
                            Male
                          </p>
                        </div> */}
                      <div
                        className={`flex items-center xl:gap-2 gap-1  ${
                          selectedGender === "Male"
                            ? "border border-red-500"
                            : ""
                        }`}
                        onClick={() =>
                          inputHandler({
                            target: { name: "Gender", value: "Male" },
                          })
                        }
                      >
                        <Image
                          src={men}
                          className="2xl:w-[48px] 2xl:h-[48px] h-auto xl:w-[40px] lg:w-[30px] sm:w-[] w-[] cursor-pointer"
                        />
                        <input type="radio" name="radio-1" className="radio" />

                        <p className="inter font-[400] text-[#747474] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] cursor-pointer">
                          Male
                        </p>
                      </div>

                      <div
                        className="flex items-center xl:gap-2 gap-1 "
                        onClick={() =>
                          inputHandler({
                            target: { name: "Gender", value: "Female" },
                          })
                        }
                      >
                        <Image
                          src={women}
                          className="2xl:w-[48px] 2xl:h-[48px] h-auto xl:w-[40px] lg:w-[30px] sm:w-[] w-[] cursor-pointer"
                        />
                        <input type="radio" name="radio-1" className="radio" />
                        <p className="inter font-[400] text-[#747474] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] cursor-pointer">
                          Female
                        </p>
                      </div>
                    </div>
                    <div className="flex xl:gap-[30px] gap-[20px] 2xl:mb-[60px] xl:mb-[40px]">
                      <div className="  2xl:my-[30px] xl:my-[20px]">
                        <button className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                          <Image
                            src={cut}
                            className="rotate-180 2xl:w-[14px] 2xl:h-[10px] rounded-full"
                          />
                          Cancel
                        </button>
                      </div>
                      <div className="2xl:my-[30px] xl:my-[20px]">
                        <button className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                          Create
                          <Image
                            src={arrow}
                            className="2xl:w-[14px] 2xl:h-[10px] rounded-full"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="2xl:w-[549px] xl:w-[400px] lg:w-[320px] ">
                    <div className="flex justify-between 2xl:mt-[15px] xl:mt-[10px]">
                      <div className="2xl:w-[260px] xl:w-[190px] lg:w-[120px]">
                        <label className="createUser-label">
                          Current State
                        </label>
                        <div className="">
                          <select
                            id="states2"
                            name="state_id"
                            className="createUser-input"
                            value={stateID}
                            onChange={(e) => {
                              setStateID(e.target.value);
                              inputHandler(e);
                            }}
                          >
                            <option value=""> Select State</option>
                            {Array.isArray(getStates) &&
                              getStates.map((item) => (
                                <option
                                  key={item._id}
                                  value={item._id}
                                  className="pre_input"
                                >
                                  {item.name}
                                </option>
                              ))}
                            {/* <option className="">First Select State</option> */}
                          </select>
                        </div>
                      </div>
                      <div className="2xl:w-[260px] xl:w-[190px] lg:w-[120px]">
                        <label className="createUser-label"> District</label>
                        <div className="">
                          <select
                            id="states2"
                            name="district_id"
                            className="createUser-input"
                            value={distId}
                            onChange={(e) => {
                              setDistId(e.target.value);
                              inputHandler(e);
                            }}
                          >
                            {/* <option value=""> {districtname.District}</option> */}
                            <option value=""> Select</option>

                            {Array.isArray(getDist) &&
                              getDist.map((item) => (
                                <option
                                  key={item._id}
                                  value={item._id}
                                  className="pre_input"
                                >
                                  {item.District}
                                </option>
                              ))}

                            <option className=""></option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="2xl:mt-[15px] xl:mt-[10px]">
                      <div>
                        <label className="createUser-label">
                          {" "}
                          Subscription
                        </label>
                        <input
                          type="text"
                          className="createUser-input2"
                          placeholder="Select Subscription"
                          name="Subscription"
                          value={studentDetails.Subscription}
                          onChange={inputHandler}
                          required
                        />
                      </div>
                    </div>
                    <div className="2xl:mt-[15px] xl:mt-[10px]">
                      <div>
                        <label className="createUser-label">Comments</label>
                        <input
                          type="text"
                          className="createUser-input2 2xl:h-[147px] xl:h-[100px] lg:h-[80px]"
                          placeholder="Enter Comments"
                          name="Comments"
                          value={studentDetails.Comments}
                          onChange={inputHandler}
                          required
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        type="button"
                        className=" absolute  transform -translate-y-1/2 cursor-pointer 
                        2xl:right-7 2xl:top-[37px] xl:right-5 xl:top-[28px] lg:right-5 lg:top-[20px]"
                        onClick={handleToggle}
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="2xl:w-[25px] 2xl:h-[25px] xl:w-[18px] xl:h-[18px] lg:w-[15px] lg:h-[15px] 2xl:mt-12 xl:mt-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="2xl:w-[25px] 2xl:h-[25px] xl:w-[18px] xl:h-[18px] lg:w-[15px] lg:h-[15px] 2xl:mt-12 xl:mt-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        )}
                      </button>
                      <div className="2xl:mt-[15px] xl:mt-[10px]">
                        <div>
                          <label className="createUser-label">Password</label>
                          <input
                            className="createUser-input2"
                            placeholder="Password"
                            value={studentDetails.password}
                            type={showPassword ? "text" : "password"}
                            onChange={inputHandler}
                            maxLength={100}
                            required
                            id="password"
                            name="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                            title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateUserForm;
