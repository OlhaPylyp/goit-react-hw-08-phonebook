import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const user =createReducer({name:null, email:null}, {})
const token=createReducer(null, {});
const error=createReducer(null, {})
export default combineReducers ({
    user,
    token,
    error,
}

)