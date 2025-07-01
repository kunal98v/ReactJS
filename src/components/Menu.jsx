import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Menu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => { 
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch("https://restaurant-backend-xp1e.onrender.com/api/restaurants/menu/"+ id);
    const data = await res.json();

    console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2));
  };

  return (
    <div>
      <h2>Menu</h2>
      {menu.map((item, key) => {
        return <h4 key={key}>{item.card.card.title}</h4>;
      })}
    </div>
  );
};
