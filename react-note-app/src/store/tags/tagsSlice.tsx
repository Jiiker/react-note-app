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
      state.push({ tag: action.payload, id: v4() });
    },
    delList: (state, action) => {
      state.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addList, delList } = tagsSlice.actions;

export default tagsSlice.reducer;
