import { useAppDispatch, useAppSelector } from "../hook/redux";
import { clickPin } from "../store/notes/notesSlice";
import "./MainPage.css";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";

function MainPage() {
  const Notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  return (
    <div className='mainpage'>
      <div className='mainpage-allnotes'>
        <div>All Notes</div>
        <hr />
        <div className='allnotes-list'>
          {Notes?.map((data) => (
            <div className='note-box' key={data.id}>
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
              <div className='note-content'>{data.content}</div>
              <div className='note-tags'>
                {data.tags?.map(
                  (tag) => (
                    <div className='note-tag' key={tag.id}>
                      {tag.tag}
                    </div>
                  ),
                  null
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
