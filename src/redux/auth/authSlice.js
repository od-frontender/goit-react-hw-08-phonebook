import { createSlice } from "@reduxjs/toolkit";
import userActions from "./authAction";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [userActions.userRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userActions.userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [userActions.userLogOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [userActions.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [userActions.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [userActions.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
