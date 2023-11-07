import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags/tagsSlice";
import selectedTagReducer from "./selectedTag/selectedTagSlice";
import isEditingReducer from "./isEditing/isEditingSlice";
import editNoteTagReducer from "./editNote/editNoteTagSlice";
import notesReducer from "./notes/notesSlice";
import archiveNotesReducer from "./archiveNotes/archiveNotesSlice";
import trashNotesReducer from "./trashNotes/trashNotesSlice";
import isModifyingReducer from "./isModifying/isModifyingSlice";

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    selectedTag: selectedTagReducer,
    isEditing: isEditingReducer,
    isEditingNoteTag: editNoteTagReducer,
    notes: notesReducer,
    archiveNotes: archiveNotesReducer,
    trashNotes: trashNotesReducer,
    isModifying: isModifyingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
