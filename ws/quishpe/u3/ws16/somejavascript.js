var x;
console.log('x data tipe is --> ' + typeof x);
var p = undefined;
console.log('p data tipe is --> ' + typeof p);
a = 3;
console.log('a data tipe is --> ' + typeof a);
let q;
let r = "1";
console.log('r data tipe is --> ' + typeof r);

const y = 5;
console.log('r--> ', r);
let z = 3.5;
console.log('z data tipe is --> ' + typeof z);
console.log('z --> ', z)
z = "Anthony";
console.log('z data type--> ', + typeof z);
numberOfWheels = 5;

console.log('x -> ', x);
console.log('y -> ', y);
console.log('z -> ', z);
//const y = 10;

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.width * this.height;
    }
}
const square = new Rectangle(8.2, 8);
console.log('The area of a squeare of side 6 is ', square.area);

function factorial(n) {
    if (isNaN(n)) {
        console.log("Non- numerical argument not allowed.");
        return NaN;
    }
    if (n === 0)
        return 1;
    if (n < 0)
        return undefined;
    if (n % 1) {
        console.warn('${n} will be rounded to the closest integer. For non-integers consoder using gamma function instead.');
        n = Math.round(n);
    }
    const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1) : 1;
    return recursively_compute(n);
}
console.log('Factorial of -1 -->' + factorial(-1));
console.log('Factorial of 0 -->' + factorial(0));
console.log('Factorial of 1 -->' + factorial(1));
console.log('Factorial of 5 -->' + factorial(5));
console.log('Factorial of 5.3 -->' + factorial(5.3));
console.log('Factorial of 7 -->' + factorial(z));

const subtruct = (a, b) => {
    return a - b;
}

console.log("The differnces is -> ", subtruct(6, 2));

let chicken = { name: 'Lucy', molting: true };

let chiken = { name: 'Lucy', molting: false };

if (chiken.molting)
    console.log('the  chiken ', chiken.name, ' is molting', chiken.molting)
else
    console.log('the chiken ', chiken.name, ' isnt molting', chiken.molting)
console.log("Chiken name --> ", chicken.name);


const num = 6;
const result = (num % 2 != 0) ? "odd" : "even";

console.log('Number ${num} is ${result}.');