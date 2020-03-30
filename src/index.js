import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const root = document.getElementById("root");

// how we hook up a middleware and thunk to a store
const store = createStore(reducers, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	root
);
