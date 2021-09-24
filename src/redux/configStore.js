import { createStore, combineReducers } from "redux";
import wordList from "./modules/wordList";

const rootReducer = combineReducers({ wordList });

const store = createStore(rootReducer);

export default store;
