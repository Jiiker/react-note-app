import "./Header.css";
import { useAppSelector, useAppDispatch } from "../hook/redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { onOffEditing } from "../store/isEditing/isEditingSlice";

function Header() {
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
        <form className='memo-editor'>
          <button
            className='memo-editor-exit-btn'
            onClick={() => dispatch(onOffEditing(false))}
          >
            x
          </button>
          <ReactQuill
            theme='snow'
            modules={modules}
            formats={formats}
            value=''
          />
          <button className='memo-editor-create-btn'>Create</button>
        </form>
      ) : null}
    </div>
  );
}

export default Header;
