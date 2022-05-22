import React from "react";
import { Com2Props } from "./component2";
import { Com3 } from "./component3";

type Com1Props = {
    isTrue: boolean,
    component_: // Quy định type là 1 component ( React.ComponentType )
        React.ComponentType<Com2Props> // Quy định type của props truyền vào chirdren component ( <Com2Props> ), dùng chung khai báo của component2.tsx
};

export const Com1 = ({ isTrue, component_: Component }: Com1Props) => {
    if (isTrue) {
        return <Component n='AAA' /> // Đây là đại diện cho component_ sẽ được truyền vào và props sẽ truyền vào
    } else {
        return <Com3 />
    }
};

/* Sử dụng
    <Com1 isTrue={true} component_={Com2} />
*/