import { Header } from "../components/header/header";
import { Profile } from "../components/profile/profile";

export function Adventurer() {
    return (
        <div className="adventurer">
            <Header />
            <Profile page="adventurer" />
        </div>
    );
}
