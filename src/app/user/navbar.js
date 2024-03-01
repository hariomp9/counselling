"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { removeToken, rem_AdDetails } from "@/redux/adminSlice/authSlice";
import { Link } from "react-router-dom";
import Loader from "../component/loader";
import UserProtectedRoute from "@/config/user-protectedRoute";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = useSelector((state) => state?.auth);
  const [isLoader, setLoader] = useState(false);
  const [getUser, setGetUser] = useState("");
  const [isRefresh, setRefresh] = useState(false);

  const refreshData = () => {
    setRefresh(!isRefresh);
  };

  const handleSignout = async () => {
    setLoader(true);

    try {
      const res = await axios.get(`http://localhost:4000/api/auth/logout`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Logout successfully !");
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/user/user-login");
        setLoader(false);
      } else {
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/user/user-login");
        toast.error("Logout failed try again !");
      }
    } catch (error) {
      dispatch(removeToken());
      dispatch(rem_AdDetails());
      router.push("/user/user-login");
      console.error("Error occurred:", error);
      // toast.error(error?.response?.data?.error || "Invalid token !");
      toast.success("Logout successfully !");
    }
  };

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
        setGetUser(response?.data?.getaUser?.wishlist);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  return (
    <>
      {isLoader && <Loader />}

      <div className="navbar bg-base-100 flex justify-between border shadow-md">
        <div className="flex  justify-between w-full">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/user/user-dashboard">Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>

          {/* =================2================ */}
          <div className="navbar-center text-center">
            <div className="flex gap-5">
              <a
                href="/user/user-dashboard"
                className="btn btn-ghost text-xl  p-0"
              >
                Home
              </a>
              <a href="/user/colleges" className="btn btn-ghost text-xl  p-0">
                College
              </a>
            </div>
          </div>

          {/* =================3================ */}

          <div className="flex ">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    ></path>
                  </svg>
                  <div>
                    <span className="badge badge-sm indicator-item text-black">
                      {getUser.length}
                    </span>
                  </div>
                </div>
              </div>

              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    {getUser.length} College
                  </span>
                  <div className="card-actions">
                    <a href="/user/user-favoritelist">
                      <button className="border p-2 bg-black text-white btn-primary btn-block">
                        View Favorites List
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    {/* <Link to="/user/update-password"> */}
                    <button onclick="location.href='/user/update-password'">
                      Setting
                    </button>

                    {/* </Link> */}
                  </li>
                  <li>
                    <button onClick={handleSignout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProtectedRoute(Navbar);
