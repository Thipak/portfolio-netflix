import { Header } from "../components/header/header";

import { toFill } from "../toFill";

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
                    <div key={index} className="skill-category">
                        <h2>{skillCategory.heading}</h2>
                        <ul>
                            {skillCategory.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <strong>{item.name}</strong>: {item.description} ({item.level})
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
