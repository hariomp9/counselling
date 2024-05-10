"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../../sideBar";
import Navbar from "../../navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import men from "../../assets/men.svg";
import women from "../../assets/women.svg";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import logo from "../../../../../public/images/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginLastStep = ({ params }) => {
  const router = useRouter();
  const userId = params.slug;
  const [getStates, setGetStates] = useState("");
  const [getDist, setGetDist] = useState("");
  const [stateId, setStateId] = useState("");
  const { token } = useSelector((state) => state?.auth);
  // const { _id } = useSelector((state) => state?.auth);
  const [stateID, setStateID] = useState("");
  const [distId, setDistId] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const state_id = stateID;
  const district_id = distId;
  const [studentDetail, setStudentDetail] = useState({
    Gender: "",
    whatsappMobile: "",
    State_District: [
      {
        state_id: state_id,
        district_id: district_id,
      },
    ],
  });
  console.log(studentDetail, "studentDetail");

  // const inputHandler = (e) => {
  //   setStudentDetail({
  //     ...studentDetail,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "state_id" || name === "district_id") {
      setStudentDetail((prevState) => ({
        ...prevState,
        State_District: [
          {
            ...prevState.State_District[0],
            [name]: value,
          },
        ],
      }));
    } else {
      setStudentDetail((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/auth/edit-user/${userId}`,
        studentDetail
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     authorization: token,
        //   },
        // }
      );

      if (response.status >= 200 && response.status < 300) {
        toast.success("Update successfully!");
        router.push("/user/user-login");
        // refreshData();
      } else {
        console.log("Server error");
        toast.error(error?.response?.data?.message || "Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };

  useEffect(() => {
    defaultState();
  }, []);

  const defaultState = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:4000/api/state/getAllStates",
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
      url: `http://localhost:4000/api/state_district/${state_id}`,
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
      <ToastContainer autoClose={1000} />{" "}
      <div>
        <div>
          <div className="2xl:w-[1293px] mx-auto">
            <div className="flex justify-center 2xl:my-[40px] xl:mb-5 lg:mb-3">
              <Image
                src={logo}
                alt="logo"
                className=" 2xl:w-[218px] 2xl:h-[73px] xl:w-[158px] xl:h-[54px] lg:w-[128px] lg:h-[40px] w-[120px]"
              />
            </div>
          </div>
          <section className="mx-auto">
            <form
              onSubmit={handleUpdateUser}
              className="2xl:w-[1293px] py-[100px] bg-[#F5F6FF] 2xl:px-[210px] mx-auto"
            >
              <div className=" flex flex-wrap gap-[50px]">
                <div className="2xl:w-[390px] 2xl:h-[100px]">
                  <div className=" 2xl:w-[251px] xl:w-[200px] lg:w-[160px]">
                    <div>
                      <label className="inter font-[700] text-[20px] leading-[40px]">
                        Gender
                      </label>
                      <div className="flex ">
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
                          className={`flex items-center xl:gap-2 gap-1 w-1/2 ${
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
                          <input
                            type="radio"
                            name="radio-1"
                            className="radio"
                          />

                          <p className="inter font-[400] text-[#747474] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] cursor-pointer">
                            Male
                          </p>
                        </div>

                        <div
                          className="flex items-center xl:gap-2 gap-1 w-1/2"
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
                          <input
                            type="radio"
                            name="radio-1"
                            className="radio"
                          />
                          <p className="inter font-[400] text-[#747474] 2xl:text-[15px] xl:text-[11px] lg:text-[9px] cursor-pointer">
                            Female
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="2xl:w-[390px] 2xl:h-[100px]">
                  <label className="inter font-[700] text-[20px] leading-[40px]">
                    Whatsapp Number
                  </label>
                  <input
                    defaultValue={
                      studentDetail?.whatsappMobile
                        ? studentDetail?.whatsappMobile
                        : studentDetail?.whatsappMobile
                    }
                    required
                    type="text"
                    name="whatsappMobile"
                    className="userUinput"
                    maxLength={10}
                    onChange={inputHandler}
                    onKeyPress={(e) => {
                      // Allow only numbers
                      const onlyNumbers = /^[0-9\b]+$/;
                      if (!onlyNumbers.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="2xl:w-[390px] 2xl:h-[100px]">
                  <label className="inter font-[700] text-[20px] leading-[40px]">
                    Current State
                  </label>{" "}
                  <br />
                  <div>
                    <div className="">
                      <select
                        id="states2"
                        name="state_id"
                        className="userUinput"
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
                </div>
                <div className="2xl:w-[390px] 2xl:h-[100px]">
                  <label className="inter font-[700] text-[20px] leading-[40px]">
                    Current District
                  </label>{" "}
                  <br />
                  <div className="">
                    <select
                      id="states2"
                      name="district_id"
                      className="userUinput"
                      value={distId}
                      onChange={(e) => {
                        setDistId(e.target.value);
                        inputHandler(e);
                      }}
                    >
                      <option value=""> First Select State</option>
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
              <div className="2xl:mt-[65px] xl:mt-[40px] mt-[30px]">
                <button type="submit" className=" userpboxbtn ">
                  Submit
                  <Image
                    src={arrow}
                    className="xl:w-[14px] xl:h-[10px] w-[10px] h-[8px]"
                  />
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginLastStep;
