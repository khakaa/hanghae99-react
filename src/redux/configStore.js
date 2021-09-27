import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import wordList from "./modules/wordList";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ wordList });
const store = createStore(rootReducer, enhancer);

export default store;
