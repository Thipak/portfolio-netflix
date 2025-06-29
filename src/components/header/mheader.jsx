import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  const headerStyle = {
    position: "fixed",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    top: "0",
    left: "0",
    width: "100vw",
  };

  const headerTitleStyle = {
    position: "absolute",
    margin: "0",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#333",
  };

  const navIconStyle = {
    top: "0",
    right: "0",
    width: "50px",
    height: "50px",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "0 0 5px 5px",
    cursor: "pointer",
  };

  const navStyle = {
    MozBoxSizing: "border-box",
    WebkitBoxSizing: "border-box",
    boxSizing: "border-box",
    height: "100vh",
    width: navOpen ? "250px" : "0",
    overflow: "hidden",
    backgroundColor: "#333",
    transition: "width 0.3s",
    zIndex: "5",
  };

  const navListStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    listStyleType: "none",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "whitesmoke",
  };

  function openCloseNavList() {
    setNavOpen((prev) => !prev);
  }

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