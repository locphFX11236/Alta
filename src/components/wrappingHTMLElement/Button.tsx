import React from "react";

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} // Các props ta quy định
& Omit<React.ComponentProps<'button'>, 'children'> // Trong button component của React không xem children là 1 props

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button 
            className={`class-with-${variant}`}
            { ...rest }
        >{children} /** Khi không lấy props children có nghĩa ta không cần bao bọc children bởi tag div */
        </button>
    );
};

/* Sử dụng
    <Button variant='primary' onClick={() => console.log('Clicked')} >
        Primary Button // Ta không cần phải bao bọc bởi tag div
    <Button/>
*/