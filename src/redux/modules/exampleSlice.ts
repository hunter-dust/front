import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 1,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: {},
});

export const { incrementByAmount } = exampleSlice.actions;
export default exampleSlice.reducer;
