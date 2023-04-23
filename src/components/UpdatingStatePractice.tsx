import { useState } from "react";
import ListGroup from "./ListGroup";

export const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "tom",
      desctribtion:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quatity: 1 },
      { id: 2, title: "Product 2", quatity: 1 },
    ],
  });

  //plain way
  const change = () => {
    setGame({ ...game, player: { ...game.player, name: "Jerry" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  const changeCart = (id: number) => {
    setCart({
      ...cart,
      items: cart.items.map((it) =>
        it.id === id ? { ...it, quatity: it.quatity + 1 } : it
      ),
    });
  };

  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{game.player.name}</h5>
          <p className="card-text">{game.player.desctribtion}</p>
          <ListGroup items={pizza.toppings} title={pizza.name}></ListGroup>
          <button className="btn btn-primary mt-3" onClick={change}>
            change
          </button>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <ul>
            {cart.items.map((it) => (
              <li key={it.id}>
                <div>
                  {it.title + " " + it.quatity}{" "}
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => changeCart(it.id)}
                  >
                    change
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
