import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {

    const [selected, setSelected] = useState<string>(options[0]);
    const [correct, setCorrect] = useState<boolean>(false);

    useEffect(() => {
        if (selected === expectedAnswer) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }, [selected])


    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Options:</Form.Label>
                <Form.Select value={selected} onChange={(e) => {setSelected(e.target.value)}}>
                    {options.map((option: string) => {
                        return (<option key={option} value={option}>{option}</option>);
                    })}
                </Form.Select>
                {correct ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
