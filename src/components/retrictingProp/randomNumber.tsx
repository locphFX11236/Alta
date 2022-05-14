type Value = {
    value: number
};

type PositiveNumber = Value & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
};

type NegativeNumber = Value & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
};

type ZeroNumber = Value & {
    isZero: boolean,
    isNegative?: never,
    isPositive?: never
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber // Gồm 1 giá trị Value và 1 trong 3 giá trị isZero, isNegative, isPositive

export const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
            {isZero && 'zero'}
        </div>
    );
};