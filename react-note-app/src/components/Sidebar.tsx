import "./Sidebar.css";
import { FaTrash, FaArchive, FaLightbulb } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../hook/redux";
import { clickTag } from "../store/selectedTag/selectedTagSlice";
import Mytags from "./Mytags";
import { onOffEditingNoteTag } from "../store/editNote/editNoteTagSlice";
import { useState } from "react";
import { addList, delList } from "../store/tags/tagsSlice";

function Sidebar() {
  const [creatNewTag, setCreateNewTag] = useState(false);
  const dispatch = useAppDispatch();
  const editNote = useAppSelector(
    (state) => state.isEditingNoteTag
  ).editNoteTag;

  const tagsList = useAppSelector((state) => state.tags);

  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <div className='sidebar-title'>Keep</div>
        <div
          className='sidebar-tag'
          onClick={() => dispatch(clickTag("Notes"))}
        >
          <FaLightbulb />
          <div>&nbsp;&nbsp;&nbsp;Notes</div>
        </div>
        <Mytags />
        &nbsp;
        <div
          className='sidebar-tag'
          onClick={() => dispatch(onOffEditingNoteTag(true))}
        >
          <MdEdit />
          <div>&nbsp;&nbsp;&nbsp;Edit Notes</div>
        </div>
        <div
          className='sidebar-tag'
          onClick={() => dispatch(clickTag("Archive"))}
        >
          <FaArchive />
          <div>&nbsp;&nbsp;&nbsp;Archive</div>
        </div>
        <div
          className='sidebar-tag'
          onClick={() => dispatch(clickTag("Trash"))}
        >
          <FaTrash />
          <div>&nbsp;&nbsp;&nbsp;Trash</div>
        </div>
      </div>
      {editNote ? (
        <div className='edit-note-module'>
          <button
            className='edit-note-module-exit-btn'
            onClick={() => dispatch(onOffEditingNoteTag(false))}
          >
            x
          </button>
          <div className='edit-note-module-title'>Note Tags</div>
          {tagsList?.map(({ tag, id }) => (
            <li className='edit-note-module-lists' key={id}>
              <div className='edit-note-module-tags'>- {tag}</div>
              <div
                className='edit-note-module-del-btn'
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
                dispatch(addList(e.target.newtag.value));
              }}
            >
              <input type='text' name='newtag'></input>
              <button>Create</button>
            </form>
          ) : null}
          <button
            className='edit-note-module-newtag-btn'
            onClick={() => setCreateNewTag(true)}
          >
            New tag
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
