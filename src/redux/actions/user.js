import * as types from "../constants/user";
import { _getUsers, _saveUser } from "../../api/index";

const getUsersRequest = (promise) => {
  return {
    type: types.GET_USERS_REQUEST,
    payload: promise,
  };
};

const getUsersFailed = (error) => {
  return {
    type: types.GET_USERS_FAILED,
    payload: error,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: types.GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    const promise = _getUsers();
    dispatch(getUsersRequest(promise));
    promise
      .then((users) => {
        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(getUsersFailed(error));
      });
    return promise;
  };
};

const addUserRequest = (promise) => {
  return {
    type: types.ADD_USER_REQUEST,
    payload: promise,
  };
};

const addUserFailed = (error) => {
  return {
    type: types.ADD_USER_FAILED,
    payload: error,
  };
};

const addUserSuccess = (user) => {
  return {
    type: types.ADD_USER_SUCCESS,
    payload: user,
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    const promise = _saveUser(data);
    dispatch(addUserRequest(promise));
    promise
      .then((user) => {
        dispatch(addUserSuccess(user));
      })
      .catch((error) => {
        dispatch(addUserFailed(error));
      });
    return promise;
  };
};
