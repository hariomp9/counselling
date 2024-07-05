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
  const [nriQuotaPreference, setNriQuotaPreference] = useState("");

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
    const stateId = event.target.value;
    const stateName =
      getAllStates.find((state) => state._id === stateId)?.name || "";

    console.log("State change - selected:", { stateId, stateName });

    const updatedPreferences = [...preferencesss];
    updatedPreferences[index] = {
      ...updatedPreferences[index],
      stateId: stateId,
      stateName: stateName,
    };

    console.log("Updated preferences:", updatedPreferences);

    setPreferences(updatedPreferences);

    // Update formData
    const updatedFormData = { ...formData };
    updatedFormData.OtherStatePreferences[0].Preference_Fields =
      updatedPreferences.map((pref) => ({
        _id: pref.stateId,
        name: pref.stateName,
      }));
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

    setSelectedCategories((prevCategories) =>
      isSelected
        ? prevCategories.filter((catId) => catId !== category._id)
        : [...prevCategories, category._id]
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      Course_Preference: isSelected
        ? prevFormData.Course_Preference.filter((pref) => pref !== category._id)
        : [...new Set([...prevFormData.Course_Preference, category._id])],
    }));
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
          [name]: value,
        },
      ],
      // Only update AnnualMedicalCourseBudget if that's the field being changed
      ...(name === "AnnualMedicalCourseBudget" && {
        AnnualMedicalCourseBudget: value,
      }),
      // Update Admissions_Preferences separately
      Admissions_Preferences: selectedColleges,
      OtherStatePreferences: [
        {
          ...prevFormData.OtherStatePreferences[0],
          select_options: selectedRadio,
          Preference_Fields:
            prevFormData.OtherStatePreferences[0]?.Preference_Fields,
        },
      ],
    }));
  };

  const sendData = async () => {
    const cleanData = (obj) => {
      for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
          obj[prop] = obj[prop].map((item) => {
            if (typeof item === "object") {
              const { _id, ...rest } = item;
              return rest;
            }
            return item;
          });
        } else if (typeof obj[prop] === "object") {
          cleanData(obj[prop]);
        }
      }
    };

    const mergedData = {
      ...statusinfo,
      ...formData,
      step_status : 'admision_pre',
      Course_Preference: [
        ...new Set([...formData.Course_Preference, ...selectedCategories]),
      ],
      Admissions_Preferences: selectedColleges,
    };

    cleanData(mergedData);

    console.log("Data to be sent:", mergedData);

    try {
      // First API call to update user data
      const updateResponse = await axios.put(
        `${config.baseURL}/api/auth/updatedUser_Steps/${userid || userids}`,
        mergedData
      );
      console.log("Update response:", updateResponse.data);

      // Second API call to get steps by user ID
      const stepsResponse = await axios.get(
        `${config.baseURL}/api/auth/getstepsbyuserId/${userid || userids}`,
        {
          headers: {
            Accept: "application/json",
            authorization: token, // Assuming you have the token available
          },
        }
      );
      console.log("Steps response:", stepsResponse.data);

      // Process the steps data if needed
      // For example, you might want to update some state with this data
      // setUserSteps(stepsResponse.data);

      // Proceed to the next step
      next();
    } catch (error) {
      console.error("Error in API requests:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
      // Handle the error appropriately, maybe show an error message to the user
    }
  };

  const handleNextClick = () => {
    sendData();
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    console.log("Radio changed to:", value);
    setSelectedRadio(value);

    if (value === "Yes") {
      const existingPreferences =
        formData.OtherStatePreferences[0]?.Preference_Fields || [];
      console.log("Existing preferences:", existingPreferences);

      if (existingPreferences.length > 0) {
        const updatedPreferences = existingPreferences.map((state, index) => ({
          id: index + 1,
          stateId: state._id,
          stateName: state.name,
        }));
        console.log("Setting preferences:", updatedPreferences);
        setPreferences(updatedPreferences);
      } else {
        setPreferences([{ id: 1, stateId: "", stateName: "" }]);
      }
    } else {
      setPreferences([]);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      OtherStatePreferences: [
        {
          ...prevFormData.OtherStatePreferences[0],
          select_options: value,
          Preference_Fields:
            value === "Yes"
              ? prevFormData.OtherStatePreferences[0].Preference_Fields
              : [],
        },
      ],
    }));
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
  const [profileCompleteAddmision, setProfileCompleteAddmision] = useState("");

  useEffect(() => {
    defaultAUser();
    // defaultProfileComplete();
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
    if (selectedColleges.includes(collegeName)) {
      setSelectedColleges(
        selectedColleges.filter((name) => name !== collegeName)
      );
    } else {
      setSelectedColleges([...selectedColleges, collegeName]);
    }
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

  // const defaultProfileComplete = () => {
  //   const option = {
  //     method: "GET",
  //     url: `${config.baseURL}/api/auth/getstepsbyuserId/${userids}`,
  //   };
  //   axios
  //     .request(option)
  //     .then((response) => {
  //       setProfileCompleteAddmision(response?.data?.user?.admision_pre);
  //     })
  //     .catch((error) => {
  //       alert("failed");
  //     });
  // };
  // useEffect(() => {
  //   if (profileCompleteAddmision.toLowerCase() === "completed") {
  //     next();
  //   }
  // }, [profileCompleteAddmision]);

  const fetchUserDataFromAPI = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/api/auth/getUserById/${userids}`,
        {
          headers: {
            Accept: "application/json",
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${config.baseURL}/api/auth/getUserById/${userids}`,
        {
          headers: {
            authorization: "",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Update the fetchUserData function to properly set the initial preferences state
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchUserDataFromAPI();
        const userData = response.user;

        console.log("Fetched user data:", userData);
        console.log("OtherStatePreferences:", userData.OtherStatePreferences);

        setSelectedCategories(
          userData.Course_Preference.map((course) => course._id || course)
        );
        setSelectedColleges(userData.Admissions_Preferences || []);

        setFormData((prevFormData) => ({
          ...prevFormData,
          Course_Preference: userData.Course_Preference.map(
            (course) => course._id || course
          ),
          NRI_Quta_Prefernce: userData.NRI_Quta_Prefernce || [{}],
          OtherStatePreferences: userData.OtherStatePreferences || [
            { select_options: "", Preference_Fields: [] },
          ],
          AnnualMedicalCourseBudget: userData.AnnualMedicalCourseBudget || "",
          Admissions_Preferences: userData.Admissions_Preferences || [],
        }));

        // Set the initial radio button state
        setSelectedRadio(
          userData.OtherStatePreferences[0]?.select_options || ""
        );

        // Set the initial preferences state
        if (
          userData.OtherStatePreferences &&
          userData.OtherStatePreferences[0]?.Preference_Fields
        ) {
          const initialPreferences =
            userData.OtherStatePreferences[0].Preference_Fields.map(
              (state, index) => ({
                id: index + 1,
                stateId: state._id,
                stateName: state.name,
              })
            );
          console.log("Setting initial preferences:", initialPreferences);
          setPreferences(initialPreferences);
          setSelectedRadio(userData.OtherStatePreferences[0].select_options);
        } else {
          console.log("No initial preferences found");
        }

        setFormData((prevFormData) => ({
          ...prevFormData,
          OtherStatePreferences: userData.OtherStatePreferences || [
            { select_options: "", Preference_Fields: [] },
          ],
        }));
      } catch (error) {
        console.error("Error in fetchUserData:", error);
      }
    };

    fetchUserData();
  }, [userids, token, getAllStates]);

  const handleRemovePreference = (index) => {
    const updatedPreferences = preferencesss.filter((_, i) => i !== index);
    setPreferences(updatedPreferences);

    // Update formData
    const updatedFormData = { ...formData };
    updatedFormData.OtherStatePreferences[0].Preference_Fields =
      updatedPreferences.map((pref) => pref.stateId);
    setFormData(updatedFormData);
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
              data.map((college) => {
                const isChecked = selectedColleges.includes(college.name);
                return (
                  <div
                    key={college.id}
                    className="flex items-center 2xl:gap-2 gap-1"
                  >
                    <input
                      type="checkbox"
                      className="2xl:w-[22px] 2xl:h-[22px] xl:h-[12px] xl:w-[12px] lg:w-[10px] lg:h-[10px] w-[10px] h-[10px]"
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
                  checked={
                    formData.NRI_Quta_Prefernce[0]?.nriQuotaPreference === "Yes"
                  }
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
                  checked={
                    formData.NRI_Quta_Prefernce[0]?.nriQuotaPreference === "No"
                  }
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
                />
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

            {selectedRadio === "Yes" && getAllStates.length > 0 && (
              <div>
                {preferencesss.map((pref, index) => (
                  <div key={pref.id} className="mb-4">
                    <label className="block mb-2">
                      Preference No. {pref.id}
                    </label>
                    <div className="flex items-center">
                      <select
                        value={pref.stateId || ""}
                        onChange={(event) => handleStateChange(event, index)}
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option value="">Select State</option>
                        {getAllStates.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => handleRemovePreference(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                    {pref.stateName && (
                      <p className="mt-2 text-sm text-gray-600">
                        Selected: {pref.stateName}
                      </p>
                    )}
                  </div>
                ))}
                <button
                  onClick={handleAddField}
                  className="btn btn-primary mt-4"
                >
                  Add State
                </button>
              </div>
            )}
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
                name="AnnualMedicalCourseBudget"
                value={formData.AnnualMedicalCourseBudget || feesBudget}
                // onChange={handleChange}
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
