import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import { MENU_URL } from "../utils/constants";

export const Menu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch(
      MENU_URL + id
    );
    const data = await res.json();
    setMenu(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
        .filter((item) => item.card.card.title != undefined &&  item.card.card.itemCards != undefined)
    );
  };
  return (
    <div>
      <h2 className="text-center font-bold text-xl m-5">Menu</h2>
      {menu.map((item, index) => {
        return (
          <MenuItem
            key={index}
            item={item}
            setOpenIndex={() => {
              setOpenIndex(openIndex === index ? 0 : index);
            }}
            openIndex={index === openIndex}
          />
        );
      })}
    </div>
  );
};
