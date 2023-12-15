let initialState = {
  isAuth: false,
  token: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN": {
      return {
        isAuth: true,
        token: payload,
      };
    }

    case "LOGOUT": {
      return {
        isAuth: false,
        token: "",
      };
    }

    default:
      return state;
  }
};
