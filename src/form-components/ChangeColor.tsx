import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors:string[] = ["red", "green", "blue", "purple", "pink", "cyan", "orange", "yellow"];
    const [color, setColor] = useState<string>(colors[0]);

    function updateColor(color: string): () => void {
        return () => {
            setColor(color);
        }
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {colors.map((colorName:string) => {
                    return (
                        <div key={colorName} style={{display: "inline"}}>
                            <Form.Check
                                inline
                                checked={color === colorName}
                                type="radio" key={colorName}
                                value={colorName}
                                onChange={updateColor(colorName)}
                                label={(<span style={{backgroundColor: colorName, display: "inline"}}>{colorName}</span>)}
                            />
                        </div>
                )
                })}
            </Form.Group>
            <p>You have chosen <span data-testid="colored-box" style={{backgroundColor: color}}>{color}</span>.</p>
        </div>
    );
}
