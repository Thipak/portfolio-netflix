import { Header } from "../components/header/header";
import { Profile } from "../components/profile/profile";

export function Recruiter() {
    return (
        <div className="recruiter">
            <Header />
            <Profile page="recruiter" />
        </div>
    );
}