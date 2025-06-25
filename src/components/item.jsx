import { useNavigate } from "react-router-dom";

export function Item({ image, title, redirectURL }) {
    const navigate = useNavigate();
    return (
        <div className="item" onClick={() => navigate(redirectURL)}>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>This is the item profile page.</p>
            <p>Here you can find information about the item and its details.</p>
            <p>Feel free to explore the item and connect with it.</p>
        </div>
    );
}