import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { registerSuccess,registerError,loginSuccess,loginError } from "../auth/auth_actions";

const user = createReducer(
  { name: null, email: null },
  { [registerSuccess]: (_, {payload}) => payload.user,[loginSuccess]: (_, {payload}) => payload.user }
);
const token = createReducer(null, {[registerSuccess]:(_,{payload}) => payload.token,[loginSuccess]:(_,{payload}) => payload.token
 },
);
const error = createReducer(null, {[registerError]:(_,{payload}) => payload,[loginError]:(_,{payload}) => payload
});
export default combineReducers({
  user,
  token,
  error,
});
