/*
    Problem:

    Design a cash register drawer function checkCashRegister() that accepts purchase
    price as the first argument (price), payment as the second argument (cash),
    and cash-in-drawer (cid) as the third argument.

    cid is a 2D array listing available currency.

    The checkCashRegister() function should always return an object with a
    status key and a change key.

    Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is
    less than the change due, or if you cannot return the exact change.

    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the
    value for the key change if it is equal to the change due.

    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins
    and bills, sorted in highest to lowest order, as the value of the change key.


    example 1:

    checkCashRegister(3.26, 100, [
        ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
        ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
        ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
    ]);

    should return

    {
        status: "OPEN",
        change: [
            ["TWENTY", 60], ["TEN", 20], ["FIVE", 15],
            ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2],
            ["PENNY", 0.04]
        ]
    }

    
    example 2:

    checkCashRegister(19.5, 20, [
        ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
        ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
        ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
    ]);

    should return

    {
        status: "CLOSED",
        change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
        ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
        ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
    ]}

*/

const checkCashRegister = (price, cash, cid) => {
    const valueMap = {
        "ONE HUNDRED": 100,
        TWENTY: 20, TEN: 10, FIVE: 5,
        ONE: 1, QUARTER: .25, DIME: .1,
        NICKEL: .05, PENNY: .01
    };

    const transaction = Object.create(null);
    transaction.status = '';
    transaction.change = [];

    let change = cash - price,
        numCurrency = 0,
        currencyVal = 0,
        amtToGive = 0;

    for (let i = cid.length - 1; i >= 0; --i, change > 0) {

        /* get the base currency value for this monetary type (e.g. .05 for NICKEL) */
        currencyVal = valueMap[cid[i][0]];

        /* check how many of this currency type could be used to provide change */
        numCurrency = Math.min(change, cid[i][1]) / currencyVal | 0;

        if (numCurrency > 0) {

            /* get the amount of money to give for this monetary type */
            amtToGive = numCurrency * currencyVal;

            transaction.change.push([cid[i][0], amtToGive]);

            /* limit change precision to 2 decimal places */
            change = +(change % amtToGive).toFixed(2);
        }
    }

    /* if there is still change to give, there weren't correct funds to cover it */
    if (change > 0) {
        transaction.status = 'INSUFFICIENT_FUNDS';
        transaction.change = [];
    }
    /* if the change to be given is equal to the amount in the drawer, no more
        transactions can occur */
    else if (transaction.change.every((value, index) => value[1] == cid[index][1])) {
        transaction.status = 'CLOSED';
        transaction.change = cid;
    }
    /* proper change was given and more transactions can occur */
    else {
        transaction.status = 'OPEN';
    }

    return transaction;
};