export default (state = [], action) => {
	// return state + action
	// keeping a reducer pure - using state and action
	// if (action.type === "GET_DATA") {
	// 	return action.payload;
	// }
	// return state;
	switch (action.type) {
		case "GET_DATA":
			return action.payload;
		default:
			return state;
	}
};
