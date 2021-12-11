import * as types from "../constants/user";
import { SAVE_USER_QUESTION_SUCCESS } from "../constants/question";

const initialState = {
  loading: false,
  registering: false,
  error: null,
  users: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case SAVE_USER_QUESTION_SUCCESS:
      const { author } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [author]: {
            ...state.users[author],
            questions: [
              ...state.users[author].questions,
              ...[action.payload.id],
            ],
          },
        },
      };

    case types.ADD_USER_REQUEST:
      return {
        ...state,
        registering: true,
      };

    case types.ADD_USER_FAILED:
      return {
        ...state,
        registering: false,
        error: action.payload,
      };

    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        registering: false,
        users: {
          ...state.users,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
