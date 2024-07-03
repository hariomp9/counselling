"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../../user/assets/arrow.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import config from "@/config";
import Link from "next/link";
import SuperSidebar from "@/app/super-admin/super-sidebar";
import SuperNavbar from "@/app/super-admin/super-navbar";

const UserProfile = ({ params }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state?.auth);
  const [getStates, setGetStates] = useState("");
  const [getDist, setGetDist] = useState("");
  const [stateId, setStateId] = useState("");
  // const { _id } = useSelector((state) => state?.auth);
  const [stateID, setStateID] = useState("");
  const [distId, setDistId] = useState("");
  const state_id = stateID;
  const district_id = distId;
  const [selectedGender, setSelectedGender] = useState("");
  const [studentDetail, setStudentDetail] = useState({
    firstname: "",
    mobile: "",
    email: "",
    Gender: "",
    whatsappMobile: "",
    State_District: [
      {
        state_id: state_id,
        district_id: district_id,
      },
    ],
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [setstateName, setSetstateName] = useState("");
  const [districtname, setDistrictname] = useState("");
  const state = setstateName.name;
  const district = districtname.District;
  // console.log(district, "stateidnaaam");

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
        setStudentDetail(response?.data?.user);
        setSetstateName(response?.data?.user?.State_District[0]?.state_id);
        setDistrictname(response?.data?.user?.State_District[0]?.district_id);

        console.log(response?.data, "user");
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

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
      setStudentDetail({
        ...studentDetail,
        [name]: value,
      });
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/edit-user/${params.slug}`,
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
        router.push("/super-admin");
        // setStudentDetail({
        //   newPassword: "",
        //   confirmPassword: "",
        // });
      } else {
        toast.error(error?.response?.data?.message || "Server error");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Server error");
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
          <div className="">
            <SuperSidebar />
          </div>
          <div className="w-full">
            <SuperNavbar />

            <section className="flex">
              <div className="mx-auto">
                <div className="bg-[#F5F6FF] rounded-[10px] 2xl:w-[1345px] 2xl:h-[115px] xl:w-[900px] xl:h-[80px] lg:w-[650px] h-[60px] 2xl:mt-[30px] xl:mt-[20px] mt-[15px] flex justify-center items-center text-center">
                  <div>
                    <h1 className="updateUh1">Edit Profile</h1>
                    <p className="updateUpara">Edit your profile & password</p>
                  </div>
                </div>
                <div className="bg-[#F5F6FF] rounded-[10px] 2xl:w-[1345px] 2xl:h-[613px] xl:w-[900px] xl:h-[350px] lg:w-[650px] h-[280px] 2xl:mt-[30px] xl:mt-[20px] mt-[15px] 2xl:p-[55px] xl:p-[30px] p-[15px]">
                  <form onSubmit={handleUpdateUser}>
                    <div className="flex flex-wrap 2xl:gap-[30px] xl:gap-[20px] gap-[10px]">
                      <div className="">
                        <label className="userUlabel">First Name</label> <br />
                        <input
                          defaultValue={
                            studentDetail?.firstname
                              ? studentDetail?.firstname
                              : studentDetail?.firstname
                          }
                          type="text"
                          name="firstname"
                          className="userUinput"
                          placeholder="Enter Name"
                          required
                          maxLength={32}
                          onChange={inputHandler}
                        />
                      </div>
                      <div className="">
                        <label className="userUlabel">Last Name</label> <br />
                        <input
                          defaultValue={
                            studentDetail?.lastname
                              ? studentDetail?.lastname
                              : studentDetail?.lastname
                          }
                          type="text"
                          name="lastname"
                          className="userUinput"
                          placeholder="Enter Name"
                          required
                          maxLength={32}
                          onChange={inputHandler}
                        />
                      </div>
                      <div className="">
                        <label className="userUlabel">Mobile Number*</label>{" "}
                        <br />
                        <input
                          defaultValue={
                            studentDetail?.mobile
                              ? studentDetail?.mobile
                              : studentDetail?.mobile
                          }
                          type="text"
                          name="mobile"
                          className="userUinput"
                          placeholder="Enter Number"
                          required
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
                      <div className="">
                        <label className="userUlabel">Email id</label> <br />
                        <input
                          defaultValue={
                            studentDetail?.email
                              ? studentDetail?.email
                              : studentDetail?.email
                          }
                          type="text"
                          name="email"
                          className="userUinput"
                          placeholder="Enter Email"
                          required
                          maxLength={200}
                          onChange={inputHandler}
                        />
                      </div>
                      <div className="">
                        <label className="userUlabel">Gender</label> <br />
                        <select
                          defaultValue={
                            studentDetail?.Gender
                              ? studentDetail?.Gender
                              : studentDetail?.Gender
                          }
                          name="Gender"
                          className="userUinput"
                          onChange={inputHandler}
                        >
                          <option value="">{studentDetail?.Gender}</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div className="">
                        <label className="userUlabel">Whatsapp Number</label>{" "}
                        <br />
                        <input
                          defaultValue={
                            studentDetail?.whatsappMobile
                              ? studentDetail?.whatsappMobile
                              : studentDetail?.whatsappMobile
                          }
                          type="text"
                          name="whatsappMobile"
                          className="userUinput"
                          placeholder="Enter Whatsapp Number"
                          // required
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
                      <div className="">
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
                              // value={stateId}
                              defaultValue={state}
                              onChange={(e) => {
                                setStateID(e.target.value);
                                inputHandler(e);
                              }}
                            >
                              {/* <option value="">{setstateName.name}</option> */}
                              <option value="">{state}</option>

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
                      <div className="">
                        <label className="inter font-[700] text-[20px] leading-[40px]">
                          Current District
                        </label>{" "}
                        <br />
                        <div className="">
                          <select
                            id="states2"
                            name="district_id"
                            className="userUinput"
                            // value={distId}
                            defaultValue={district}
                            onChange={(e) => {
                              setDistId(e.target.value);
                              inputHandler(e);
                            }}
                          >
                            {/* <option value=""> {districtname.District}</option> */}
                            <option value=""> {district}</option>

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
                    <div className="flex flex-wrap 2xl:gap-[30px] xl:gap-[20px] gap-[10px] 2xl:my-7 xl:my-5 my-3">
                      <div className="">
                        <label className="userUlabel">Old Password</label>{" "}
                        <br />
                        <input
                          type="password"
                          name="oldPassword"
                          className="userUinput"
                          placeholder="Enter Password"
                          maxLength={12}
                          onChange={inputHandler}
                        />
                      </div>
                      <div className="">
                        <label className="userUlabel">New Password</label>{" "}
                        <br />
                        <input
                          type="password"
                          name="newPassword"
                          className="userUinput"
                          placeholder="Enter Password"
                          maxLength={12}
                          onChange={inputHandler}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                          title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
                        />
                      </div>
                      <div className="">
                        <label className="userUlabel">Confirm Password</label>{" "}
                        <br />
                        <input
                          type="password"
                          name="confirmPassword"
                          className="userUinput"
                          placeholder="Enter Password"
                          maxLength={12}
                          onChange={inputHandler}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                          title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
                        />
                      </div>
                    </div>

                    <div className="2xl:mt-[65px] xl:mt-[40px] mt-[30px] flex  2xl:gap-5 gap-3">
                      <Link href="/user2nd/neetUG-home">
                        <span
                          type="submit"
                          className=" cursor-pointer userpboxbtn "
                        >
                          <Image
                            src={arrow}
                            className="xl:w-[14px] xl:h-[10px] w-[10px] h-[8px] -rotate-180"
                          />
                          Cancel
                        </span>
                      </Link>{" "}
                      <button type="submit" className=" userpboxbtn ">
                        Update
                        <Image
                          src={arrow}
                          className="xl:w-[14px] xl:h-[10px] w-[10px] h-[8px]"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
