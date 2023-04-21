import { useState } from "react";
import "./ListGroup.css";
interface Props {
  items: string[];
  title: string;
  onItemClick: (item: string) => void;
}

function ListGroup({ items, title, onItemClick }: Props) {
  const message = items.length === 0 ? <p>No items foun</p> : null;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              "list-group-item " + (index === selectedIndex ? "active" : null)
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onItemClick(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
