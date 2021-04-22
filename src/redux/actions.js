import * as actionTypes from "./types";

export const login = (username, password) => {
  return {
    type: actionTypes.SIGN_IN,
    payload: {
      username: username,
      password: password,
    },
  };
};
