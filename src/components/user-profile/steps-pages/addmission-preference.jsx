import React, { useEffect, useState } from "react";
import Image from "next/image";
import add from "../../../../public/images/add.svg";
import arrow from "../../assets/arrow.svg";
import axios from "axios";
import { useSelector } from "react-redux";

const AddmissionPreference = () => {
  const addmissionpreference = [
    { id: "1", collegeName: "Government College" },
    { id: "2", collegeName: "Private/Management" },
    { id: "3", collegeName: "Deemed University" },
  ];

  const [getPreferences, setPreferences] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkedColleges, setCheckedColleges] = useState("");
  const [getAdmission, setAdmission] = useState("");
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
  const [statusinfo, setData] = useState({ step_status: "admision_pre" });
  const [Admissions_Preferences, setAdmissions_Preferences] = useState("");
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedStates1, setSelectedStates1] = useState([]);
  const [selectedStates2, setSelectedStates2] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/course_preference/coursepreferences"
        );
        setPreferences(response.data.coursePreferences);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    if (checkedColleges.length > 0) {
      setAdmissions_Preferences(checkedColleges[0]);
    } else {
      setAdmissions_Preferences("");
    }
  }, [checkedColleges]);

  console.log('"Admissions_Preferences":', `"${Admissions_Preferences}"`);

  const handleCheckboxChange = (collegeName) => {
    if (selectedColleges.includes(collegeName)) {
      setSelectedColleges(
        selectedColleges.filter((college) => college !== collegeName)
      );
    } else {
      setSelectedColleges([...selectedColleges, collegeName]);
    }
  };

  const handleCategoryClick = (category) => {
    const isSelected = selectedCategories.includes(category._id);

    if (isSelected) {
      const updatedCategories = selectedCategories.filter(
        (catId) => catId !== category._id
      );
      setSelectedCategories(updatedCategories);
    } else {
      const updatedCategories = [...selectedCategories, category._id];
      setSelectedCategories(updatedCategories);
    }

    setFormData({
      ...formData,
      Course_Preference: isSelected
        ? formData.Course_Preference.filter((pref) => pref._id !== category._id) // Remove the category from formData
        : [...formData.Course_Preference, category._id], // Add the category to formData
    });
  };

  console.log("states 12", Admissions_Preferences);

  const [formData, setFormData] = useState({
    Course_Preference: [],
    Admissions_Preferences: [],

    NRI_Quta_Prefernce: [
      {
        nriQuotaPreference: "",
        relationshipWithSponsor: "",
        sponsorsCountry: "",
        sponsorsCountryState: "",
      },
    ],
    OtherStatePreferences: [{ select_options: "" }],
    AnnualMedicalCourseBudget: "",
  });

  // console.log("FORMADATA-----", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("preference")) {
      // Handle preference change
      const preferenceNumber = parseInt(name.substr(-1));
      setFormData((prevFormData) => ({
        ...prevFormData,
        NRI_Quta_Prefernce: [
          ...prevFormData.NRI_Quta_Prefernce.slice(0, preferenceNumber - 1),
          {
            ...prevFormData.NRI_Quta_Prefernce[preferenceNumber - 1],
            [name]: value,
          },
          ...prevFormData.NRI_Quta_Prefernce.slice(preferenceNumber),
        ],
      }));
    } else {
      // Handle selected states change based on preference number
      const preferenceNumber = parseInt(name.substr(-1));
      const setSelectedStates =
        preferenceNumber === 1 ? setSelectedStates1 : setSelectedStates2;
      setSelectedStates((prevSelectedStates) => {
        if (!prevSelectedStates.includes(value)) {
          return [...prevSelectedStates, value];
        } else {
          return prevSelectedStates.filter((stateId) => stateId !== value);
        }
      });
    }
  };

  console.log(formData);

  const sendData = async () => {
    try {
      const mergedData = {
        ...statusinfo,
        ...formData,
      };

      const response = await axios.put(
        `http://localhost:4000/api/auth/updatedUser_Steps/${userid}`,
        mergedData
      );
      console.log(
        "PUT request successful ------------------------  ",
        response.data
      );
    } catch (error) {
      console.error("Error making PUT request:", error);
    }
  };
  const handleNextClick = () => {
    sendData();
  };

  const handleSubmit = () => {
    console.log("Admissions_Preferences:", selectedColleges);
    setSelectedColleges([]);
  };

  const [getAllStates, setGetAllStates] = useState("");

  useEffect(() => {
    defaultStates();
  }, []);
  const defaultStates = () => {
    const option = {
      method: "GET",
      url: "http://localhost:4000/api/state/getAllStates",
    };
    axios
      .request(option)
      .then((response) => {
        setGetAllStates(response?.data?.states);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  return (
    <section>
      <div className="main_div mx-auto">
        <div className="">
          {/* =============01============ */}
          <div>
            <div className="flex gap-2">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[24px] xl:leading-[20px] lg:leading-[16px] ">
                Course Preferences{" "}
              </h1>
              <p className="inter font-[300] 2xl:text-[15px] xl:text-[12px] lg:text-[10px] 2xl:leading-[24px] xl:leading-[20px] lg:leading-[16px]">
                (Click on the courses to select/deselect. You can select
                multiple courses)
              </p>
            </div>

            <div className="flex flex-wrap gap-[19px] md:w-[50%] mt-5 mb-5">
              {getPreferences.map((category, index) => (
                <div
                  key={index}
                  className={`flex gap-[3px] items-center rounded-[5px] px-[16px] h-[48px] w-[103px] justify-center cursor-pointer
            ${
              selectedCategories.includes(category._id)
                ? "border-1px border-[#D9D9D9] bg-theme_primary"
                : "border-1px border-[#D9D9D9] bg-[#FFFFFF]"
            }
            `}
                  onClick={() => handleCategoryClick(category)}
                >
                  <input type="checkbox" id={category._id} className="hidden" />
                  {selectedCategories.includes(category._id) && (
                    <Image
                      src="/svg/profile/tick_white.svg"
                      height={16}
                      width={16}
                      alt="select"
                    />
                  )}
                  {/* Tick icon */}
                  <label
                    htmlFor={category._id}
                    className={`text-[15px] font-[400] font-inter leading-[18.15px] whitespace-nowrap
              ${
                selectedCategories.includes(category._id)
                  ? "text-[#ffffff]"
                  : "text-[#747474]"
              }
              `}
                  >
                    {category.course_Preference}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {/* =============02============ */}

          <div className="flex 2xl:gap-[25px] xl:gap-[25px] gap-[30px] 2xl:my-[25px] xl:my-[20px] my-[10px]">
            {addmissionpreference.map((item, index) => (
              <div key={index} className="flex items-center 2xl:gap-2 gap-1">
                <input
                  type="checkbox"
                  className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] sm:w-[] w-[]"
                  checked={selectedColleges.includes(item.collegeName)}
                  onChange={() => handleCheckboxChange(item.collegeName)}
                />
                <h1 className="inter font-[400] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[13px] text-[12px]">
                  {item.collegeName}
                </h1>
              </div>
            ))}
          </div>
          <hr />
          {/* =============03============ */}

          <div>
            <div className="2xl:my-[30px] xl:my-[20px] my-[15px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                NRI Quota Preference
              </h1>
            </div>

            <div className="flex gap-[40px] xl:my-[30px] inter font-[400] 2xl:text-[14px] xl:text-[12px] text-[10px]">
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="nriQuotaPreference"
                  value="Yes"
                  onChange={handleChange}
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />
                Yes
              </div>
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="nriQuotaPreference"
                  value="No"
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                  onChange={handleChange}
                />
                No
              </div>
            </div>

            <div className="flex xl:gap-[35px] gap-[20px]  xl:my-[30px] my-[20px]">
              <div>
                <label className="pre_input_lable">
                  Relationship with Sponsor
                </label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                  name="relationshipWithSponsor"
                  value={
                    formData.NRI_Quta_Prefernce[0].relationshipWithSponsor || ""
                  }
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="pre_input_lable">Sponsors country</label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                  name="sponsorsCountry"
                  value={formData.NRI_Quta_Prefernce[0].sponsorsCountry || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="pre_input_lable">
                  Sponsors country state
                </label>
                <input
                  type="text"
                  className="pre_input"
                  placeholder="Enter detail"
                  name="sponsorsCountryState"
                  value={
                    formData.NRI_Quta_Prefernce[0].sponsorsCountryState || ""
                  }
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <hr />
          {/* =============04============ */}

          <div>
            <div className="2xl:my-[30px] xl:my-[20px] my-[15px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                Interested in Other State admissions
              </h1>
            </div>
            <div className="flex gap-[40px] xl:mt-[30px] inter font-[400] 2xl:text-[14px] xl:text-[12px] text-[10px]">
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  value="Yes"
                  onChange={handleChange}
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />{" "}
                Yes
              </div>
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  value="No"
                  onChange={handleChange}
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />
                No
              </div>
            </div>
            <div className="flex gap-[35px] mb-[30px]">
              <div className="">
                <div className="flex items-center gap-[45px]">
                  <label className="pre_input_lable2">Preference No. 1</label>
                  <div className="">
                    <select
                      id="states1" // Add unique identifier
                      className="pre_input"
                      onChange={handleChange}
                      value={selectedStates1} // Use different state variable
                      name="preference1" // Add name attribute
                    >
                      <option value="">Select States</option>
                      {Array.isArray(getAllStates) &&
                        getAllStates.map((item) => (
                          <option key={item._id} value={item._id} className="">
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-[45px]">
                  <label className="pre_input_lable2">Preference No. 2</label>
                  <div className="">
                    <select
                      id="states2" // Add unique identifier
                      className="pre_input"
                      onChange={handleChange}
                      value={selectedStates2} // Use different state variable
                      name="preference2" // Add name attribute
                    >
                      <option value=""> Select States</option>
                      {Array.isArray(getAllStates) &&
                        getAllStates.map((item) => (
                          <option
                            key={item._id}
                            value={item._id}
                            className="pre_input"
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className=" relative ">
                <button className="flex justify-center items-center gap-2 absolute inter font-[700] bottom-0 2xl:my-[10px] xl:my-[8px] bg-[#4F9ED9] text-white 2xl:w-[143px] xl:w-[100px] w-[80px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px] lg:my-[4px]">
                  <Image
                    alt="img"
                    src={add}
                    className="2xl:w-[15px] 2xl:h-[15px] xl:w-[12px] xl:h-[12px] w-[11px] h-[11px] rounded-full"
                  />
                  Add State
                </button>
              </div>
            </div>
          </div>

          <hr />
          {/* =============05============ */}

          <div>
            <div className="2xl:my-[30px] xl:my-[20px] my-[15px]">
              <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[20px] xl:leading-[20px]">
                Annual Medical Course Budget
              </h1>
            </div>
            <div className="flex gap-[40px] 2xl:my-[30px] xl:my-[20px] my-[15px]">
              <input
                type="string"
                id="feesBudgetInput"
                className="pre_input"
                placeholder="Enter detail"
                value={formData.AnnualMedicalCourseBudget}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex xl:gap-[30px] gap-[20px] 2xl:mb-[60px] xl:mb-[40px]">
            <div className="  2xl:my-[30px] xl:my-[20px]">
              <button className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]">
                <Image
                  alt="img"
                  src={arrow}
                  className="rotate-180 2xl:w-[14px] 2xl:h-[10px] rounded-full"
                />
                Back
              </button>
            </div>
            <div className="2xl:my-[30px] xl:my-[20px]">
              <button
                onClick={() => {
                  handleSubmit();
                  handleNextClick();
                }}
                className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
              >
                Next
                <Image
                  alt="img"
                  src={arrow}
                  className="2xl:w-[14px] 2xl:h-[10px] rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddmissionPreference;
