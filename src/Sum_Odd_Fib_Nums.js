/*
    Problem:

    Given a positive integer num, return the sum of all odd Fibonacci numbers
        that are less than or equal to num.

    The first two numbers in the Fibonacci sequence are 1 and 1.

    Every additional number in the sequence is the sum of the two previous numbers.

    The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
        less than or equal to 10 are 1, 1, 3, and 5.

    examples:

    sumFibs(1000) should return 1785.
    sumFibs(4000000) should return 4613732.
    sumFibs(4) should return 5.
    sumFibs(75024) should return 60696.
    sumFibs(75025) should return 135721.
*/

/* recursive solution */
const sumFibs = (num) => {
    let sum = 0;

    const innerFib = (a, b, n) => {

        /* add the current number to the running total if it is odd and
            not greater than the number we are calculating the Fibonacci numbers for */
        if (a & 1 == 1 && a <= num) {
            sum += a;
        }

        if (n === 0 || a > num) {
            return a;
        }

        /* tail-call optimization */
        return innerFib(b, a + b, n - 1);
    };

    innerFib(0, 1, num);
        
    return sum;
};

/* non-recursive solution */
const sumFibs2 = (num) => {
    if (num <= 1) {
        return Math.max(0, num);
    }

    let n1 = 1, /* the previous two numbers */
        n2 = 1,
        temp = 0,
        sum = 2;

    while (num > n2) {

        // console.log(`n1: ${n1} n2: ${n2}`);

        temp = n1;
        n1 = n2;
        n2 = temp + n2;

        /* add the current number to the running total if it is odd and
            not greater than the number we are calculating the Fibonacci numbers for */
        if (n2 & 1 && n2 <= num) {
            sum += n2;
        }
    }

    return sum;
};