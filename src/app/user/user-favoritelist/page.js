"use client";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Loader from "@/app/component/loader";

export const headItems = [
  "S. No.",
  "College Name",
  "Courses",
  " Contact No",
  "Email",
  "Website",
  "Action",
];

const UserFavoritrList = () => {
  const { token } = useSelector((state) => state?.auth);
  const [isLoader, setLoader] = useState(false);
  const [isRefresh, setRefresh] = useState(false);
  const [getUser, setGetUser] = useState("");
  console.log(getUser, "aa");

  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  useEffect(() => {
    defaultUser();
  }, [isRefresh]);

  const defaultUser = () => {
    const options = {
      method: "GET",
      url: "http://localhost:4000/api/auth/getaUser",
      headers: {
        Accept: "application/json",
        authorization: token,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setGetUser(response?.data?.getaUser?.wishlist);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleAllClear = async () => {
    setLoader(true);

    try {
      const response = await axios.delete(
        "http://localhost:4000/api/auth/deleteAllWishlistItems",

        {
          headers: {
            Accept: "application/json",
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("College remove successfully!");
        refreshData();
      } else {
        toast.error("Failed. Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed. Something went wrong!");
    } finally {
      setLoader(false);
    }
  };

  const handleRemove = async (id) => {
    setLoader(true);

    try {
      const response = await axios.delete(
        `http://localhost:4000/api/auth/removeFromWishlist/${id}`,

        {
          headers: {
            Accept: "application/json",
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("College remove successfully!");
        refreshData();
      } else {
        toast.error("Failed. Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed. Something went wrong!");
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <Navbar />
      <ToastContainer autoClose={1500} className="mt-10" />
      {isLoader && <Loader />}

      {getUser.length === 0 ? (
        <div className="w-full">
          <div className="flex my-16 h-screen">
            <div className="mx-auto">
              <p className="text-3xl font-semibold text-center mb-10">Empty</p>
              <a href="/user/colleges">
                <button className="  custom_btn">Visit Colleges</button>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className=" flex justify-end mt-10"
            onClick={() => handleAllClear()}
          >
            <button className="custom_btn">All Clear</button>
          </div>
          
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th  className="px-6 py-3 ">
                    S. No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    College Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Courses
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Website
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {Array.isArray(getUser) && getUser.length > 0 && (
                <tbody>
                  {getUser.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-gray-50 dark:bg-gray-800"
                          : "bg-white dark:bg-gray-900"
                      }
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">
                        {Array.isArray(item.courses)
                          ? item.courses.map((course, idx) => (
                              <span key={idx}>
                                {course.name}
                                {idx !== item.courses.length - 1 && ", "}
                              </span>
                            ))
                          : item.courses && item.courses.name}
                      </td>
                      <td className="px-6 py-4">{item.phone}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.website}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col md:flex-row items-center gap-x-5">
                          <button
                            className="px-4 text-[13px] border rounded h-[25px] text-[red] hover:bg-[#efb3b38a]"
                            onClick={() => handleRemove(item?._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
          ;
        </div>
      )}
    </>
  );
};

export default UserFavoritrList;

