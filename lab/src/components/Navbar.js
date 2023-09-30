import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">Reddit</h1>
      <ul className="nav-menu">
        <div className="buttons">
          {" "}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </div>
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
      </ul>
    </div>
  );
}

export default Navbar;
