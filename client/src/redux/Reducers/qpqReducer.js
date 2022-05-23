import {
  ADD_QPQ,
  DELETE_QPQ,
  GET_QPQ,
  GET_QPQS,
  LOADING,
  UPDATE_QPQ,
  USER_QPQS,
} from "../actionTypes/qpqAction Types";

const initialState = {
  quidproquos: [],
  quidproquo: {},
  load: false,
  auth: true,
  userQuidproquos: [],
};

const qpqReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        load: true,
      };
    case ADD_QPQ:
      return {
        ...state,
        quidproquos: [...state.quidproquos, payload.savedQuidproquo],
        load: false,
      };
    case GET_QPQ:
      return {
        ...state,
        quidproquo: payload.getQuidproquo,
        load: false,
      };
    case GET_QPQS:
      return {
        ...state,
        quidproquos: payload.allquidproquos,
      };
    case USER_QPQS:
      return {
        ...state,
        userQuidproquos: payload.userQuidproquos,
      };
    case UPDATE_QPQ:
      return state.map((quidproquos) => {
        if (quidproquos._id === payload._id) {
          return {
            ...quidproquos,
            message: payload.message,
          };
        } else return quidproquos;
      });
    case DELETE_QPQ:
      return {
        ...state,
        quidproquos: payload.allquidproquos.filter(
          ({ _id }) => _id !== payload._id
        ),
      };
    default:
      return state;
  }
};
export default qpqReducer;
