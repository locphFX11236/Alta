type ListProps<T> = {
    items: T[], // T là 1 array đại diện mà ta chưa định nghĩa T là gì
    onClick: (value: T) => void
};

export const List =    
    <T extends {}>( // T được định nghĩa là 1 object rỗng nên các giá trị trong object kiểu tùy ý
        { items, onClick }: ListProps<T>
    ) => {
        return (
            <div>
                <h2>List of items</h2>
                {items.map( (item, index) => {
                    return `<div key=${index} onClick={() => ${onClick}(${item})}>${item}</div>`
                } )}
            </div>
        );
    }
;

/* Sử dụng
    {const data = T[] // T là array của string, number, object, array }
    <List items={data} onClick={(item) => console.log(item)} />
*/