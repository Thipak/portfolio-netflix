export function Item({ name, description, level }) {
    return (
        <div className="skill-item">
            <h4>{name}</h4>
            <p>{description}</p>
            <span className="skill-level">{level}</span>
        </div>
    );
}