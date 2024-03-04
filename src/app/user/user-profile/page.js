"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfile = () => {
  const [getUser, setGetUser] = useState("");
  const { token } = useSelector((state) => state?.auth);
  const [isRefresh, setRefresh] = useState(false);

  useEffect(() => {
    defaultUser();
  }, [isRefresh]);

  const defaultUser = () => {
    const option = {
      method: "GET",
      url: "http://localhost:4000/api/auth/getaUser",
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(option)
      .then((response) => {
        setGetUser(response?.data?.getaUser);
        console.log(response?.data?.getaUser);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  return (
    <>
      <Navbar />

      <div className="mt-10">
        <div className="ml-10">
          <p className="my-2 text-[20px]">
            Name: {getUser?.firstname} {getUser?.lastname}
          </p>
          <p className="my-2 text-[20px]">Email : {getUser?.email}</p>
          <p className="my-2 text-[20px]">Phone.no: {getUser?.mobile}</p>

          <p className="my-2 text-[20px]">
            Father Name: {getUser?.fathersName}
          </p>
          <p className="my-2 text-[20px]">
            Mother Name: {getUser?.mothersName}
          </p>
          <p className="my-2 text-[20px] uppercase">Cast: {getUser?.cast}</p>
          <p className="my-2 text-[20px]">Address: {getUser?.address}</p>
          <p className="my-2 text-[20px]">City: {getUser?.city}</p>
          <p className="my-2 text-[20px]">Neet Score: {getUser?.neetScore}</p>
          <p className="my-2 text-[20px]">
            10th Percentage: {getUser?.tenthPercentage}%
          </p>
          <p className="my-2 text-[20px]">
            12th Percentage: {getUser?.twelfthPercentage}%
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
