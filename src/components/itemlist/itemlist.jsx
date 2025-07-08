import { Item } from "./item/item.jsx";

import "./itemlist.styles.css";

export function ItemList({ heading, type, items }) {


    return (
        <div className="list-container">
            <h2>{heading}</h2>
            <ul className="item-list">
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
