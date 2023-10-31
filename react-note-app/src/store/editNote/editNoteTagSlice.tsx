import { createSlice } from "@reduxjs/toolkit";

const editNoteTagSlice = createSlice({
  name: "editNoteTag",
  initialState: {
    editNoteTag: false,
  },
  reducers: {
    onOffEditingNoteTag: (state, action) => {
      state.editNoteTag = action.payload;
    },
  },
});

export const { onOffEditingNoteTag } = editNoteTagSlice.actions;
export default editNoteTagSlice.reducer;
