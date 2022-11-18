import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "redux/modules/LoginSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;
