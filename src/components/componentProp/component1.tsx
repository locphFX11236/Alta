import React from "react";
import { Com2Props } from "./component2";
import { Com3 } from "./component3";

type Com1Props = {
    isTrue: boolean,
    component: React.ComponentType<Com2Props>
};

export const Com1 = ({ isTrue, component: Component }: Com1Props) => {
    if (isTrue) {
        return <Component n='AAA' />
    } else {
        return <Com3 />
    }
};