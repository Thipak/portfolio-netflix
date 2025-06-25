import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
        <nav className="nav">
            <ul>
                <li><button onClick={() => navigate("/browse")}>Home</button></li>
                <li><button onClick={() => navigate("/work-experience")}>Experience</button></li>
                <li><button onClick={() => navigate("/projects")}>Projects</button></li>
                <li><button onClick={() => navigate("/skills")}>Skills</button></li>
            </ul>
        </nav>
    </header>
  );
}