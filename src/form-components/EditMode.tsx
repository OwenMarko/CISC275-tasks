import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    function renderInfo() {
        if (editable) {
            return (
                <Form.Group style={{display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center"}}>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <Form.Check
                        inline
                        type="checkbox"
                        label="student"
                        id="student"
                        onChange={(e) => {setIsStudent(e.target.checked)}}
                        checked={isStudent}
                    />
                </Form.Group>
            )
        } else {
            return (
                <p>{name} is{isStudent ? "" : " not"} a student</p>
            )
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    checked={editable}
                    onChange={()  => {setEditable(!editable)}}
                />
                {renderInfo()}
            </Form.Group>
        </div>
    );
}
