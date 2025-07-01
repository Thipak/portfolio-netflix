import { useNavigate } from "react-router-dom";

export function Browse() {
  const navigate = useNavigate();
  return (
    <div className="browse">
      <h1>Who's Watching?</h1>
      <button onClick={() => navigate("/profile/developer")}>Developer</button>
      <button onClick={() => navigate("/profile/recruiter")}>Recruiter</button>
      <button onClick={() => navigate("/profile/stalker")}>Stalker</button>
      <button onClick={() => navigate("/profile/adventurer")}>Adventurer</button>
    </div>
  );
}