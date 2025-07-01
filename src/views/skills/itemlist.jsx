import { Item } from "./item";

export function ItemList({ heading, items }) {
    return (
        <div className="skill-category">
            <h3>{heading}</h3>
            <ul>
                {items.map((item, index) =>(
                    <Item 
                        key={index}
                        name={item.name} 
                        description={item.description} 
                        level={item.level}></Item>
                ))}
            </ul>
        </div>
    );
}
