import axios from "axios";

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

export const register = ({ name, email, password }) => async (
  dispatch,
  getState
) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post("/users/signup", {
      name,
      email,
      password,
    });
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
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    const response = await axios.post("/users/login");
    dispatch(logoutSuccess(response.data));
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};