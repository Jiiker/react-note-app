import { useAppSelector } from "../hook/redux";
import { FaTag } from "react-icons/fa";
import "./Mytags.css";

function Mytags() {
  const tagsList = useAppSelector((state) => state.tags);

  console.log(tagsList);

  return (
    <div>
      {tagsList?.map(({ tag, id }) => (
        <div className='sidebar-my-tag' key={id}>
          <FaTag />
          <div>&nbsp;&nbsp;&nbsp;{tag}</div>
        </div>
      ))}
    </div>
  );
}

export default Mytags;
