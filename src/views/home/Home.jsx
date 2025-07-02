import { useNavigate } from "react-router-dom";
import { toFill } from "../../toFill";

import "./home.styles.css";

export function Home() {
    const name = toFill.data.profile.name;
    const navigate = useNavigate();
    const audio = new Audio("/sound/netflixButton.mp3", { type: "audio/mp3" });
    const handleClick = () => {
        const nameComponent = document.querySelector(".name");
        audio.play();
        nameComponent.classList.add("clicked");
        nameComponent.addEventListener("transitionend", () => {
            nameComponent.removeEventListener("transitionend", () => {
            });
            navigate("/browse");
        });
    }

    return (
        <div className="home" onClick={handleClick}>
            <p className="name">{name}</p>
            
        </div>
    );
}