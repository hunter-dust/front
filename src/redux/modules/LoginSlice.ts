import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../modules/instance";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  isLoading: boolean;
}

const initialState: LoginState = {
  isLoading: false,
};

export const loginToNaver = createAsyncThunk("login/loginToNaver", async (payload, thunkAPI) => {
  try {
    const res = await instance.get(`naver`);
    return thunkAPI.fulfillWithValue(res.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginToNaver.fulfilled, (state: LoginState) => {
      state.isLoading = true;
    });
  },
});
export default loginSlice.reducer;
