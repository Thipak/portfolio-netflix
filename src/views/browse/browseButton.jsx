import { useNavigate } from "react-router-dom";

import "./browse.styles.css";

export function BrowseButton({ label, image }) {
    const navigate = useNavigate();
    return (
        <div className="browse-button" onClick={() => navigate("/profile/" + label.toLowerCase())}>
            <img src={image} alt={label} className="browse-button-image" />
            <p className="browse-button-label">{label}</p>
        </div>
    )
}