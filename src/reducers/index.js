import { combineReducers } from "redux";
import postReducer from "./PostReducer";
import userReducer from "./UserReducer";

export default combineReducers({
	// trickMe: () => "removing the error" // a trick to remove the error by not having reducer set
	post: postReducer,
	user: userReducer
});
