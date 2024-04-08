import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sideLogo from "../../../public/images/an-logo.svg";
import home from "./assets/home-icn.svg";
import user from "./assets/user-icn.svg";
import admin from "./assets/admin-icn.svg";
import student from "./assets/student-icn.svg";
import counsellor from "./assets/counsellor-icn.svg";
import college from "./assets/college-icn.svg";
import notify from "./assets/notify-icn.svg";
import { removeToken, rem_AdDetails } from "@/redux/adminSlice/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const SuperSidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state?.auth);
  const [isLoader, setLoader] = useState(false);

  const handleSignout = async () => {
    setLoader(true);

    try {
      const res = await axios.get(`api/auth/superAdminLogout`, {
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
        router.push("/super-admin/superadmin-login");
        setLoader(false);
      } else {
        dispatch(removeToken());
        dispatch(rem_AdDetails());
        router.push("/super-admin/superadmin-login");
        toast.error("Logout failed try again !");
      }
    } catch (error) {
      dispatch(removeToken());
      dispatch(rem_AdDetails());
      router.push("/super-admin/superadmin-login");
      console.error("Error occurred:", error);
      // toast.error(error?.response?.data?.error || "Invalid token !");
      toast.success("Logout successfully !");
    }
  };
  return (
    <>
      <section>
        <div className="hidden lg:block 2xl:w-[130px] xl:w-[110px] lg:w-[80px] border h-screen">
          <div className="flex justify-center border border-x-0   ">
            <Link href="/user/user-dashboard">
              <Image
                src={sideLogo}
                className="mx-auto 2xl:w-[110px] 2xl:h-[42.57px] xl:w-[80px] w-[60px] h-auto  my-[15px]"
              />
            </Link>
            <hr />
          </div>
          <div className="flex justify-center mt-6 2xl:mt-[30px] mx-4">
            <div className="w-4/6 hover:text-[#2083C4]">
              <Link href="/super-admin">
                <Image src={home} className="w-[18px] h-[20px] mx-auto" />
                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px] ">
                  Home
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-[40px] mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <Link href="/super-admin/create-user">
                <Image src={user} className="w-[18px] h-[20px] mx-auto" />

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  {" "}
                  Manage User
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-[40px] mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <Link href="/super-admin">
                <Image src={admin} className="w-[18px] h-[20px] mx-auto" />

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  Admin
                </p>
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-center  2xl:mt-[40px] mt-5">
              <div className="w-4/6 hover:text-[#2083C4]">
                <Link href="/super-admin/approve">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor "
                    class="w-6 h-6  mx-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                    Approve
                  </p>
                </Link>
              </div>
            </div> */}
          <div className="flex justify-center 2xl:mt-[40px] mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <Link href="/super-admin/student-list">
                <Image src={student} className="w-[18px] h-[20px] mx-auto" />

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  {" "}
                  Student
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-[40px] mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <Link href="/super-admin/page2">
                <Image src={counsellor} className="w-[18px] h-[20px] mx-auto" />

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  {" "}
                  Counsellor
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-[40px] mt-5">
            <div className="w-4/6 hover:text-[#2083C4]">
              <Link href="/super-admin/page2">
                <Image src={college} className="w-[18px] h-[20px] mx-auto" />

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  {" "}
                  Colleges
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-[40px] mt-5">
            <div className="w-4/6  hover:text-[#2083C4]">
              <Link href="/super-admin/page3">
                <Image src={notify} className="w-[18px] h-[20px] mx-auto" />

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  Notifications
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-[40px] mt-5">
            <div className="w-4/6 flex justify-center hover:text-[#2083C4]">
              <Link href="/counsellor/update-password">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-gear w-6 h-6 mx-auto"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                </svg>
                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  {" "}
                  Setting
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center  2xl:mt-[40px] mt-5">
            <div className="w-4/6 flex justify-center hover:text-[#2083C4]">
              <button onClick={handleSignout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>

                <p className="2xl:text-[13px] text-[10px] montserrat-countinue text-center 2xl:mt-[8px] xl:mt-[3px]">
                  {" "}
                  Logout
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuperSidebar;
