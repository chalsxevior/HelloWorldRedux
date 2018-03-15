import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

const composeEnhancers = composeWithDevTools({});
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
