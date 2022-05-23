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

const initialState = {
  user: null,
  load: true,
  auth: false,
  errors: [],
  allUsers: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAIL:
      return {
        ...state,
        errors: payload.errors,
      };
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.newUser,
        auth: true,
        load: false,
      };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.foundUser,
        auth: true,
        load: false,
      };
    case LOADING:
      return {
        ...state,
        load: true,
      };
    case GET_CURRENT:
      return {
        ...state,
        user: payload.user,
        auth: true,
        load: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        load: false,
        user: null,
      };
    // case UPDATE_USER:
    //   return {
    //     ...state,
    //     user: payload.user,
    //     load: false,
    //   };
    case GET_USERS:
      return {
        ...state,
        allUsers: payload.allUsers,
        load: false,
      };
    case DELETE_USER:
      return {
        allUsers: payload.allUsers.filter((user) => user._id !== payload._id),
      };
    case UPDATE_AVATAR:
      return {
        ...state,
        user: payload.user,
        load: false,
      };
    default:
      return state;
  }
};

export default userReducer;
