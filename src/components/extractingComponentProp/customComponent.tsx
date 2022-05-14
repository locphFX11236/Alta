import React from "react";
import { Base } from "../baseprops";

export const CustomComponent = (
    props: React.ComponentProps<typeof Base> // Kết thừa 'ComponentProps' giống type của component 'Base'
) => {
    return <div>{props.string}</div>;
};