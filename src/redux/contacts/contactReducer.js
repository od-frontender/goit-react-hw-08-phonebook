import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import contactsActions from "./contactsActions";
const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});
export default combineReducers({
  filter,
});
