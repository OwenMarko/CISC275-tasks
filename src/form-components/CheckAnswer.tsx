import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                    type="number"
                />
            </Form.Group>
            {expectedAnswer == answer ? "✔️": "❌"}
        </div>
    );
}
