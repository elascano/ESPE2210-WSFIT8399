var x;  //funtion-scoped variable
console.log('x data types is --> ' + typeof x);
var p = undefined;
console.log('p data types is --> ' + typeof p);
a=3;
console.log('a data types is --> ' + typeof a);
let q;  //variable declaration, by default this variable 
let r = "1";
console.log('r data types is --> ' + typeof r);
const y=5;
console.log("r -->",r);
let z = 3.5; //block-scoped
console.log('z data types is --> ' + typeof z);
console.log('z -->',z);
z = "Dennis";
console.log('z data types is --> ' + typeof z);
NumberOfWheels = 5;

console.log('x-> ',x);
console.log('y-> ',y);
console.log('z-> ',z);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
get area() {
    return this.calcArea();
}

calcArea() {
    return this.height * this.width;
    }
}

const square = new Rectangle(6, 6);

console.log("The area of a square of side 6 is", square.area);

function factorial(n) {
    if (isNaN(n)) {
        console.error("Nom-numerical argument not allowed.");
        return NaN;
    }
    if (n === 0)
        return 1;  //0! = 1
    if (n < 0)
        return undefined; 
    if (n % 1) {
        console.warn(`${n} will be rounded to the closest integer. For non-integers consider using gamma function instead.`); 
        n = Math.round(n);
    }
    const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1) : 1;
    return recursively_compute(n);
}

console.log('factorial of -1 --> ' + factorial(-1));
console.log('factorial of 5 --> ' + factorial(5));
console.log('factorial of 5.3 --> ' + factorial(5.3));
console.log('factorial of Dennis --> ' + factorial(z));

const subtruct = (a, b) => {
    return a - b;
}
console.log("The difference is -->", subtruct(6, 2));

let chicken = { name : 'Lucy', molting : true };
if (chicken.molting){
    //console.log(name, "can not lay and egg" );
}

console.log("chicken name ", chicken.name);
console.log("The chicken name ", chicken.name, "esta molteando", chicken.molting);

const num = 6;

const result = (num % 2 != 0) ? "odd" : "even";

// display the result
console.log(`Number ${num} is ${result}.`);
