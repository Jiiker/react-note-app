import { useAppDispatch, useAppSelector } from "../hook/redux";
import { FaRedo, FaTrash } from "react-icons/fa";
import parse from "html-react-parser";
import { restoreNote } from "../store/notes/notesSlice";
import {
  undoTrash,
  deleteTrashNote,
} from "../store/trashNotes/trashNotesSlice";
import "./TrashPage.css";

function TrashPage() {
  const notes = useAppSelector((state) => state.trashNotes);
  const dispatch = useAppDispatch();

  return (
    <div className='trashpage'>
      <div className='trashpage-notes'>
        <div className='trashnote-list'>
          {notes?.map((data) => (
            <div className='trash-note-box' key={data.id}>
              <div className='trash-note-title'>{data.title}</div>
              <div className='trash-note-timestamp'>{data.date}</div>
              <div className='trash-note-content'>{parse(data.content)}</div>
              <div className='trash-note-tags'>
                {data.tags?.map((tag) => (
                  <div className='trash-note-tag' key={tag.id}>
                    {tag.tag}
                  </div>
                ))}
              </div>
              <div className='trash-note-btns'>
                <div
                  className='trash-restore-btn'
                  onClick={() => {
                    dispatch(restoreNote(data));
                    dispatch(undoTrash(data.id));
                  }}
                >
                  <FaRedo />
                </div>
                <div
                  className='trash-delete-btn'
                  onClick={() => {
                    dispatch(deleteTrashNote(data.id));
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

export default TrashPage;
