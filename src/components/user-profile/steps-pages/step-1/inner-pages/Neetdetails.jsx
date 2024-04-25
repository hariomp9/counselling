import React from "react";
import HeadTitle from "../HeadTitle";

const Neetdetails = () => {
    return (
        <>
            <HeadTitle title="NEET Details" />

            <div className="grid grid-cols-3 gap-[24px] py-[16px] ">
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">Full Name* (As per NEET Admit/Score Card)</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                </div>
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">Mobile Number*</label>
                    <input type="text" placeholder="Enter mobile number" name="name" />
                </div>
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">WhatsApp Number for Updates*</label>
                    <input type="text" placeholder="Enter mobile number" name="name" />
                </div>
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">NEET Registration No</label>
                    <input type="text" placeholder="Enter detail" name="name" />
                </div>
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">Roll No.</label>
                    <input type="text" placeholder="Enter detail" name="name" />
                </div>
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">Marks</label>
                    <input type="text" placeholder="Enter detail" name="name" />
                </div>
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">All India Rank</label>
                    <input type="text" placeholder="Enter detail" name="name" />
                </div>
                <div className="col-span-1 profile_input_box">
                    <label htmlFor="name">State Rank</label>
                    <input type="text" placeholder="Enter detail" name="name" />
                </div>
            </div>
        </>
    )
};

export default Neetdetails;
