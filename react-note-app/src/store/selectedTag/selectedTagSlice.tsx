import { createSlice } from "@reduxjs/toolkit";

const selectedTagSlice = createSlice({
  name: "tag",
  initialState: {
    selectedTag: "Notes",
  },
  reducers: {
    clickTag: (state, action) => {
      state.selectedTag = action.payload;
    },
  },
});

export const { clickTag } = selectedTagSlice.actions;

export default selectedTagSlice.reducer;
