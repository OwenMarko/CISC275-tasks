/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((i: number): number => i * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string): number =>
        Number.isNaN(Number(str)) ? 0 : Number(str),
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((value: string): number => {
        let newValue: number = Number(value.replace("$", ""))
        if (Number.isNaN(newValue)) {
            return 0;
        }
        return newValue;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let noQuestions = messages.filter((msg: string): boolean => !msg.includes("?"))
    return noQuestions.map((msg: string): string => (msg.includes("!")) ? msg.toUpperCase() : msg);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce((totalSmallWords: number, word: string): number => {
        if (word.length < 4) {
            totalSmallWords += 1;
        }
        return totalSmallWords;
    }, 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.filter((color: string): boolean => color == "red").length
        + colors.filter((color: string): boolean => color == "green").length
        + colors.filter((color: string): boolean => color == "blue").length
        == colors.length
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = addends.reduce((total: number, num: number): number => total + num, 0)
    let addString = addends.reduce((str: string, num: number): string => str + "+" + num, "")
    if (addString.length == 0) {
        addString = "+0";
    }
    return `${sum}=${addString.slice(1)}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let first_neg_idx: number = values.findIndex((num: number):boolean => num < -1);
    if (first_neg_idx == -1) {
        let sum: number = values.reduce((total: number, num: number): number => total += num, 0);
        return [...values, sum];
    } else {
        let sum: number = values.slice(0, first_neg_idx).reduce((total: number, num: number): number => total += num, 0)
        return [...values.slice(0, (first_neg_idx+1)), sum, ...values.slice(first_neg_idx+1)];
    }
}
