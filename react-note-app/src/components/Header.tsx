import "./Header.css";
import { useAppSelector } from "../hook/redux";

function Header() {
  const tag = useAppSelector((state) => state.selectedTag);

  return (
    <div className='header'>
      <div className='header-tag'>{tag.selectedTag}</div>
    </div>
  );
}

export default Header;
