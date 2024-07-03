"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Profile from "@/components/user-profile/Profile";
import UserSidebar from "@/app/user2nd/userSidebar";
import UserNavbar from "@/app/user2nd/userNav";
import axios from "axios";
import { useSelector } from "react-redux";
import UserProfileUpdate from "../../../user/update-profile/page";
import config from "@/config";
import SuperSidebar from "@/app/super-admin/super-sidebar";
import SuperNavbar from "@/app/super-admin/super-navbar";

const UserProfile = ({ params }) => {
  const student_id = params.slug;
  const [studentDetail, setStudentDetail] = useState({});
  const { token } = useSelector((state) => state?.auth);
  const plan = studentDetail;

  console.log(plan, "khjgkg");

  useEffect(() => {
    defaultAUser();
  }, []);

  const defaultAUser = async () => {
    const options = {
      method: "GET",
      url: `${config.baseURL}/api/auth/getUserById/${student_id}`,
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setStudentDetail(response?.data?.user?.SubscriptionsPlan[0]);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };
  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <SuperSidebar />
          </div>
          <div className="lg:w-full">
            <SuperNavbar />

            <Profile student_id={student_id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
