import { Header } from "../components/header";
import { Profile } from "../components/profile";

export function Adventurer() {
    return (
        <div className="adventurer">
            <Header />
            <Profile page="adventurer" />
        </div>
    );
}
