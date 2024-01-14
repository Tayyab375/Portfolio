export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const initialState = {
  name: "",
  email: "",
  message: "",
  errors: {
    nameError: "",
    emailError: "",
    messageError: "",
  },
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field + "Error"]: "",
        },
      };
    case "VALIDATE":
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors,
        },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
