import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkUser: (state, action) => {
      state.token = action.payload;
    },
    removeUser: (state, _) => {
      state.token = "";
    }
  },
});

export const { checkUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
