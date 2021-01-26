const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`solving for rectangle with dimensions: ${1}, ${w}`);

    if (1 <= 0 ||  w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${1}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(1, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(1, w)}`);
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);