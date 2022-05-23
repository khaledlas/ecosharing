import axios from "axios";
import { useDispatch } from "react-redux";
import {
  DELETE_USER,
  FAIL,
  GET_CURRENT,
  GET_USERS,
  LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_AVATAR,
  UPDATE_USER,
} from "../actionTypes/userActionTypes";

//Register
export const register = (formData, Navigate) => async (dispatch) => {
  dispatch({ type: LOADING });

  try {
    const res = await axios.post("/api/auth/register", formData);

    dispatch({ type: REGISTER, payload: res.data });
    Navigate("/profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

//Login
export const login = (user, Navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/auth/login", user);
    dispatch({ type: LOGIN, payload: res.data });

    Navigate("/profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
// get current
export const getCurrent = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("/api/auth/current", config);
    //Changement de res.data à FormData
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//logout
export const logout = () => ({ type: LOGOUT });

//get all users
export const getAllUsers = (allUsers) => async (dispatch) => {
  try {
    const res = await axios.get("/api/auth/users", allUsers);
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
//update user
export const update_user = (id, updateUser, navigate) => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.put(`/api/auth/update/${id}`, updateUser, config);

    // dispatch({ type: UPDATE_USER, payload: res.data });
    dispatch(getCurrent());
  } catch (error) {
    console.log(error);
  }
};
//Delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/auth/deleteuser/${id}`);
    dispatch(getAllUsers());
  } catch (error) {
    console.log(error);
  }
};
//update avatar
export const update_picture = (_id, formData, navigate) => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.put(`/api/auth/addavatar/${_id}`, formData, config);

    dispatch({ type: UPDATE_AVATAR, payload: res.data });
    navigate("/profile");
  } catch (error) {
    console.log(error);
  }
};
