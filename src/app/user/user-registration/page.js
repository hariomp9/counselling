"use client";
import React, { useState } from "react";
import axios from "axios";
import Loader from "@/app/component/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const UserRegistration = () => {
  const router = useRouter();
  const [isLoader, setLoader] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    role: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        studentDetails
      );
      if (response.status === 201) {
        toast.success("Registration Successful!");
        router.push("/user/user-login");
      } else {
        toast.error("Failed to Register. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while registering.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      {isLoader && <Loader />}
      <section className="py-10 px-5">
        <div className="mx-auto w-1/2">
          <div className="flex justify-center items-center border border-gray-300 rounded-lg bg-white px-5 h-10 my-5">
            <h2 className="font-semibold">Student Registration</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-lg px-2 py-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname" className="block">
                  Student First Name
                </label>
                <input
                  value={studentDetails.firstname}
                  onChange={inputHandler}
                  maxLength={100}
                  required
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="lastname" className="block">
                  Student Last Name
                </label>
                <input
                  value={studentDetails.lastname}
                  onChange={inputHandler}
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  maxLength={200}
                />
              </div>

              <div>
                <label htmlFor="email" className="block">
                  Student Email
                </label>
                <input
                  value={studentDetails.email}
                  onChange={inputHandler}
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  maxLength={64}
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block">
                  Student Phone.no
                </label>
                <input
                  value={studentDetails.mobile}
                  onChange={inputHandler}
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                  pattern="[0-9]*"
                  title="Please enter only numbers"
                />
              </div>

              <div>
                <label htmlFor="password" className="block">
                  Student Password
                </label>
                <input
                  value={studentDetails.password}
                  onChange={inputHandler}
                  type="password"
                  id="password"
                  name="password"
                  className="border rounded-lg px-3 py-2 w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="role" className="block">
                  Select your role:
                </label>
                <select
                  id="role"
                  name="role"
                  value={studentDetails.role}
                  className="border rounded-lg px-3 py-2 w-full"
                  onChange={inputHandler}
                >
                  <option value={studentDetails.student}>Student</option>
                  <option value={studentDetails.parent}>Parent</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md"
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

export default UserRegistration;
