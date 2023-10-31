import { createSlice } from "@reduxjs/toolkit";

const isEditingSlice = createSlice({
  name: "isEditing",
  initialState: {
    isEditing: false,
  },
  reducers: {
    onOffEditing: (state, action) => {
      state.isEditing = action.payload;
    },
  },
});

export const { onOffEditing } = isEditingSlice.actions;
export default isEditingSlice.reducer;
