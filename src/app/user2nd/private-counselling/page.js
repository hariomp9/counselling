import React from "react";
import UserSidebar from "../userSidebar";
import UserNavbar from "../userNav";

const PrivateCounselling = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="">
            <UserSidebar />
          </div>
          <div className="w-full">
            <UserNavbar />

            <section>PrivateCounselling</section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateCounselling;
