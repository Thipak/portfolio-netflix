import "./dheader.styles.css";
import { useNavigate } from "react-router-dom";

export const DHeader = ({ name }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header-title" onClick={() => navigate("/")}>{name}</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><button onClick={() => navigate("/browse")}>Home</button></li>
          <li><button onClick={() => navigate("/work-experience")}>Experience</button></li>
          <li><button onClick={() => navigate("/projects")}>Projects</button></li>
          <li><button onClick={() => navigate("/skills")}>Skills</button></li>
        </ul>
      </nav>
    </header>
  );
}