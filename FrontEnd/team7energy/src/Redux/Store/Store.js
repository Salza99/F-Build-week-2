import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Reducers/LoginReducer";
import HomePageReducer from "../Reducers/HomePageReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  homepage: HomePageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
