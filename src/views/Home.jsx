import { useNavigate } from "react-router-dom";
import { toFill } from "../toFill";

export function Home() {
    const name = toFill.data.profile.name;
    const navigate = useNavigate();

    return (
        <div className="home">
            <p onClick={() => navigate("/browse")}>{name}</p>
        </div>
    );
}