import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);
    const [disabledUse, setDisabledUse] = useState<boolean>(false);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        let num: number = Number(event.target.value);
        if (Number.isNaN(num)) {
            setRequestedAttempts(0);
            return;
        }
        setRequestedAttempts(num);
    }

    function decreaseAttempts() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            if (attempts - 1 == 0) {
                setDisabledUse(true);
            }
        }
    }

    function increaseAttempts() {
        setAttempts(attempts + requestedAttempts);
        if (attempts + requestedAttempts > 0) {
            setDisabledUse(false);
        } else {
            setDisabledUse(true);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Attempts: {attempts}</Form.Label>
                <Form.Control
                    onChange={updateAttempts}
                    type="number"
                />
                <Button onClick={decreaseAttempts} disabled={disabledUse}>use</Button>
                <Button onClick={increaseAttempts}>gain</Button>
            </Form.Group>
        </div>
    );
}
