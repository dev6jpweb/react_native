import { combineReducers } from "redux";
import { signUpReducer } from "./signUpReducer";
const allReducers = combineReducers({
  signUp: signUpReducer,
});

export default allReducers;
