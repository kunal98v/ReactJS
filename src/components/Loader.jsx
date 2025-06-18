import React from "react";
import Dummy from "./Dummy";
import { Header } from "./Header";

const Loader = () => {
  return (
    <>
      <Header />
      <div className="cards-container">
        <Dummy />
        <Dummy />
        <Dummy />
        <Dummy />
        <Dummy />
        <Dummy />
        <Dummy />
      </div>
    </>
  );
};

export default Loader;
