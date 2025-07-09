import { Header } from "../components/header/header";
import { Profile } from "../components/profile/profile";

export function Stalker() {
    return (
        <div className="stalker">
            <Header />
            <Profile page="stalker" />
        </div>
    );
}