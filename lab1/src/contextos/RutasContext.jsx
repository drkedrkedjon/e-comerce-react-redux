/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RutasContext = createContext();

// rutas seran: content y shopping-cart
export default function RutasProvider({ children }) {
  const [rutas, setRutas] = useState("content");

  return (
    <RutasContext.Provider value={{ rutas, setRutas }}>
      {children}
    </RutasContext.Provider>
  );
}
