"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/app/component/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import config from "@/config";

const UserDetails = () => {
  const router = useRouter();
  const [isLoader, setLoader] = useState(false);
  const { token } = useSelector((state) => state?.auth);
  const [getUser, setGetUser] = useState("");
  const [isRefresh, setRefresh] = useState(false);

  const userID = getUser._id;

  const [studentDetails, setStudentDetails] = useState({
    fathersName: "",
    fathersOccupation: "",
    mothersName: "",
    mothersOccupation: "",
    neetScore: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    cast: "",
    address: "",
    city: "",
    state: "",
    documents: [],
    careerGoals: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  useEffect(() => {
    defaultUser();
  }, [isRefresh]);

  const defaultUser = () => {
    const option = {
      method: "GET",
      url: `${config.baseURL}/api/auth/getaUser`,
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(option)
      .then((response) => {
        setGetUser(response?.data?.getaUser);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${config.baseURL}/api/auth/edit-user/${userID}`,
        studentDetails,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        refreshData();
        toast.success("Update successfully!");
        closeDrawerO();
        router.push("/user/user-dashboard");
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Server error");
    }
  };
  
  return (
    <>
      <ToastContainer autoClose={1500} />
      {isLoader && <Loader />}
      <section className="py-10 px-5">
        <div className="mx-auto w-1/2">
          <div className="flex justify-center items-center border border-gray-300 rounded-lg bg-white px-5 h-10 my-5">
            <h2 className="font-semibold">Student Details</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-lg px-2 py-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname" className="block">
                  Fathers Name
                </label>
                <input
                  value={studentDetails.fathersName}
                  onChange={inputHandler}
                  maxLength={100}
                  required
                  type="text"
                  id="fathersName"
                  name="fathersName"
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="lastname" className="block">
                  Father Occupation
                </label>
                <input
                  value={studentDetails.fathersOccupation}
                  onChange={inputHandler}
                  type="text"
                  id="fathersOccupation"
                  name="fathersOccupation"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  maxLength={200}
                />
              </div>

              <div>
                <label htmlFor="email" className="block">
                  Mother Name
                </label>
                <input
                  value={studentDetails.mothersName}
                  onChange={inputHandler}
                  type="text"
                  id="mothersName"
                  name="mothersName"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  maxLength={64}
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block">
                  Mother Occupation
                </label>
                <input
                  value={studentDetails.mothersOccupation}
                  onChange={inputHandler}
                  type="tel"
                  id="mothersOccupation"
                  name="mothersOccupation"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  title="Please enter only numbers"
                />
              </div>

              <div>
                <label htmlFor="password" className="block">
                  Neet Score
                </label>
                <input
                  value={studentDetails.neetScore}
                  onChange={inputHandler}
                  type="number"
                  id="neetScore"
                  name="neetScore"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="firstname" className="block">
                  10th Percentage
                </label>
                <input
                  value={studentDetails.tenthPercentage}
                  onChange={inputHandler}
                  maxLength={100}
                  required
                  type="text"
                  id="tenthPercentage"
                  name="tenthPercentage"
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="lastname" className="block">
                  12th Percentage
                </label>
                <input
                  value={studentDetails.twelfthPercentage}
                  onChange={inputHandler}
                  type="text"
                  id="twelfthPercentage"
                  name="twelfthPercentage"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  maxLength={200}
                />
              </div>

              <div>
                <label htmlFor="email" className="block">
                  Cast
                </label>
                <input
                  value={studentDetails.cast}
                  onChange={inputHandler}
                  type="text"
                  id="cast"
                  name="cast"
                  className="border rounded-lg px-3 py-2 w-full uppercase"
                  required
                  maxLength={64}
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block">
                  Address
                </label>
                <input
                  value={studentDetails.address}
                  onChange={inputHandler}
                  type="tel"
                  id="address"
                  name="address"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  title="Please enter only numbers"
                />
              </div>

              <div>
                <label htmlFor="password" className="block">
                  City
                </label>
                <input
                  value={studentDetails.city}
                  onChange={inputHandler}
                  type="text"
                  id="city"
                  name="city"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="firstname" className="block">
                  State
                </label>
                <input
                  value={studentDetails.state}
                  onChange={inputHandler}
                  maxLength={100}
                  required
                  type="text"
                  id="state"
                  name="state"
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="lastname" className="block">
                  Documents
                </label>
                <input
                  value={studentDetails.documents}
                  onChange={inputHandler}
                  type="file"
                  id="fathersOccupation"
                  name="fathersOccupation"
                  className="border rounded-lg px-3 py-2 w-full"
                  maxLength={200}
                />
              </div>

              <div>
                <label htmlFor="email" className="block">
                  Career Goals
                </label>
                <input
                  value={studentDetails.careerGoals}
                  onChange={inputHandler}
                  type="text"
                  id="careerGoals"
                  name="careerGoals"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  maxLength={64}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserDetails;
