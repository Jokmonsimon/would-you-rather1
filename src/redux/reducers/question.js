import * as types from "../constants/question";

const initialState = {
  loading: false,
  requesting: false,
  error: null,
  questions: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_QUESTIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };

    case types.SAVE_QUESTION_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.SAVE_QUESTION_FAILED:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.SAVE_QUESTION_SUCCESS:
      return {
        ...state,
        requesting: false,
        questions: {
          ...state.questions,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default questionReducer;
