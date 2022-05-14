import { useReducer } from "react";

type CounterState = {
    count: number
};
type UpdateAction = {
    type: 'increment' | 'decrement', // Chỉ cho phép 2 giá trị string này
    payload: number
};
type ResetAction = { // Tạo thêm action này không có payload
    type: 'reset'
};
type CouterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer (state: CounterState, action: CouterAction) {
    switch (action.type) {
        case 'increment': return { count: state.count + action.payload };
        case 'decrement': return { count: state.count - action.payload };
        case 'reset': return initialState;
        default: return state;
    };
};

export const Counter = () => {
    const [ state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })} >
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })} >
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })} >
                Reset
            </button>
        </>
    );
};