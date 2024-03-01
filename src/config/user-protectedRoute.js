"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToken, removeToken, adDetails } from "@/redux/adminSlice/authSlice";
import Loader from "@/app/component/loader";

const UserProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const userAuthToken = useSelector((state) => state.auth?.token);
    // const loading = true
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    console.log(userAuthToken);

    useEffect(() => {
      const checkAuth = () => {
        if (!userAuthToken) {
          router.push("/user/user-login");
        }
        if (userAuthToken) {
          verify();
        }
      };

      checkAuth();
    }, [userAuthToken, router]);

    const verify = async () => {
      setIsLoading(true);
      setIsAuth(false);
      try {
        const res = await axios.get(
          `http://localhost:4000/api/auth/verifyUserToken/${userAuthToken}`
        );
        if (res?.data?.data === null) {
          router.push("/user/user-login ");
          dispatch(removeToken());
        }
        if (res.status === 200) {
          setIsAuth(true);
          setIsLoading(false);
          return;
        } else {
          dispatch(removeToken());
          router.push("/user/user-login");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error occurred:", error);
        router.push("/user/user-login");
        setIsLoading(false);
      }
    };

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : userAuthToken && isAuth ? (
          <WrappedComponent {...props} />
        ) : null}
      </>
    );
  };

  return Wrapper;
};

export default UserProtectedRoute;
