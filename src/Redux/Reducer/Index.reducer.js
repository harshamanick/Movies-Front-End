import { combineReducers } from "redux";
import MovieReducer from "./Movie.reducer.js";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  movies: MovieReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Optional: Enable devTools only in non-production environments
});

export default store;
