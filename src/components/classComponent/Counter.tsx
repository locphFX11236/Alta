import { Component } from "react";

type CounterProps = {
    message: string
};
type CounterState = {
    count: number
};

export class Counter extends Component< CounterProps, CounterState > { // < CounterProps, CounterState > là type sẽ đc render
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    };

    render () {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    };
};

/* Sử dụng
    <Counter message='This is a message' />
*/