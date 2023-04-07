import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const rootReducer = createSlice({
  name: "rootReducer",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => action.payload,
  },
});

export const { createUser } = rootReducer.actions;
