import React from "react";

const UpdateMmodule = () => {
  return (
    <div>
     <div className="flex justify-center items-center border border-[#f3f3f3] rounded-lg bg-white 2xl:px-5  2xl:h-[50px] 2xl:my-5 xl:px-4  xl:h-[40px] xl:my-4 lg:px-3  lg:h-[35px] lg:my-2 md:px-2  md:h-[30px] md:my-2 sm:px-1 sm:h-[25px] sm:my-2 px-1 h-[25px] my-2">
        <h2 className="custom_heading_text font-semibold">Update College</h2>
      </div>
      <form
  
        className="flex flex-wrap bg-white border rounded-lg 2xl:p-2 xl:p-2 lg:p-1 md:p-2 p-1 mx-auto"
      >
        {/* ------1.College Name----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Name</label>
          <input
            maxLength={100}
            required
            type="text"
            name="name"
            className="custom_inputt"
          />
        </div>

        {/* ------2. College location----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Location</label>
          <input
            type="text"
            name="location"
            className="custom_inputt"
            required
            maxLength={200}
          />
        </div>

        {/* ------3. College website----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Website</label>
          <input
            type="text"
            name="website"
            className="custom_inputt"
            required
            maxLength={64}
          />
        </div>

        {/* ------4. College phone----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Phone.no</label>
          <input
            type="text"
            name="phone"
            className="custom_inputt"
            required
            pattern="[0-9]*"
            title="Please enter only numbers"
          />
        </div>

        {/* ------5. College email----- */}
        <div className="w-1/2">
          <label className="custom_input_label">College Email</label>
          <input type="email" name="email" className="custom_inputt" required />
        </div>

        <div className="w-full">
          <button type="submit" className="custom_btn">
          Update College
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMmodule;
