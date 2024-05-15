import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../file/count"

export const store = configureStore({
  reducer: {
    countAction: countReducer,
  },
});