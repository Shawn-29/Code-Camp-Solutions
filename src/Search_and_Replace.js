/*
    Problem:

    Perform a search and replace on the sentence using the arguments provided and return the new sentence.

    First argument is the sentence to perform the search and replace on.

    Second argument is the word that you will be replacing (before).

    Third argument is what you will be replacing the second argument with (after).

    Note: Preserve the case of the first character in the original word when you are replacing it.

    example:

    myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
    
    should return the string "He is Sitting on the couch".
*/

const myReplace = (str, before, after) => {
    const newStr = String.prototype[
        /* get a reference to a String casing method based on the casing
            of the first character in the before string */
        before[0] >= 'a' && before[0] <= 'z' ?
        'toLowerCase' : 'toUpperCase'
    ].call(after[0]) + after.substr(1);

    return str.replace(before, newStr);
};