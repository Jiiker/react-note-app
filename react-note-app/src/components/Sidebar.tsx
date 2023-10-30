import "./Sidebar.css";
import { FaTrash, FaArchive, FaLightbulb } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Mytags from "./Mytags";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <div className='sidebar-title'>Keep</div>
        <div className='sidebar-tag'>
          <FaLightbulb />
          <div>&nbsp;&nbsp;&nbsp;Notes</div>
        </div>
        <Mytags />
        &nbsp;
        <div className='sidebar-tag'>
          <MdEdit />
          <div>&nbsp;&nbsp;&nbsp;Edit Notes</div>
        </div>
        <div className='sidebar-tag'>
          <FaArchive />
          <div>&nbsp;&nbsp;&nbsp;Archive</div>
        </div>
        <div className='sidebar-tag'>
          <FaTrash />
          <div>&nbsp;&nbsp;&nbsp;Trash</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
