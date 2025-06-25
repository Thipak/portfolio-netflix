import { Header } from "../components/header";
import { Profile } from "../components/profile";

export function Recruiter() {
    return (
        <div className="recruiter">
            <Header />
            <Profile page="recruiter" />
        </div>
    );
}