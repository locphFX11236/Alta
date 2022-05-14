import React from "react";

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void // Nhận một event làm prop
};

export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {console.log(event)} // Tạo hàm gọi event
    return <input
        type='text'
        value={props.value}
        onChange={handleInputChange} // Thẻ input này bắt event onChange, chạy hàm gọi sự kiện
    />
};

/* Sử dụng
    <Input value='' handleChange={(event) => console.log(event)} />
*/