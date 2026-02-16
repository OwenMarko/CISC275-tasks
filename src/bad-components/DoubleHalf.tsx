import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Props {
    set_value: (newValue: number) => void;
    value: number;
}

function Doubler(props: Props): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                props.set_value(2 * props.value);
            }}
        >
            Double
        </Button>
    );
}

function Halver(props: Props): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                props.set_value(0.5 * props.value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler set_value={setDhValue} value={dhValue}></Doubler>
            <Halver set_value={setDhValue} value={dhValue}></Halver>
        </div>
    );
}
