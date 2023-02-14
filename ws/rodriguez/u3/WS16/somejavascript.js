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
z = "Freddy";
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
console.log('The area of a squeare of side 5 is ', square.area);

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
console.log('Factorial of 2 -->' + factorial(2));
console.log('Factorial of 3 -->' + factorial(3));
console.log('Factorial of 4 -->' + factorial(4));
console.log('Factorial of 5 -->' + factorial(5));
console.log('Factorial of 6 -->' + factorial(6));
console.log('Factorial of 7 -->' + factorial(z));

const subtruct = (a,b) => {
    return a - b;
}

console.log("the diference is -->" , subtruct(6,2));

//Hacer un objeto C0RT0 ----
let chicken = {name: 'FSRRR', molting : true};

console.log("chicken name --> ", chicken.name);

console.log("the chicken named --> ", chicken.name);

if (chicken.molting){
    console.log("the chicken can't lay an egg");
} else{
    console.log("the chicken can lay an egg");
}


const num=6;