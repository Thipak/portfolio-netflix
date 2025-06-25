import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <p onClick={() => navigate("/browse")}>Browse my work</p>
        </div>
    );
}