import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { clickPin, deleteNote, modifyingNote } from "../store/notes/notesSlice";
import { addArchive } from "../store/archiveNotes/archiveNotesSlice";
import { addTrash } from "../store/trashNotes/trashNotesSlice";
import "./MainPage.css";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import parse from "html-react-parser";
import { FaTrash, FaArchive, FaEdit } from "react-icons/fa";
import { Note, Tag } from "../types/note";
import { onOffModifying } from "../store/isModifying/isModifyingSlice";
import NoteEditor from "../components/NoteEditor";
import { v4 } from "uuid";

function MainPage() {
  const notes = useAppSelector((state) => state.notes);
  const tag = useAppSelector((state) => state.selectedTag);
  const dispatch = useAppDispatch();
  const [filteredNote, setFilteredNote] = useState<Note[]>([]);
  const isModifying = useAppSelector((state) => state.isModifying);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [tagsList, setTagsList] = useState<Tag[]>([]);
  const [isSelectingTags, setIsSelectingTags] = useState(false);
  const selectTagList = useAppSelector((state) => state.tags);

  useEffect(() => {
    if (tag.selectedTag === "Notes") {
      setFilteredNote(notes);
    } else {
      const newLists: Note[] = notes.filter((note) =>
        note.tags.some((t) => t.tag === tag.selectedTag)
      );
      setFilteredNote(newLists);
    }
  }, [notes, tag.selectedTag]);

  return (
    <div className='mainpage'>
      <div className='mainpage-allnotes'>
        <div>{tag.selectedTag}</div>
        <hr />
        <div className='allnotes-list'>
          {filteredNote?.map((data) => (
            <div className={`note-box`} key={data.id}>
              <div className='note-title'>{data.title}</div>
              <div
                className='note-pin'
                onClick={() => {
                  dispatch(clickPin(data.id));
                }}
              >
                {data.isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
              </div>
              <div className='note-timestamp'>{data.date}</div>
              <div className='note-content'>{parse(data.content)}</div>
              <div className='note-tags'>
                {data.tags?.map((tag) => (
                  <div className='note-tag' key={tag.id}>
                    {tag.tag}
                  </div>
                ))}
              </div>
              <div className='note-btns'>
                <div
                  className='note-btn'
                  onClick={() => {
                    dispatch(onOffModifying(true));
                    setTitle(data.title);
                    setTagsList(data.tags);
                    setValue(data.content);
                  }}
                >
                  <FaEdit />
                </div>
                {isModifying.isModifying ? (
                  <div className='modifying-modal'>
                    <form
                      className='modifying-editor-modal'
                      onSubmit={(e) => {
                        e.preventDefault();
                        const newNote = {
                          title: title,
                          content: value,
                          tags: tagsList,
                          color: data.color,
                          priority: data.priority,
                          isPinned: data.isPinned,
                          isRead: data.isRead,
                          date: data.date,
                          createdTime: data.createdTime,
                          editedTime: new Date().getTime(),
                          id: data.id,
                        };

                        dispatch(modifyingNote(newNote));

                        setTitle("");
                        setTagsList([]);
                        setValue("");
                        dispatch(onOffModifying(false));
                      }}
                    >
                      <button
                        className='modifying-editor-exit-btn'
                        onClick={() => dispatch(onOffModifying(false))}
                      >
                        x
                      </button>
                      <div className='modifying-editor-title-box'>
                        <div className='modifying-memo'>노트 수정하기</div>
                      </div>
                      <input
                        className='modifying-editor-title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      ></input>
                      <NoteEditor value={value} setValue={setValue} />
                      <div className='modifying-editor-options-wrap'>
                        <div
                          className='select-tags'
                          onClick={() => setIsSelectingTags(true)}
                        >
                          태그 추가
                        </div>
                        {isSelectingTags ? (
                          <div className='select-tag-modal-background'>
                            <div className='select-tag-modal'>
                              <button
                                className='edit-tag-modal-exit-btn'
                                onClick={() => setIsSelectingTags(false)}
                              >
                                x
                              </button>
                              <div className='select-tag-modal-title'>
                                태그 목록
                              </div>
                              {selectTagList?.map(({ tag, id }) => (
                                <li className='edit-tag-modal-lists' key={id}>
                                  <div
                                    className='edit-tag-modal-tags'
                                    onClick={() => {
                                      let flag: number = 0;
                                      tagsList.forEach((item) => {
                                        if (item.tag === tag) {
                                          flag = 1;
                                        }
                                      });
                                      if (flag === 0)
                                        setTagsList([
                                          { tag, id: v4() },
                                          ...tagsList,
                                        ]);
                                    }}
                                  >
                                    {tag}
                                  </div>
                                </li>
                              ))}
                              <button
                                className='edit-tag-modal-fin-btn'
                                onClick={() => setIsSelectingTags(false)}
                              >
                                완료
                              </button>
                            </div>
                          </div>
                        ) : null}
                        <div className='memo-editor-options-color'>
                          <div className='memo-color'>메모지 색상 :&nbsp;</div>
                          <select>
                            <option value='yellow'>노란색</option>
                            <option value='red'>빨간색</option>
                            <option value='green'>초록색</option>
                            <option value='blue'>파란색</option>
                          </select>
                        </div>
                        <div className='memo-editor-options-priority'>
                          <div className='memo-priority'>우선순위 :&nbsp;</div>
                          <select>
                            <option value='high'>높음</option>
                            <option value='middle'>중간</option>
                            <option value='low'>낮음</option>
                          </select>
                        </div>
                      </div>
                      <button type='submit' className='memo-editor-create-btn'>
                        수정 완료
                      </button>
                    </form>
                  </div>
                ) : null}
                <div
                  className='note-btn'
                  onClick={() => {
                    dispatch(addArchive(data));
                    dispatch(deleteNote(data.id));
                  }}
                >
                  <FaArchive />
                </div>
                <div
                  className='note-btn'
                  onClick={() => {
                    dispatch(addTrash(data));
                    dispatch(deleteNote(data.id));
                  }}
                >
                  <FaTrash />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
