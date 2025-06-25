import { useNavigate } from "react-router-dom";

export function Browse() {
  const navigate = useNavigate();
  return (
    <div className="browse">
      <h1>Browse</h1>
      <p>This is the browse page.</p>
      <p>Here you can find various items to explore.</p>
      <p>Use the navigation menu to find what you're looking for.</p>
      <button onClick={() => navigate("/profile/developer")}>Go to Developer Profile</button>
      <button onClick={() => navigate("/profile/recruiter")}>Go to Recruiter Profile</button>
      <button onClick={() => navigate("/profile/stalker")}>Go to Stalker Profile</button>
      <button onClick={() => navigate("/profile/adventurer")}>Go to Adventurer Profile</button>
    </div>
  );
}