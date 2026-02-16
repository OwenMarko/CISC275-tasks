import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    let [currentType, setCurrentType] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button onClick={() => {
                if (currentType === "short_answer_question") setCurrentType("multiple_choice_question");
                else setCurrentType("short_answer_question");
            }}>
                Change Type
            </Button>
            {currentType === "multiple_choice_question" ? "Multiple Choice": "Short Answer"}
        </div>
    );
}
