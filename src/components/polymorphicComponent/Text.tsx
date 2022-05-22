import React from "react";

type TextOwnProps<E> = {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    as?: E // Sẽ nhận giá trị là các tag h1, h2, ...
};

type TextProps<E extends React.ElementType> = // ElementType là loại element như h1, h2, div, p,...
    TextOwnProps<E> &
    Omit<
        React.ComponentProps<E>,
        keyof TextOwnProps<E>
    > // Bỏ qua các props mặc định của E trong React, khi đã được quy định bằng TextOwnProps
;

export const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: TextProps<E>) => {
    const Component = as || 'div'; // Nếu không có as thì lấy là div
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    );
};

/* Sử dụng
    <Text as='h1' htmlFor='someId' size='sm' color='secondary'>
        AAA
    <Text/>
*/