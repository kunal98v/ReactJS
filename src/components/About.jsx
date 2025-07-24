import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";
export const About = () => {
  const user = useContext(UserContext);

  return (
    <>
      <div>About</div>
      <h2>{user}</h2>
    </>
  );
};
