import axios from "axios";

import {
  ADD_QPQ,
  DELETE_QPQ,
  GET_QPQ,
  GET_QPQS,
  LOADING,
  UPDATE_QPQ,
  USER_QPQS,
} from "../actionTypes/qpqAction Types";

//add qpq
export const add_qpq = (formData, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const config = {
      headers: {
        authentification: localStorage.getItem("token"),
        // "Content-Type": "multipart/form-data",
      },
    };

    await axios.post("/api/quidproquos/addquiproquo", formData, config);
    // console.log("formData", formData);
    dispatch(get_qpqs());
    navigate("/profile");
    // Navigate("/profile");
    // dispatch(setAlert("QPQ Created", "success"));
  } catch (error) {
    console.log(error);
  }
};
//get quipropquo
export const get_qpq = (_id, getQuidproquo) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/quidproquos/${_id}`, getQuidproquo);
    dispatch({
      type: GET_QPQ,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//get user's quidproquos
export const user_qpqs = (userId, userQuidproquos) => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      `/api/quidproquos/profile/${userId}`,
      userQuidproquos,
      config
    );
    dispatch({ type: USER_QPQS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
//get quipropquosssss
export const get_qpqs = (allquidproquos) => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      "/api/quidproquos/allquidproquos",
      allquidproquos,
      config
    );
    dispatch({
      type: GET_QPQS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//update qpq
export const update_qpq = (_id, message) => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.put(
      `/api/quidproquos/updatequidproquo/${_id}`,
      config
    );

    dispatch({ type: UPDATE_QPQ, payload: { message, _id } });
  } catch (error) {
    console.log(error);
  }
};

//delete qpq
export const delete_qpq = (_id) => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.delete(
      `/api/quidproquos/deletequidproquo/${_id}`,

      config
    );

    dispatch(get_qpqs());
  } catch (error) {
    console.log(error);
  }
};

//like qpq

//get QPQ
