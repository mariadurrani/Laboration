import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">Reddit</h1>
      <ul className="nav-menu">
        <div className="buttons">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                }
              </li>
            );
          })}
          <div className="icons">
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faPlus} style={{ color: "#000000" }} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="lg"
                  style={{ color: "#000000" }}
                />
              </a>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
