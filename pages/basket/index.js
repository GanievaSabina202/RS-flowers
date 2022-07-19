import React, { useEffect, useState } from "react";
import { Ul, Li, Img, Wrap } from "../../features/basket/Basket.styled";
const Index = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("item"));
    console.log("itemss", items);
    if (items) {
      setItems(items);
    }
  }, []);

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
          </Wrap>
        ))}
      </Ul>
    </>
  );
};

export default Index;
