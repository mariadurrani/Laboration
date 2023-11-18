import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import SecDropdown from "../Dropdown/SecDropdown";

function Navbar() {
  const [openPlus, setOpenPlus] = useState(false);
  const [openUserDropdown, setOpenUserDropdown] = useState(false);

  const togglePlusDropdown = () => {
    setOpenPlus(!openPlus);
    // Close the user dropdown when opening the plus dropdown
    setOpenUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setOpenUserDropdown(!openUserDropdown);
    // Close the plus dropdown when opening the user dropdown
    setOpenPlus(false);
  };

  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/">Reddit</Link>
      </h1>
      <ul className="nav-menu">
        <div className="buttons">
          <Link to="/">Home</Link>
          <div onClick={togglePlusDropdown}>+</div>{" "}
          <div className={`dropdown-menu ${openPlus ? `active` : `inactive`}`}>
            <ul>
              <Dropdown text={"Add a post"} />
            </ul>
          </div>
          <div onClick={toggleUserDropdown}>
            <FontAwesomeIcon icon={faUserCircle} style={{ color: "#000000" }} />
          </div>
          <div
            className={`dropdown-acc-menu ${
              openUserDropdown ? "active" : "inactive"
            }`}
          >
            <ul>
              <SecDropdown text={"My Profile"} />
              <SecDropdown text={"Settings"} />
              <SecDropdown text={"Log out"} />
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
