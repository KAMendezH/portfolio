// BassContext.tsx
import { createContext, useContext } from "react";

export const BassContext = createContext<number>(0);
export const useBassLevel = () => useContext(BassContext);