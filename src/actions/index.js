import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsUsers = () => async (dispatch, getState) => {
	console.log("--- starts fetchData");
	await dispatch(fetchData());
	console.log("--- ends fetchData");

	console.log("--- get state");
	console.log(getState().post);
	console.log("--- end  state");

	console.log("--- get ID");
	const userIds = _.uniq(_.map(getState().post, "userId"));
	userIds.forEach((id) => fetchUser(id));
	console.log(userIds);
	console.log("--- end ID");
};

export const fetchData = () => async (dispatch) => {
	const response = (await jsonPlaceHolder.get("/posts")).data;
	dispatch({
		type: "GET_DATA",
		payload: response
	});
};

export const fetchUser = (id) => async (dispatch) => {
	const response = (await jsonPlaceHolder.get(`/users/${id}`)).data;
	dispatch({
		type: "GET_USER",
		payload: response
	});
};

// using lodash

// export const fetchDataUser = (id) => (dispatch) => {
// 	_fetchUser(id, dispatch);
// };

// // function that returns a function - only one time
// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = (await jsonPlaceHolder.get(`/users/${id}`)).data;
// 	dispatch({
// 		type: "GET_USER",
// 		payload: response
// 	});
// }); // private function
