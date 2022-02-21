import axios from "axios";

export const signUpAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_USER_REQUEST",
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const respose = await axios.post("http://192.168.1.72:3000/signup", config);
    dispatch({
      type: "REGISTER_USER_SUCCESS",
      payload: {
        success: respose.data,
      },
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAIL",
      payload: error.respose.data.message,
    });
  }
};
