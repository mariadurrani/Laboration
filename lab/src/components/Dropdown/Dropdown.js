import "./DropdownStyles.css";
import { Link } from "react-router-dom";

function Dropdown(props) {
  return (
    <>
      <li className="dropdownItem">
        <Link to="/newpost">{props.text}</Link>
      </li>
    </>
  );
}
export default Dropdown;
