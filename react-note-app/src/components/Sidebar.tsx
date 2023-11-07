import "./Sidebar.css";
import { FaTrash, FaArchive, FaLightbulb } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../hook/redux";
import { clickTag } from "../store/selectedTag/selectedTagSlice";
import Mytags from "./Mytags";
import { onOffEditingNoteTag } from "../store/editNote/editNoteTagSlice";
import { useState } from "react";
import { addList, delList } from "../store/tags/tagsSlice";
import { Link } from "react-router-dom";

function Sidebar() {
  const [creatNewTag, setCreateNewTag] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const editNote = useAppSelector(
    (state) => state.isEditingNoteTag
  ).editNoteTag;

  const tagsList = useAppSelector((state) => state.tags);

  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <div className='sidebar-title'>Keep</div>
        <Link to='/'>
          <div
            className='sidebar-tag'
            onClick={() => dispatch(clickTag("Notes"))}
          >
            <FaLightbulb />
            <div>&nbsp;&nbsp;&nbsp;Notes</div>
          </div>
        </Link>
        <Mytags />
        &nbsp;
        <div
          className='sidebar-tag'
          onClick={() => dispatch(onOffEditingNoteTag(true))}
        >
          <MdEdit />
          <div>&nbsp;&nbsp;&nbsp;Edit Notes</div>
        </div>
        <Link to='/archive'>
          <div
            className='sidebar-tag'
            onClick={() => dispatch(clickTag("Archive"))}
          >
            <FaArchive />
            <div>&nbsp;&nbsp;&nbsp;Archive</div>
          </div>
        </Link>
        <Link to='/trash'>
          <div
            className='sidebar-tag'
            onClick={() => dispatch(clickTag("Trash"))}
          >
            <FaTrash />
            <div>&nbsp;&nbsp;&nbsp;Trash</div>
          </div>
        </Link>
      </div>
      {editNote ? (
        <div className='edit-note-modal-background'>
          <div className='edit-note-modal'>
            <button
              className='edit-note-modal-exit-btn'
              onClick={() => dispatch(onOffEditingNoteTag(false))}
            >
              x
            </button>
            <div className='edit-note-modal-title'>태그 목록</div>
            {tagsList?.map(({ tag, id }) => (
              <li className='edit-note-modal-lists' key={id}>
                <div className='edit-note-modal-tags'>- {tag}</div>
                <div
                  className='edit-note-modal-del-btn'
                  onClick={() => dispatch(delList(id))}
                >
                  x
                </div>
              </li>
            ))}
            {creatNewTag ? (
              <form
                className='new-tag-form'
                onSubmit={(e) => {
                  e.preventDefault();
                  setCreateNewTag(false);
                  dispatch(addList(value));
                  setValue("");
                }}
              >
                <input
                  type='text'
                  name='newtag'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                ></input>
                <button>Create</button>
              </form>
            ) : null}
            <button
              className='edit-note-modal-newtag-btn'
              onClick={() => setCreateNewTag(true)}
            >
              태그 추가
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
