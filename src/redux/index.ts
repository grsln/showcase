import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./slice";

const rootReducers = combineReducers({
  showcase: toolkitSlice,
});
export const store = configureStore({
  reducer: rootReducers,
});
