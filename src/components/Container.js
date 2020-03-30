import React, { useState, createContext } from "react";

const Context = createContext();

export { Context };

export default ({ children }) => {
  const [room, setRoom] = useState(undefined);
  return (
    <Context.Provider value={{ room, setRoom }}>{children}</Context.Provider>
  );
};
