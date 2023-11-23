import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Reducers/LoginReducer";
import HomePageReducer from "../Reducers/HomePageReducer";
import ClientReducer from "../Reducers/ClientReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  homepage: HomePageReducer,
  client: ClientReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
