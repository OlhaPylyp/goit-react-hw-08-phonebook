import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth_actions";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

// export const token = () => async (dispatch) => {
//   //   dispatch(());
//   //   try {
//   //     const { data } = await axios.get('/contacts');
//   //     dispatch( registerSuccess(data));
//   //   } catch (error) {
//   //     dispatch(registerError(error));
//   //   }
//   // axios
//   //   .get("/contacts")
//   //   .then(({ data }) => dispatch(getContactsSuccess(data)))
//   //   .catch((err) => dispatch(getContactsFailure(err)));
// };
const token={
  set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`;},
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
}
export const register = ({ name, email, password }) => async (
  dispatch
) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post("/users/signup", {
      name,
      email,
      password,
    });
    token.set(response.data.token) 
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerError(err.message));
  }
};
export const login = ({ name, email, password }) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("/users/login", {
      name,
      email,
      password,
    });
    token.set(response.data.token) 
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await axios.post("/users/logout");
    token.unset() 
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};
export const getUser =()=> async (dispatch, getState) => {
  const {auth: {token:persistedToken },}=getState()
  if (!persistedToken ) {
    return;
  }
  token.set(persistedToken) 
  dispatch(getCurrentUserRequest());
  try {
    await axios.post("/users//users/current");
    token.unset() 
    dispatch(getCurrentUserSuccess());
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};