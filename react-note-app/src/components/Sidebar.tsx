import "./Sidebar.css";
import { FaTrash, FaArchive, FaLightbulb } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useAppDispatch } from "../hook/redux";
import { clickTag } from "../store/selectedTag/selectedTagSlice";
import Mytags from "./Mytags";

function Sidebar() {
  const dispatch = useAppDispatch();

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
        <div className='sidebar-tag'>
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
    </div>
  );
}

export default Sidebar;
