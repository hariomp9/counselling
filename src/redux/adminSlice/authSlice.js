"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  ad_details: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserId: (state, action) => {
      state._id = action.payload;
    },
    removeUserId: (state, action) => {
      state._id = null;
    },
    removeToken: (state, action) => {
      state.token = null;
    },
    adDetails: (state, action) => {
      state.ad_details = action.payload;
    },
    rem_AdDetails: (state, action) => {
      state.ad_details = null;
    },
    superAdminDetails: (state, action) => {
      state.superAdminDetails = action.payload;
    },
    userCourse: (state, action) => {
      state.userCourse = action.payload;
    },
    removeCourse: (state, action) => {
      state.userCourse = null;
    },
  },
});

export const {
  setUserId,
  setToken,
  removeToken,
  adDetails,
  superAdminDetails,
  rem_AdDetails,
  userCourse,
  removeCourse,
  removeUserId,
} = authSlice.actions;

export default authSlice.reducer;
