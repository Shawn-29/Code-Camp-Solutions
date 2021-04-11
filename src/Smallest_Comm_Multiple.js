/*
    Problem:

    Find the smallest common multiple of the provided parameters that can be evenly
    divided by both, as well as by all sequential numbers in the range between these parameters.

    The range will be an array of two numbers that will not necessarily be in numerical order.

    examples:
    
    smallestCommons([5, 1]) should return 60.
    smallestCommons([2, 10]) should return 2520.
    smallestCommons([23, 18]) should return 6056820.
*/

const smallestCommons = (arr) => {

    /* get the largest and smallest numbers of the array regardless of the array's order */
    const lgInd = arr[0] > arr[1] ? 0 : 1,
        lg = arr[lgInd],
        sm = arr[lgInd ^ 1];

    /* create an array with a range of integers from the lowest number to the highest minus one */
    let diff = lg - sm;
    const range = Array.from({length: diff}, _ => sm + --diff);

    /* start the smallest common number off at the largest number */
    let smCommonNum = lg;

    outerLoop:
    while (true) {
        for (let i = 0; i < range.length; ++i) {
            /* check if each number in range is evenly divisible by the largest number */
            if (smCommonNum % range[i] !== 0) {

                /* the current number is not evenly divisible by the largest number
                    so increase the largest number and start the iteration over */
                smCommonNum += lg;
                continue outerLoop;
            }
        }
        /* if this point is reached, the smallest common multiple has been found */
        break;
    }

    return smCommonNum;
};