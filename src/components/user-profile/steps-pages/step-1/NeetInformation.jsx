import React, { useState, useEffect } from "react";
import AllIndiaCategory from "./inner-pages/AllIndiaCategory";
import HeadTitle from "./HeadTitle";
import Neetdetails from "./inner-pages/Neetdetails";
import DomicileStateCategory from "./inner-pages/DomicileStateCategory";
import ParallelReservation from "./inner-pages/ ParallelReservation";
import MinorityReservation from "./inner-pages/MinorityReservation";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
import config from "@/config";

const Reservation = ["HA", "MKB", "DEF", "PWD", "ORPHAN"];
const minorityReservation = [
  "Jain Minority",
  "Muslim Minority",
  "Christian Minority",
  "Gujarati / Sindhi Minority",
  "Hindi Linguistic Minority",
];
const NeetInformation = ({ next, prev, onFormDataChange, userids }) => {
  const handleFormDataChange = (formData) => {
    // Do something with the updated form data
    setNeet(formData);
  };

  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedState, setSelectedState] = useState();
  const [getStateCat, setStateCat] = useState([]);
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
  const [getNeet, setNeet] = useState([]);
  const [data, setData] = useState({ step_status: "neet_info" });
  const [profileCompletedNeet, setProfileCompletedNeet] = useState("");
  console.log(profileCompletedNeet, "profileCompleted");
  const [minReservation, SetMinReservation] = useState({
    Minority: "",
    select_option: "",
  });
  const [parallelReservation, SetParallelReservation] = useState({
    select_options: "",
    Reservation_Fields: "",
  });
  const [domicileStateCategory, SetDomicileStateCategory] = useState({
    state_id: "",
    category_id: "",
  });
  const [allIndiaCategory, setAllIndiaCategory] = useState("");

  const handleSelectState = (state) => {
    setSelectedState(state);

    axios
      .get(`${config.baseURL}/api/state_category/getStatesByCategory/${state}`)
      .then((response) => {
        setStateCat(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const InputHandler = (name, value) => {
    SetParallelReservation({ ...parallelReservation, [name]: value });
  };
  const InputHandlers = (name, value) => {
    SetMinReservation({ ...minReservation, [name]: value });
  };
  const handleDomicileSt = (name, value) => {
    SetDomicileStateCategory({ ...domicileStateCategory, [name]: value });
  };

  const sendData = async () => {
    const payload = {
      ...data,
      ...getNeet,
      All_India_Category_id: allIndiaCategory,
      domicileStateCategory: [domicileStateCategory],
      ParellelReservations: [parallelReservation],
      MinorityReservations: minReservation,
    };
    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/updatedUser_Steps/${userid || userids}`,
        payload
      );
      next();
    } catch (error) {
      console.error("Error making PUT request:", error);
    }
  };
  const handleNextClick = () => {
    sendData();
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${config.baseURL}/api/category/getCategory`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchStates = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/api/state/getAllStates`
      );
      setStates(response.data.states);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchStates();
  }, []);

  const [studentDetail, setStudentDetail] = useState({});
  const [domicileStateCategoryy, setDomicileStateCategory] = useState({});
  const [parallelReservtion, setParallelReservation] = useState({});
  const [minorityReservtio, setMinorityReservatio] = useState({});
  const { token } = useSelector((state) => state?.auth);
  useEffect(() => {
    defaultAUser();
    // defaultProfileComplete();
  }, []);

  const defaultAUser = async () => {
    const options = {
      method: "GET",
      url: `${config.baseURL}/api/auth/getUserById/${userids}`,
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setStudentDetail(response?.data?.user?.NEET_Details[0]);
        setDomicileStateCategory(
          response?.data?.user?.domicileStateCategory[0]
        );
        setAllIndiaCategory(
          response?.data?.user?.All_India_Category_id?.Select_category
        );
        setParallelReservation(
          response?.data?.user?.ParellelReservations[0]?.Reservation_Fields
        );
        setMinorityReservatio(
          response?.data?.user?.MinorityReservations[0]?.Minority
        );
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  // const defaultProfileComplete = () => {
  //   const option = {
  //     method: "GET",
  //     url: `${config.baseURL}/api/auth/getstepsbyuserId/${userids}`,
  //   };
  //   axios
  //     .request(option)
  //     .then((response) => {
  //       setProfileCompletedNeet(response?.data?.user?.neet_info);
  //     })
  //     .catch((error) => {
  //       alert("failed");
  //     });
  // };
  // useEffect(() => {
  //   if (profileCompletedNeet.toLowerCase() === "completed") {
  //     next();
  //   }
  // }, [profileCompletedNeet]);

  return (
    <>
      <div className="bg-theme_background py-[40px] px-[55px]">
        <Neetdetails
          onFormDataChange={handleFormDataChange}
          studentDetail={studentDetail}
        />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <AllIndiaCategory
          categoryValues={categories}
          onSelectCategory={setAllIndiaCategory}
          allIndiaCategory={allIndiaCategory}
        />

        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />

        <DomicileStateCategory
          getStateCat={getStateCat}
          states={states}
          onSelectState={handleSelectState}
          onSelectCategory={setSelectedCategory}
          categoryValues={categories}
          handleDomicileSt={handleDomicileSt}
          domicileStateCategoryy={domicileStateCategoryy}
        />

        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />

        <ParallelReservation
          reservation={Reservation}
          InputHandler={InputHandler}
          parallelReservtion={parallelReservtion}
        />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <MinorityReservation
          options={minorityReservation}
          InputHandlers={InputHandlers}
          minorityReservtio={minorityReservtio}
        />
        <div className="flex justify-start items-center gap-[32px]">
          <div
            onClick={() => prev()}
            className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
          >
            <Image
              src="/svg/profile/left_arrow.svg"
              height={16}
              width={16}
              alt="back"
            />
            Back
          </div>
          <div
            onClick={() => {
              sendData();
              handleNextClick();
            }}
            className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
          >
            Next
            <Image
              src="/svg/profile/right_arrow.svg"
              height={16}
              width={16}
              alt="next"
            />
          </div>
          {/* <button onClick={handleNextClick}>submit</button> */}
        </div>
      </div>
    </>
  );
};

export default NeetInformation;
