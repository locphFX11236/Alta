import React from "react";

type ButtonProps = {
    // Nhận props là function, func nhận 2 tham số là 1 event và 1 số
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
};

export const Button = (props: ButtonProps) => {
    return <button onClick={
        (event) => props.handleClick(event, 1) // Hàm chạy event handleClick
    }>Click</button>
};

/* Sử dụng
    <Button
        handleClick={ // Xem handleClick là 1 props chứa even onClick
            (event, id) => {console.log('Button clicked', event, id)}
        }
    />
*/