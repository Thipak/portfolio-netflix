import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./mheader.styles.css";

export const MHeader = ({ name }) => {
  const [navOpen, setNavOpen] = useState(false);

  function openCloseNavList() {
    setNavOpen((prev) => !prev);
  }

  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="header-title" onClick={() => navigate("/")}>{name}</h1>
      <nav className={`nav ${navOpen ? "open" : ""}`}>
        <h1 className="nav-title" onClick={() => navigate("/")}>{name}</h1>
        <ul className="nav-list">
          <li><button onClick={() => navigate("/browse")}>Home</button></li>
          <li><button onClick={() => navigate("/work-experience")}>Experience</button></li>
          <li><button onClick={() => navigate("/projects")}>Projects</button></li>
          <li><button onClick={() => navigate("/skills")}>Skills</button></li>
        </ul>
      </nav>
      <svg className="nav-icon" onClick={openCloseNavList} xmlns="http://www.w3.org/100/svg" viewBox="0 0 24 24">
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
      </svg>
    </header>
  );
}