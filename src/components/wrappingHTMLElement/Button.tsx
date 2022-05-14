import React from "react";

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> // Trong button component bỏ qua props children

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
    return <button 
        className={`class-with-${variant}`}
        { ...rest }
    >{children}
    </button>
    // Khi không lấy props children có nghĩa ta bao bọc children bởi element button
};

/* Sử dụng
    <Button variant='primary' onClick={() => console.log('Clicked')} >
        Primary Button // Ta không cần phải bao bọc bởi tag div
    <Button/>
*/