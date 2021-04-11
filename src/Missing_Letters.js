/*
    Problem:

    Find the missing letter in the passed letter range and return it.

    If all letters are present in the range, return undefined.

    fearNotLetter("stvwx") should return the string "u".
*/
const fearNotLetter = (str) => {
    let prevCode = str.charCodeAt(0);

    for (let i = 1; i < str.length; ++i) {
        
        /* the current character's numeric value should be 1 greater than
            the previous, otherwise we have found the missing letter  */
        if (str[i].charCodeAt(0) !== prevCode + 1) {

            /* return the missing letter */
            return String.fromCharCode(prevCode + 1)
        }
        prevCode = str[i].charCodeAt(0);
    }
};