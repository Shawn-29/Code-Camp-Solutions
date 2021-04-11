/*
    Problem:

    Write a function that takes two or more arrays and returns a new array of unique values
        in the order of the original provided arrays.

    In other words, all values present from all arrays should be included in their original order,
        but with no duplicates in the final array.

    The unique numbers should be sorted by their original order, but the final array should not be
        sorted in numerical order.

    example:

    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
    
    should return [1, 3, 2, 5, 4].
*/

/* 
    Shawn's note: the function header provided is as follows:

    function uniteUnique(arr)
    
    Despite the function having only one array parameter, several arrays are to be
        passed in as separate arguments, meaning the problem wants us to use the
        arguments object available to classic (non-arrow) functions
*/
function uniteUnique(arr) {
    /* the arguments object, despite not being an array, is made to support iteration */
    return [...new Set(Array.prototype.concat.call(...arguments))]
}