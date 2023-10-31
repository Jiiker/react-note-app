import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags/tagsSlice";
import selectedTagReducer from "./selectedTag/selectedTagSlice";
import isEditingReducer from "./isEditing/isEditingSlice";

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    selectedTag: selectedTagReducer,
    isEditing: isEditingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
