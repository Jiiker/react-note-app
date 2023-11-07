import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";

const initialState: Note[] = [];

const archiveNotesSlice = createSlice({
  name: "archiveNotesList",
  initialState,
  reducers: {
    addArchive: (state, action) => {
      state.push(action.payload);
    },
    undoArchive: (state, action) => {
      state = state.filter((data) => data.id !== action.payload);
      return state;
    },
  },
});

export const { addArchive, undoArchive } = archiveNotesSlice.actions;
export default archiveNotesSlice.reducer;
