import React, { useEffect, useState } from "react";
import { Ul, Li, Img, Wrap } from "../../features/basket/Basket.styled";

const Index = () => {
  const [items, setItems] = useState([]);
  const [counts, setCount] = useState(1);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setItems(items);
    }
    console.log("hee");
  }, []);

  const plusCount = (id) => {
    const increment = items.filter(
      (cartitem) => cartitem.id === id && cartitem.count++
    );
    increment.map((i) => setCount(i.count));
  };

  const minusCount = (id) => {
    const decrement = items.filter((cartitem) =>
      cartitem.id === id && cartitem.count > 1 ? cartitem.count-- : 1
    );
    if (decrement) {
      decrement.map((i) => setCount(i.count));
    }
  };

  const deleteItem = (id) => {
    const index = items.findIndex((product) => product.id === id);
    if (index > -1) {
      items.splice(index, 1);
    }
    localStorage.setItem("data", JSON.stringify(items));
  };

  return (
    <>
      <Ul>
        {items.map((i) => (
          <Wrap key={i.id}>
            <Li>
              <Img src={i.img} />
            </Li>
            <Li>{i.name}</Li>
            <Li>{i.desc}</Li>
            <p>{i.count}</p>
            <button onClick={() => plusCount(i.id)}>+</button>
            <button onClick={() => minusCount(i.id)}>-</button>

            <button onClick={() => deleteItem(i.id)}>X</button>
          </Wrap>
        ))}
      </Ul>
    </>
  );
};

export default Index;
