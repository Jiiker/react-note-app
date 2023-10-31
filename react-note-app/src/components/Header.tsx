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
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
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
          <ReactQuill
            theme='snow'
            modules={modules}
            formats={formats}
            value=''
          />
          <button
            className='create-btn'
            onClick={() => dispatch(onOffEditing(false))}
          >
            Create
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default Header;
