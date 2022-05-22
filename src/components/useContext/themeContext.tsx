import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode // props đặt biệt được quy định sẵn trong React là một chirldren Node
};

export const ThemeContext = createContext(theme); // createContext sẽ nhận object theme thành value của ThemeContext.Provider

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}> /** Component cung cấp theme bằng giá trị của value */
            {children}
        </ThemeContext.Provider>
    )
};