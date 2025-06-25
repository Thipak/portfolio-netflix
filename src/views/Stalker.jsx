import { Header } from "../components/header";
import { Profile } from "../components/profile";

export function Stalker() {
    return (
        <div className="stalker">
            <Header />
            <Profile page="stalker" />
        </div>
    );
}