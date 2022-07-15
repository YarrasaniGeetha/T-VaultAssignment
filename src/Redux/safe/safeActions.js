import * as actionTypes from "./safeTypes";
// import { createSlice } from "@reduxjs/toolkit";

export const addSafe = (safeValues) => {
  // console.log(safeValues);
  return {
    type: actionTypes.ADD_SAFE,
    payload: safeValues,

    // id: new Date().getTime.toString(),
    // safeValues: safeValues,
  };
};
export const deleteSafe = (id) => {
  //console.log("hi");
  return {
    type: actionTypes.DELETE_SAFE,
    payload: id,
  };
};
export const activeSafeDelete = (ids) => {
  return {
    type: actionTypes.DELETE_ACTIVE_ITEM,
    payload: ids,
  };
};
export const editSafe = (safeValues) => {
  // const safeSlice = createSlice({
  //   editSafe: safeValues,
  // });
  return {
    type: actionTypes.EDIT_SAFE,
    payload: safeValues,
  };
};
export const addSecret = (secretValue) => {
  return {
    type: actionTypes.ADD_SECRET,
    payload: secretValue,
  };
};
export const activeIndex = (active) => {
  return {
    type: actionTypes.ACTIVE_INDEX,
    payload: active,
  };
};
