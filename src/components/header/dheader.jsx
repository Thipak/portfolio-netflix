import "./dheader.styles.css";
import { useNavigate } from "react-router-dom";

export const DHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="header" style={headerStyle}>
      <h1 className="header-title" style={headerTitleStyle}>My Portfolio</h1>
      <nav className="nav" style={navStyle}>
        <ul className="nav-list" style={navListStyle}>
          <li><button onClick={() => navigate("/browse")} style={buttonStyle}>Home</button></li>
          <li><button onClick={() => navigate("/work-experience")} style={buttonStyle}>Experience</button></li>
          <li><button onClick={() => navigate("/projects")} style={buttonStyle}>Projects</button></li>
          <li><button onClick={() => navigate("/skills")} style={buttonStyle}>Skills</button></li>
        </ul>
      </nav>
      <svg className="nav-icon" onClick={openCloseNavList} style={navIconStyle} xmlns="http://www.w3.org/100/svg" viewBox="0 0 24 24">
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
      </svg>
    </header>
  );
}