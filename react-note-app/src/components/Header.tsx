import "./Header.css";
import { useAppSelector, useAppDispatch } from "../hook/redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { onOffEditing } from "../store/isEditing/isEditingSlice";
import { createNote } from "../store/notes/notesSlice";
import { useState } from "react";
import HTMLReactParser from "html-react-parser";

function Header() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [tagsList, setTagsList] = useState<string[]>([]);
  // const [noteColor, setNoteColor] = useState("");
  // const [priority, setPriority] = useState("");
  const [isSelectingTags, setIsSelectingTags] = useState(false);

  const selectTagList = useAppSelector((state) => state.tags);
  const tag = useAppSelector((state) => state.selectedTag);
  const isEditing = useAppSelector((state) => state.isEditing).isEditing;
  const dispatch = useAppDispatch();

  const myColors = [
    "purple",
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "white",
    "#cce0ff",
    "#ffcccc",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  return (
    <div className='header-wrap'>
      <div className='header'>
        <div className='header-tag'>{tag.selectedTag}</div>
        <button
          className='header-newmemo-btn'
          onClick={() => dispatch(onOffEditing(true))}
        >
          +
        </button>
      </div>
      {isEditing ? (
        <div className='memo-editor-modal-background'>
          <form
            className='memo-editor-modal'
            onSubmit={(e) => {
              e.preventDefault();
              console.log(value);
              console.log(title);
              console.log(tagsList);

              dispatch(
                createNote({
                  title: title,
                  content: HTMLReactParser(value),
                  tags: tagsList,
                })
              );

              setTitle("");
              setTagsList([]);
              setValue("");
              dispatch(onOffEditing(false));
            }}
          >
            <button
              className='memo-editor-exit-btn'
              onClick={() => dispatch(onOffEditing(false))}
            >
              x
            </button>
            <div className='memo-editor-title-box'>
              <div className='create-memo'>노트 생성하기</div>
            </div>
            <input
              className='memo-editor-title'
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <ReactQuill
              theme='snow'
              modules={modules}
              formats={formats}
              value={value}
              onChange={(e) => setValue(e.valueOf())}
            />
            <div className='memo-editor-options-wrap'>
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
                      className='edit-note-modal-exit-btn'
                      onClick={() => setIsSelectingTags(false)}
                    >
                      x
                    </button>
                    <div className='select-tag-modal-title'>태그 목록</div>
                    {selectTagList?.map(({ tag, id }) => (
                      <li className='edit-note-modal-lists' key={id}>
                        <div
                          className='edit-note-modal-tags'
                          onClick={() => {
                            let flag: number = 0;
                            tagsList.forEach((item) => {
                              if (item === tag) {
                                flag = 1;
                              }
                            });
                            if (flag === 0) setTagsList([tag, ...tagsList]);
                            console.log(tagsList);
                          }}
                        >
                          {tag}
                        </div>
                      </li>
                    ))}
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
              Create
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
