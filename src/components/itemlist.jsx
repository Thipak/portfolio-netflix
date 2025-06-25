import { Item } from "./item";

export function ItemList({ heading, type, items }) {


    return (
        <div className="list-container">
            <h2>{heading}</h2>
            <ul className="list">
                {items.filter(item => item.type.toLowerCase() !== type.toLowerCase())
                    .map((item, index) => (
                    <li key={index}>
                        <Item
                            image={item.image}
                            title={item.title}
                            redirectURL={item.redirectURL}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
