import { useAppDispatch, useAppSelector } from "../hook/redux";
import { FaTag } from "react-icons/fa";
import { clickTag } from "../store/selectedTag/selectedTagSlice";
import "./Mytags.css";
import { Link } from "react-router-dom";

function Mytags() {
  const dispatch = useAppDispatch();
  const tagsList = useAppSelector((state) => state.tags);

  return (
    <div>
      {tagsList?.map(({ tag, id }) => (
        <Link to='/'>
          <div
            className='sidebar-my-tag'
            key={id}
            onClick={() => dispatch(clickTag(`${tag}`))}
          >
            <FaTag />
            <div>&nbsp;&nbsp;&nbsp;{tag}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Mytags;
