import { Header } from "../components/header/header";
import { Profile } from "../components/profile";

export function Developer() {
  return (
        <div className="developer">
            <Header />
            <Profile page="developer" />
        </div>
  );
}