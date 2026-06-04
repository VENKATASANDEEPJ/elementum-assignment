import "./Navbar.css";
import navigation from "../../data/navigation";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Elementum</div>

      <ul className="nav-links">
        {navigation.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="menu-icon">
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;