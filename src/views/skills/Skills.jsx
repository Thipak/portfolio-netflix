import { Header } from "../../components/header/header";
import { ItemList } from "./itemlist";

import { toFill } from "../../toFill";

export function Skills() {

    const skillsData = toFill.data.skills || [];
    if (skillsData.length === 0) {
        return (
            <div className="skills">
                <Header />
                <h1>Skills Profile</h1>
                <p>No skills data available.</p>
            </div>
        );
    }

    return (
        <div className="skills">
            <Header />
            <div className="skills-list">
                {skillsData.map((skillCategory, index) => (
                    <ItemList key={index} heading={skillCategory.heading} items={skillCategory.items} />
                ))}
            </div>
        </div>
    );
}
