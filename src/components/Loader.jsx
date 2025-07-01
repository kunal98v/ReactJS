import React from "react";
import Dummy from "./Dummy";
import { Header } from "./Header";

const Loader = () => {
  const dummyCards = Array.from({ length: 100 });

  return (
    <>
      <div className="cards-container">
        {dummyCards.map((_, index) => (
          <Dummy key={index} />
        ))}
      </div>
    </>
  );
};

export default Loader;
