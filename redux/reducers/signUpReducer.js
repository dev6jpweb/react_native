export const signUpReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        success: action.payload.success,
      };

    case "REGISTER_USER_FAILURE":
      return {
        error: action.payload.error,
      };
  }
};
