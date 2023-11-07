import { createSlice } from "@reduxjs/toolkit";

const isModifyingSlice = createSlice({
  name: "isModifying",
  initialState: {
    isModifying: false,
  },
  reducers: {
    onOffModifying: (state, action) => {
      state.isModifying = action.payload;
    },
  },
});

export const { onOffModifying } = isModifyingSlice.actions;
export default isModifyingSlice.reducer;
