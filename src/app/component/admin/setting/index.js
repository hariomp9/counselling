import React from "react";
import ChangePassword from "./update-password";

const Setting = () => {
  return (
    <>
      <section className="py-[30px] px-[20px] mt-[20px] lg:mt-0">
        <div className="collapse collapse-arrow border mt-10">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Profile</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Update Password
          </div>
          <div className="collapse-content">
            <ChangePassword/>
          </div>
        </div>
        {/* <div className="collapse collapse-arrow border mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
        
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Setting;
