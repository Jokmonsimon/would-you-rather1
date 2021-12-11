import * as types from "../constants/login";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case types.LOG_OUT:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
