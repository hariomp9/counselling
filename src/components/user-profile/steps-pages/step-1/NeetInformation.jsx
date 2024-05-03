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

// const Category = [
//   'GEN',
//   'OBC',
//   'EWS',
//   'SC',
//   'ST',
//   'Gen-PWD',
//   'OBC-PWD',
//   'EWS-PWD',
//   'SC-PWD',
//   'ST-PWD'
// ];
// const domicileCategory = [
//   'OPEN',
//   'OBC',
//   'SC',
//   'ST',
//   'EWS',
//   'OPEN PWD',
//   'OBC PWD',
//   'SC PWD',
//   'ST PWD',
//   'EWS PWD',
//   'SEBC',
//   'VJ',
//   'NT1',
//   'NT2',
//   'NT3',
// ];
const Reservation = ["HA", "MKB", "DEF", "PWD", "ORPHAN"];
const minorityReservation = [
  "Jain Minority",
  "Muslim Minority",
  "Christian Minority",
  "Gujarati / Sindhi Minority",
  "Hindi Linguistic Minority",
];
const NeetInformation = ({ next, prev, onFormDataChange }) => {
  const handleFormDataChange = (formData) => {
    // Do something with the updated form data
    setNeet(formData);
  };

  console.log(onFormDataChange, "dataa");

  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedState, setSelectedState] = useState();
  const [getStateCat, setStateCat] = useState([]);
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
  const [getNeet, setNeet] = useState([]);
  const [data, setData] = useState({ step_status: "neet_info" });
  const [minReservation, SetMinReservation] = useState(null);
  const [parallelReservation, SetParallelReservation] = useState({
    select_options: "",
    Reservation_Fields: "",
  });
  const [domicileStateCategory, SetDomicileStateCategory] = useState({
    state_id: "",
    category_id: "",
  });

  const handleSelectState = (state) => {
    setSelectedState(state);

    axios
      .get(
        `http://localhost:4000/api/state_category/getStatesByCategory/${state}`
      )
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
  const handleDomicileSt = (name, value) => {
    SetDomicileStateCategory({ ...domicileStateCategory, [name]: value });
  };

  const sendData = async () => {
    console.log("===>", parallelReservation);
    const payload = {
      ...data,
      ...getNeet,
      All_India_Category_id: selectedCategory,
      domicileStateCategory: [domicileStateCategory],
      ParellelReservations: [parallelReservation],
      MinorityReservations: minReservation,
    };
    try {
      // const mergedData = {
      //   ...data,
      //   ...getNeet,
      //   All_India_Category_id: selectedCategory,
      //   domicileStateCategory: [getStateCat    , selectedCategory],
      // };
      const response = await axios.put(
        `http://localhost:4000/api/auth/updatedUser_Steps/${userid}`,
        payload
      );
      console.log("PUT request successful", response?.data);
      // Handle response or state update as needed
      next();
    } catch (error) {
      console.error("Error making PUT request:", error);
      // Handle error
    }
  };
  const handleNextClick = () => {
    sendData();
  };


  const handleSelect = (category) => {
    // console.log("Selected category:", category);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/category/getCategory"
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
        "http://localhost:4000/api/state/getAllStates"
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
  return (
    <>
      <div className="bg-theme_background py-[40px] px-[55px]">
        <Neetdetails onFormDataChange={handleFormDataChange} />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <AllIndiaCategory
          categoryValues={categories}
          onSelectCategory={setSelectedCategory}
        />

        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />

        <DomicileStateCategory
          getStateCat={getStateCat}
          states={states}
          onSelectState={handleSelectState}
          onSelectCategory={setSelectedCategory}
          categoryValues={categories}
          handleDomicileSt={handleDomicileSt}
        />

        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />

        <ParallelReservation
          reservation={Reservation}
          InputHandler={InputHandler}
        />
        <div className="h-[1px] bg-[#E3E3E3] w-[100%] mt-[48px] mb-[33px]" />
        <MinorityReservation
          options={minorityReservation}
          SetMinReservation={SetMinReservation}
        />
        <div className="flex justify-start items-center gap-[32px]">
          <div
            onClick={() => prev()}
            className="flex  gap-[5px] justify-center items-center rounded-[4px] h-[48px] bg-[#4F9ED9] text-[#ffffff] px-[20px] whitespace-nowrap text-[15px] font-[700] leading-[20px] font-inter cursor-pointer"
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
            className="flex gap-[5px]  justify-center items-center rounded-[4px] h-[48px] bg-[#4F9ED9] text-[#ffffff] px-[20px] whitespace-nowrap text-[15px] font-[700] leading-[20px] font-inter cursor-pointer"
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
