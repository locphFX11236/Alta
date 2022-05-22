import { useRef, useEffect } from 'react';

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!); // Bỏ qua giá trị null tsx sẽ không kiểm tra giá trị này

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    );
};