import { useRef, useEffect } from 'react';

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!); // ! loại bỏ giá trị null và undefined, null! loại bỏ giá trị undefined

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    );
};