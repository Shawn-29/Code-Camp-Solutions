/*
    Problem:

    Return a new array that transforms the elements' average altitude into
        their orbital periods (in seconds).

    The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

    You can read about orbital periods on Wikipedia (https://en.wikipedia.org/wiki/Orbital_period).

    The values should be rounded to the nearest whole number. The body being orbited is Earth.

    The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


    example 1:

    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
    
    should return
    
    [{name: "sputnik", orbitalPeriod: 86400}].


    example 2:

    orbitalPeriod([
        {name: "iss", avgAlt: 413.6},
        {name: "hubble", avgAlt: 556.7},
        {name: "moon", avgAlt: 378632.553}])
        
    should return

    [{name : "iss", orbitalPeriod: 5557},
        {name: "hubble", orbitalPeriod: 5734},
        {name: "moon", orbitalPeriod: 2377399}].
*/

const orbitalPeriod = (arr) => {

    /* G is the gravitational constant and
        M is the mass of the more massive body (Earth in this case)*/
    const EARTH_GM_VALUE = 398600.4418,
        EARTH_RADIUS = 6367.4447;

    const calcOrbitalPeriod = (avgAltitude) => {

        const orbitalPeriodSec = 2 * Math.PI *
            Math.sqrt( ( ( EARTH_RADIUS + avgAltitude ) ** 3 ) / EARTH_GM_VALUE );

        return Math.round(orbitalPeriodSec);
    };

    /* calculate the orbital period for each body based on its average altitude */
    return arr.map(body => ({
            name: body.name,
            orbitalPeriod: calcOrbitalPeriod(body.avgAlt)
        })
    );
};