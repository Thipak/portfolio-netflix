import { Header } from "../components/header";
import { Profile } from "../components/profile";

export function Developer() {
  return (
        <div className="developer">
            <Header />
            <Profile page="developer" />
        </div>
  );
}