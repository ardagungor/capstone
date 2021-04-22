import * as actionTypes from "./types";

const initialState = {
  users: [
    {
      username: "arda",
      password: "arda",
    },
    {
      username: "omer",
      password: "omer",
    },
    {
      username: "guney",
      password: "guney",
    },
  ],
  isLogged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      const credCheck =
        action.payload.username === "asd" && action.payload.password === "asd";
      return {
        ...state,
        isLogged: true,
      };

    default:
      return state;
  }
};

export default reducer;
