import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const tagsSlice = createSlice({
  name: "tags",
  initialState: [
    { tag: "coding", id: v4() },
    { tag: "exercise", id: v4() },
  ],
  reducers: {
    addList: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addList } = tagsSlice.actions;

export default tagsSlice.reducer;
