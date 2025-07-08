import { useNavigate } from "react-router-dom";

import "./item.styles.css";

export function Item({ image, title, redirectURL }) {
    const navigate = useNavigate();
    return (
        <div className="item" onClick={() => navigate(redirectURL)}>
            <h3 className="item-title">{title}</h3>
            <img src={image} alt={title} className="item-background" />
        </div>
    );
}