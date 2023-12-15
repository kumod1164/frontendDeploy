let initialState = {
  data: [],
};

export const employeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "add": {
      return {
        data: payload,
      };
    }

    case "post": {
      return {
        data: payload,
      };
    }
    case "patch": {
      return {
        data: payload,
      };
    }
    case "delete": {
      return {
        data: payload,
      };
    }

    default:
      return state;
  }
};
