import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";
import { v4 } from "uuid";
import dayjs from "dayjs";

const initialState: Note[] = [
  {
    title: "Note 1 title",
    content: "Note 1 content",
    tags: [{ tag: "coding", id: v4() }],
    color: "#cce0ff",
    priority: "high",
    isPinned: false,
    isRead: false,
    date: "2023/11/03 20:11:33",
    createdTime: new Date("2023/11/01 14:05:22").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Note 2 title",
    content: "Note 2 content",
    tags: [{ tag: "exercise", id: v4() }],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "2023/11/03 21:20:45",
    createdTime: new Date("2023/11/02 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  },
];

const notesSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    createNote: (state, action) => {
      state.push({
        title: action.payload.title,
        content: action.payload.content,
        tags: action.payload.tags,
        color: "",
        priority: "",
        isPinned: false,
        isRead: false,
        date: dayjs(new Date()).format("YYYY/MM/DD hh:mm:ss"),
        createdTime: new Date().getTime(),
        editedTime: null,
        id: v4(),
      });
    },
    clickPin: (state, action) => {
      state.map((list) => {
        if (list.id === action.payload) {
          list.isPinned = !list.isPinned;
        }
      });
    },
  },
});

export const { createNote, clickPin } = notesSlice.actions;

export default notesSlice.reducer;
