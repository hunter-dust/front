import { configureStore } from "@reduxjs/toolkit";
import example from "redux/modules/exampleSlice";

export const store = configureStore({
  reducer: {
    example,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
