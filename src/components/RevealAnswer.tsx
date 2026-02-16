import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
    <div>
        <Button onClick={() => {setVisible(!visible)}}>Reveal Answer</Button>
        <span style={{visibility: visible ? "visible": "hidden"}}>{visible ? "42" : ""}</span>
    </div>
    );
}
