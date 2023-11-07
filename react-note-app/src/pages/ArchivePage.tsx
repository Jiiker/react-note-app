import { useAppDispatch, useAppSelector } from "../hook/redux";
import parse from "html-react-parser";
import { FaTrash, FaRedo, FaEdit } from "react-icons/fa";
import { undoArchive } from "../store/archiveNotes/archiveNotesSlice";
import { restoreNote } from "../store/notes/notesSlice";
import { addTrash } from "../store/trashNotes/trashNotesSlice";

function ArchivePage() {
  const notes = useAppSelector((state) => state.archiveNotes);
  const dispatch = useAppDispatch();

  return (
    <div className='mainpage'>
      <div className='mainpage-allnotes'>
        <div className='allnotes-list'>
          {notes?.map((data) => (
            <div className={`note-box`} key={data.id}>
              <div className='note-title'>{data.title}</div>
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
                <div className='note-btn'>
                  <FaEdit />
                </div>
                <div
                  className='note-btn'
                  onClick={() => {
                    dispatch(restoreNote(data));
                    dispatch(undoArchive(data.id));
                  }}
                >
                  <FaRedo />
                </div>
                <div
                  className='note-btn'
                  onClick={() => {
                    dispatch(addTrash(data));
                    dispatch(undoArchive(data.id));
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

export default ArchivePage;
