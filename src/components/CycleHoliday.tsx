import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Holiday {
    symbol: "🎄" | "🎃" | "🎊" | "🎆" | "🇺🇸";
}

export function CycleHoliday(): React.JSX.Element {
    const alphabetOrder: Holiday[] = [{symbol: "🎄"}, {symbol: "🎃"}, {symbol: "🎆"}, {symbol: "🇺🇸"}, {symbol: "🎊"}];
    const yearOrder: Holiday[] = [{symbol: "🎊"}, {symbol: "🎆"}, {symbol: "🇺🇸"}, {symbol: "🎃"}, {symbol: "🎄"}];
    const [holiday, setHoliday] = useState<Holiday>({symbol: "🎄"});
    return (
        <div>
            <Button onClick={() => {
                let idx: number = alphabetOrder.findIndex((h: Holiday): boolean => h.symbol == holiday.symbol);
                idx += 1
                idx >= alphabetOrder.length ? setHoliday(alphabetOrder[0]): setHoliday(alphabetOrder[idx]);
                console.log(idx);
            }}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => {
                let idx: number = yearOrder.findIndex((h: Holiday): boolean => h.symbol == holiday.symbol);
                idx >= yearOrder.length - 1 ? setHoliday(yearOrder[0]): setHoliday(yearOrder[idx + 1]);
                console.log(idx);
            }}>
                Advance by Year
            </Button>
            Holiday: {holiday.symbol}
        </div>
    );
}
