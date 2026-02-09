import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [active, setActive] = useState<boolean>(false);
    return (
        <div>
            <Button disabled={active || attempts <= 0} onClick={() => {
                setActive(true);
                setAttempts(attempts - 1);
            }}>Start Quiz</Button>
            <Button disabled={!active} onClick={() => {
                setActive(false);
            }}>Stop Quiz</Button>
            <Button disabled={active} onClick={() => {
                setAttempts(attempts + 1);
            }}>Mulligan</Button>
            Attempts: {attempts}
        </div>
    );
}
