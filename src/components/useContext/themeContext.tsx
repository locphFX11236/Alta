import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode // props đặt biệt được quy định sẵn trong React
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};