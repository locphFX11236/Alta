type BaseProps = {
    string: string,
    number: number,
    boolean: boolean,
    object: {
        obj1: string,
        obj2: number,
        obj3: boolean
    },
    array: {
        arr1: string,
        arr2: number,
        arr3: boolean
    }[]
}; // TS quy định type props

const isTrue = (b: boolean) => {
    let r;
    if (b) {
        r = 'T';
    } else {
        r = 'F';
    };
    return r
};

export const Base = (props: BaseProps) => {
    return (
        <div>
            <h2>Welcome to TS!</h2>
            <p>1. String: {props.string}</p>
            <p>2. Number: {props.number}</p>
            <p>3. Boolean: { isTrue(props.boolean) }</p>
            <hr/>
            <p>4. Object:</p>
            <p> - {props.object.obj1}</p>
            <p> - {props.object.obj2}</p>
            <p> - { isTrue(props.object.obj3) }</p>
            <hr/>
            <p>5. Array:</p>
            {props.array.map((array) => {
                return (
                    <p key={array.arr1}> - {array.arr1} - {array.arr2} - { isTrue(array.arr3) }</p>
                )
            })}
        </div>
    )
};