import "./DropdownStyles.css";

function Dropdown(props) {
  return (
    <>
      <li className="dropdownItem">
        <a href="">{props.text}</a>
      </li>
    </>
  );
}
export default Dropdown;
