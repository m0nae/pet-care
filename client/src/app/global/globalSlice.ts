import { createSlice } from "@reduxjs/toolkit";

interface initialStateI {
  value: number;
}

const initialState: initialStateI = {
  value: 0,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});
