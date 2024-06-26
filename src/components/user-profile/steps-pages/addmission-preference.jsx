import React, { useEffect, useState } from "react";
import Image from "next/image";
import add from "../../../../public/images/add.svg";
import arrow from "../../assets/arrow.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import config from "@/config";

const AddmissionPreference = ({ next, prev, onFormDataChange, userids }) => {
  const userid = useSelector((state) => state?.auth?.ad_details?._id);
  const [getPreferences, setPreferenc] = useState([]);
  const [getAllStates, setGetAllStates] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [preference1, setPreference1] = useState("");
  const [preference2, setPreference2] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [statusinfo, setData] = useState({ step_status: "admision_pre" });
  const [Admissions_Preferences, setAdmissions_Preferences] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [preState, setPreState] = useState([]);

  const data = [
    { id: 1, name: "Government College" },
    { id: 2, name: "Private/Management" },
  ];
  const [preferencesss, setPreferences] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);

  const handleAddField = () => {
    const newId = preferencesss.length + 1;
    setPreferences([...preferencesss, { id: newId, value: "" }]);
  };

  const handleStateChange = (event, index) => {
    const updatedPreferences = [...preferencesss];
    updatedPreferences[index].stateId = event.target.value;
    updatedPreferences[index].stateName =
      getAllStates.find((state) => state._id === event.target.value)?.name ||
      ""; // Get state name for display

    setPreferences(updatedPreferences);

    // Update formData.OtherStatePreferences.Preference_Fields on state change
    const updatedFormData = { ...formData };
    updatedFormData.OtherStatePreferences[0].Preference_Fields =
      updatedPreferences.map((pref) => pref.stateId);
    setFormData(updatedFormData);
  };

  // const handlePreferenceChange = (event) => {
  //   console.log("events are", event);

  //   let newIds = [];

  //   if (typeof event === "string") {
  //     newIds.push(event);
  //   } else if (typeof event === "object" && !Array.isArray(event)) {
  //     for (let key in event) {
  //       if (Array.isArray(event[key])) {
  //         event[key].forEach((item) => {
  //           if (item._id) {
  //             newIds.push(item._id);
  //           }
  //         });
  //       }
  //     }
  //   } else {
  //     console.error("Unexpected event format:", event);
  //     return;
  //   }
  //   const updatedState = [...preState, ...newIds];
  //   setPreState(updatedState);
  // };

  const [selectedColleges, setSelectedColleges] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          `${config.baseURL}/api/course_preference/coursepreferences`
        );
        setPreferenc(response.data.coursePreferences);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  const [formData, setFormData] = useState({
    Course_Preference: [],

    NRI_Quta_Prefernce: [
      {
        nriQuotaPreference: "",
        relationshipWithSponsor: "",
        sponsorsCountry: "",
        sponsorsCountryState: "",
      },
    ],
    OtherStatePreferences: [
      {
        select_options: "",
        Preference_Fields: [],
      },
    ],

    AnnualMedicalCourseBudget: "",
    Admissions_Preferences: [],
  });
  // console.log(preState, "preState===============================");

  useEffect(() => {
    if (selectedColleges.length > 0) {
      setAdmissions_Preferences(selectedColleges[0]);
    } else {
      setAdmissions_Preferences("");
    }
  }, [selectedColleges]);
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

    setFormData(
      {
        ...formData,
        Course_Preference: isSelected
          ? formData.Course_Preference.filter(
              (pref) => pref._id !== category._id
            )
          : [...formData.Course_Preference, category._id],
        Admissions_Preferences: selectedColleges,
        OtherStatePreferences: [
          {
            select_options: "Yes",
            Preference_Fields: preState,
          },
        ],
      },
      () => {
        console.log("OtherStatePreferences:", formData.OtherStatePreferences);
      }
    );
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     NRI_Quta_Prefernce: [
  //       {
  //         ...prevFormData.NRI_Quta_Prefernce[0],
  //         [name]: value,
  //       },
  //     ],
  //     AnnualMedicalCourseBudget: value,
  //     Admissions_Preferences: selectedColleges,
  //     OtherStatePreferences: [
  //       {
  //         select_options: selectedRadio,
  //         Preference_Fields: preState,
  //       },
  //     ],
  //   }));
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     NRI_Quta_Prefernce: [
  //       {
  //         ...prevFormData.NRI_Quta_Prefernce[0],
  //         [name]: value,
  //       },
  //     ],
  //     AnnualMedicalCourseBudget: value,
  //     Admissions_Preferences: selectedColleges,
  //     OtherStatePreferences: [
  //       {
  //         ...prevFormData.OtherStatePreferences[0],
  //         select_options: "",
  //         Preference_Fields: [],
  //       },
  //     ],
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      NRI_Quta_Prefernce: [
        {
          ...prevFormData.NRI_Quta_Prefernce[0],
          [name]:
            value ||
            prevFormData.NRI_Quta_Prefernce[0][name] ||
            studentDetail[name],
        },
      ],
      AnnualMedicalCourseBudget:
        value || prevFormData.AnnualMedicalCourseBudget,
      Admissions_Preferences:
        selectedColleges || prevFormData.Admissions_Preferences,
      OtherStatePreferences: [
        {
          ...prevFormData.OtherStatePreferences[0],
          select_options: "",
          Preference_Fields: [],
        },
      ],
    }));
  };

  const sendData = async () => {
    const mergedData = {
      ...statusinfo,
      ...formData,
    };
    console.log("spa==", mergedData);
    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/updatedUser_Steps/${userid || userids}`,
        mergedData
      );
      next();
    } catch (error) {
      console.error("Error making PUT request:", error);
    }
  };
  const handleNextClick = () => {
    sendData();
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  // const handlePreference1Change = (event) => {
  //   setPreference1(event.target.value);
  // };

  // const handlePreference2Change = (event) => {
  //   setPreference2(event.target.value);
  // };

  useEffect(() => {
    defaultStates();
  }, []);
  const defaultStates = () => {
    const option = {
      method: "GET",
      url: `${config.baseURL}/api/state/getAllStates`,
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

  const [studentDetail, setStudentDetail] = useState({});
  console.log(studentDetail, "studentDetailstudentDetail");
  const [preferenc1, setPreferenc1] = useState({});
  const [preferenc2, setPreferenc2] = useState({});
  const [feesBudget, setfeesBudget] = useState("");
  const [coursePreferenc, setCoursePreferences] = useState({});
  console.log(coursePreferenc?._id, "coursePreferenc");
  const [admissionPreferenc, setAdmissionPreference] = useState({});
  const { token } = useSelector((state) => state?.auth);

  useEffect(() => {
    defaultAUser();
  }, [userids, token]);

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
        // console.log("response",response?.data?.user?.OtherStatePreferences[0]?.Preference_Fields);

        setStudentDetail(response?.data?.user?.NRI_Quta_Prefernce[0]);
        setfeesBudget(response?.data?.user?.AnnualMedicalCourseBudget);
        setCoursePreferences(response?.data?.user?.Course_Preference);
        setAdmissionPreference(response?.data?.user?.Admissions_Preferences);

        const existingPrefs =
          response.data?.user?.OtherStatePreferences[0]?.Preference_Fields ||
          [];
        setPreferences(
          existingPrefs?.map((stateId, index) => ({
            id: index + 1,
            stateId: stateId?._id,
            stateName:
              getAllStates?.find((state) => state?._id === stateId)?.name ||
              stateId?.name,
          }))
        );
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  console.log("ssssss", preferencesss);
  useEffect(() => {
    const setCoursePreferences = () => {
      const preferences = [
        { _id: "662a9e5677db7c5881c4c72c", course_Preference: "MBBS", __v: 0 },
        { _id: "662a9f8462e421f51be96968", course_Preference: "BDS", __v: 0 },
      ];
      const defaultPreferences = preferences.map(
        (preference) => preference._id
      );
      setSelectedCategories(defaultPreferences);
      console.log(defaultPreferences, "map");
    };
    setCoursePreferences();
  }, []);
  const handleCheckboxClick = (collegeName) => {
    setSelectedCollege(collegeName);
    handleCheckboxChange(collegeName);
  };

  useEffect(() => {
    if (typeof admissionPreferenc === "string") {
      setSelectedCollege(admissionPreferenc);
    } else if (
      Array.isArray(admissionPreferenc) &&
      admissionPreferenc.length > 0
    ) {
      setSelectedCollege(admissionPreferenc[0]);
    }
  }, [admissionPreferenc]);
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
            <div className="flex flex-wrap gap-[19px]  mt-5 mb-5">
              {getPreferences.map((category, index) => (
                <div
                  key={index}
                  className={`flex gap-[3px] items-center rounded-[5px] 2xl:px-[16px] 2xl:h-[48px] 2xl:w-[210px] 2xl:text-[16px] xl:px-[10px] xl:h-[35px]  xl:text-[12px] justify-center cursor-pointer
        ${
          selectedCategories.includes(category._id)
            ? "border-1px border-[#D9D9D9] bg-theme_primary"
            : "border-1px border-[#D9D9D9] bg-[#FFFFFF]"
        }
      `}
                  onClick={() => handleCategoryClick(category)}
                >
                  <input
                    type="checkbox"
                    id={category._id}
                    checked={selectedCategories.includes(category._id)}
                    className="hidden"
                  />
                  {selectedCategories.includes(category._id) && (
                    <Image
                      src="/svg/profile/tick_white.svg"
                      height={16}
                      width={16}
                      alt="select"
                    />
                  )}
                  <p
                    htmlFor={category._id}
                    className={`2xl:text-[15px] font-[400] font-inter 2xl:leading-[18.15px] whitespace-nowrap
          ${
            selectedCategories.includes(category._id)
              ? "text-[#ffffff]"
              : "text-[#747474]"
          }
        `}
                  >
                    {category.course_Preference}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {/* =============02============  */}
          <div className="flex gap-2">
            <h1 className="inter font-[700] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] 2xl:leading-[24px] xl:leading-[20px] lg:leading-[16px] ">
              Admission Preference
            </h1>
          </div>
          <div className="flex 2xl:gap-[25px] xl:gap-[25px] gap-[30px] 2xl:my-[25px] xl:my-[20px] my-[10px]">
            {Array.isArray(data) &&
              data.map((college, index) => {
                const isChecked =
                  selectedCollege === college.name ||
                  (Array.isArray(admissionPreferenc) &&
                    admissionPreferenc.includes(college.name));
                return (
                  <div
                    key={index}
                    className="flex items-center 2xl:gap-2 gap-1"
                  >
                    <input
                      type="checkbox"
                      className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] sm:w-[] w-[]"
                      checked={isChecked}
                      onChange={() => handleCheckboxClick(college.name)}
                    />
                    <h1 className="inter font-[400] 2xl:text-[15px] 2xl:leading-[18.15px] xl:text-[13px] text-[12px]">
                      {college.name}
                    </h1>
                  </div>
                );
              })}
          </div>

          <hr />
          {/* =============03============  */}

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
                  maxLength={64}
                  value={
                    formData.NRI_Quta_Prefernce[0]?.relationshipWithSponsor ||
                    studentDetail?.relationshipWithSponsor
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
                  maxLength={64}
                  // value={formData.NRI_Quta_Prefernce[0].sponsorsCountry || ""}
                  value={
                    formData.NRI_Quta_Prefernce[0]?.sponsorsCountry ||
                    studentDetail?.sponsorsCountry ||
                    ""
                  }
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
                  maxLength={64}
                  placeholder="Enter detail"
                  name="sponsorsCountryState"
                  value={
                    formData.NRI_Quta_Prefernce[0]?.sponsorsCountryState ||
                    studentDetail?.sponsorsCountryState ||
                    ""
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
                  checked={selectedRadio === "Yes"}
                  onChange={handleRadioChange}
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />{" "}
                Yes
              </div>
              <div className="flex items-center xl:gap-[10px] gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  value="No"
                  checked={selectedRadio === "No"}
                  onChange={handleRadioChange}
                  className="radio radio-[#1172BA] 2xl:w-[22px] 2xl:h-[22px] xl:w-[16px] xl:h-[16px] w-[14px] h-[14px]"
                />
                No
              </div>
            </div>

            <div className="flex gap-[35px] mb-[30px]">
              <div className=" ">
                {preferencesss.length > 0 ? (
                  preferencesss.map((pref, index) => (
                    <div
                      key={pref.id}
                      className="flex items-center gap-[45px] my-2"
                    >
                      <label className="pre_input_lable2">
                        Preference No. {pref.id}
                      </label>
                      <div>
                        <select
                          id={`states${pref.id}`}
                          className="pre_input"
                          value={pref.stateId}
                          onChange={(event) => handleStateChange(event, index)}
                        >
                          <option value={pref.value}>Select State</option>
                          {getAllStates.map((item) => (
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
                  ))
                ) : (
                  <div className="flex items-center gap-[45px] my-2">
                    <label className="pre_input_lable2">Preference No. 1</label>
                    <div>
                      <select id="statesDefault" className="pre_input">
                        <option value="">Select State</option>
                        {getAllStates.map((item) => (
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
                )}
              </div>

              <div className=" relative ">
                <button
                  onClick={handleAddField}
                  className="gap-2 absolute inter font-[700] bottom-0 2xl:mb-[17px] xl:mb-[17px] lg:mb-[15px] bg-[#4F9ED9] text-white 2xl:w-[143px] xl:w-[100px] w-[80px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
                >
                  Add State
                </button>
              </div>
            </div>
          </div>
          <>
            {/* <div className="flex items-center gap-[45px]">
                  <label className="pre_input_lable2">Preference No. 1</label>
                  <div className="">
                    <select
                      id="states1"
                      className="pre_input"
                      value={preference1}
                      // defaultValue={domicileStateCategoryy?.name}
                      onChange={handlePreference1Change}
                    >
                      <option value="">{preferenc1?.name}</option>
                      {getAllStates.map((item) => (
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
                <div className="flex items-center gap-[45px]">
                  <label className="pre_input_lable2">Preference No. 2</label>
                  <div className="">
                    <select
                      id="states2"
                      className="pre_input"
                      value={preference2}
                      onChange={handlePreference2Change}
                    >
                      <option value=""> {preferenc2?.name}</option>
                      {getAllStates.map((item) => (
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
                </div> */}
          </>
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
                value={formData.AnnualMedicalCourseBudget || feesBudget}
                onChange={handleChange}
                onInput={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  e.target.value = value.slice(0, 7);
                  handleChange(e);
                }}
              />
            </div>
          </div>
          <div className="flex xl:gap-[30px] gap-[20px] 2xl:mb-[60px] xl:mb-[40px]">
            <div className="  2xl:my-[30px] xl:my-[20px]">
              <button
                onClick={() => {
                  prev();
                }}
                className="flex justify-center items-center gap-2 inter font-[700] 2xl:my-[10px] bg-[#4F9ED9] text-white 2xl:w-[112px] xl:w-[80px] w-[65px] 2xl:h-[48px] xl:h-[35px] h-[25px] rounded-[4px] 2xl:text-[14px] xl:text-[12px] 2xl:leading-[20px] text-[10px]"
              >
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
                  sendData();
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
