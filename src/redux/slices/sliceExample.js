import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // key: value
};

const sliceExample = createSlice({
  name: "sliceExampleName",
  initialState,
  reducers: {
    someFunc(state, { payload }) {
      // some action
    },
  },
});

// export const { someFunc } = sliceExample.actions;

// export const variableNameSelector = state => state.sliceExampleName.key;

// export default sliceExample.reducer;
