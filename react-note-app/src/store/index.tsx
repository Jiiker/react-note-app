import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags/tagsSlice";
import selectedTagReducer from "./selectedTag/selectedTagSlice";

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    selectedTag: selectedTagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
