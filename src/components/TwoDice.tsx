import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(1);
    const [gameState, setGameState] = useState<number>(0);

    useEffect(() => {
        if (leftDie == rightDie && leftDie == 1) {
            setGameState(-1);
        } else if (leftDie == rightDie) {
            setGameState(1);
        } else {
            setGameState(0);
        }
    }, [leftDie, rightDie]);

    return (
        <div>
            <Button onClick={() => {setLeftDie(d6())}}>Roll Left</Button>
            <Button onClick={() => {setRightDie(d6())}}>Roll Right</Button>
            <span data-testid="left-die">{leftDie}</span><span data-testid="right-die">{rightDie}</span>
            <p>{gameState == 1 ? "Win" : ""}
                {gameState == -1 ? "Lose" : ""}</p>
        </div>
    );
}
