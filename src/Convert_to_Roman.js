/*
    Problem:

    Convert the given number into a roman numeral.

    All roman numerals answers should be provided in upper-case.

    examples:

    convertToRoman(2) should return the string II
    convertToRoman(12) should return the string XII
    convertToRoman(798) should return the string DCCXCVIII
    convertToRoman(3999) should return the string MMMCMXCIX
*/

const convertToRoman = (num) => {

    if (!Number.isSafeInteger(num)) {
        throw TypeError(`Can't convert non-integer '${num}' to roman numeral.`);
    }

    if (num <= 0 || num > 1000000) {
        throw RangeError(
            `Integer must be in the range of 1-1,000,000 to convert to a roman numeral.`
        );
    }

    const colMap = {
        1: ['I', 'V'], // 1, 5
        10: ['X', 'L'], // 10, 50
        100: ['C', 'D'], // 100, 500
        1000: ['M', 'V̅'], // 1000, 5000
        10000: ['X̅', 'L̅'], // 10000, 15000
        100000: ['C̅', 'D̅'], // 100000, 150000
        1000000: ['M̅'] // 1000000
    };

    let roman = '', // the complete roman numeral to return
        colSize = 0, // the greatest 10s column size
        step = 0,
        minStep = 0,
        maxStep = 0,
        symbs = null;

    while (num > 0) {

        /* get the greatest 10s column size */
        colSize = 10 ** (String(num).match(/\d/g).length - 1);

        /* get the three roman symbols for this iteration;
            e.g. number of 8 would get ['I', 'V', 'X'] */
        symbs = [...colMap[colSize]].concat(colMap[colSize * 10]?.[0]);

        /* each below step is where a change occurs in the numbering system
            e.g. III (3) becomes IV (4); IV becomes V (5); V becomes IX (9) */

        /* e.g. a number of 8 would have a step of 5 */
        step = 5 * colSize;
        /* e.g. a number of 8 would have a minStep of 4 */
        minStep = step - colSize;
        /* e.g. a number of 8 would have a maxStep of 9 */
        maxStep = step + step - colSize;

        if (num < minStep) {
            // get how many of this roman numeral to repeat; 3 would be III
            const numSymbols = (num / colSize) | 0;
            roman += symbs[0].repeat(numSymbols);

            num -= colSize * numSymbols;
        }
        // e.g. a number of 4 would get 'IV'
        else if (num < step) {
            roman += symbs[0] + symbs[1];
            num -= minStep;
        }
        // e.g. a number of 5 would get 'V'
        else if (num < maxStep) {
            roman += symbs[1];
            num -= step;
        }
        // e.g. a number of 9 would get 'IX'
        else {
            roman += symbs[0] + symbs[2];
            num -= maxStep;
        }
    }

    return roman;
};