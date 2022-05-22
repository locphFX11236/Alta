import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export const Box = () => {
    const theme = useContext(ThemeContext); // useContext sẽ nhận object ThemeContext thành style

    return (
        <div style={{
            background: theme.primary.main, // theme.primary.main truy cập tìm giá trị cho background
            color: theme.primary.text 
        }} >
            Theme context
        </div>
    ) 
};

/* Sử dụng
    <ThemeContextProvider>
        <Box/>
    </ThemeContextProvider>
*/