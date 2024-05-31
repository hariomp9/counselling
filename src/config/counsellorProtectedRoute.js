"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeToken } from "@/redux/adminSlice/authSlice";
import Loader from "@/app/component/loader";
import config from "@/config";

const counsellorProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const counsellorAuthToken = useSelector((state) => state.auth?.token);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      const checkAuth = () => {
        if (!counsellorAuthToken) {
          router.push("/counsellor/counsellor-login");
        }
        if (counsellorAuthToken) {
          verify();
        }
      };

      checkAuth();
    }, [counsellorAuthToken, router]);

    const verify = async () => {
      setIsLoading(true);
      setIsAuth(false);
      try {
        const res = await axios.get(
          `${config.baseURL}/api/counselor/verifyCounselor/${counsellorAuthToken}`
        );
        if (res?.data?.data === null) {
          router.push("/counsellor/counsellor-login ");
          dispatch(removeToken());
        }
        if (res.status === 200) {
          setIsAuth(true);
          setIsLoading(false);
          return;
        } else {
          dispatch(removeToken());
          router.push("/counsellor/counsellor-login");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error occurred:", error);
        router.push("/counsellor/counsellor-login");
        setIsLoading(false);
      }
    };

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : counsellorAuthToken && isAuth ? (
          <WrappedComponent {...props} />
        ) : null}
      </>
    );
  };
  return Wrapper;
};

export default counsellorProtectedRoute;
