import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";

const initialState: Note[] = [];

const trashNotesSlice = createSlice({
  name: "trashNotesList",
  initialState,
  reducers: {
    addTrash: (state, action) => {
      state.push(action.payload);
    },
    undoTrash: (state, action) => {
      state = state.filter((data) => data.id !== action.payload);
      return state;
    },
    deleteTrashNote: (state, action) => {
      state = state.filter((data) => data.id !== action.payload);
      return state;
    },
  },
});

export const { addTrash, undoTrash, deleteTrashNote } = trashNotesSlice.actions;
export default trashNotesSlice.reducer;
