var x;
console.log('x data tipe is -->' + typeof x);
var p = undefined;
console.log('p data type is -->' + typeof p);
a = 3;
console.log('a data type is -->' + typeof a);
let q;
let r = "1";
console.log('r data type is -->' + typeof r);
const y = 5;
console.log("r -->", r);
let z = 3.6;
console.log('z data type is -->' + typeof z);
console.log('z -->', z);
z = "Karla";
console.log('z data type is -->' + typeof z);
numberOfWgheels = 5;
console.log('x ->', x);
console.log('y ->', y);
console.log('z ->', z);
console.log(z, " has ", numberOfWgheels, " wheels ");

class Rectangule {
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

const square = new Rectangule(5, 5);

console.log("The area of a square of side 5 is", square.area);

function factorial (n){
    if (isNaN(n)){
        console.error("Non-numerical argument not allowed.");
        return NaN;
    }
    if (n == 0)
        return 1;
    if (n < 0)
        return undefined;
    if (n % 1) {
        console.warn(`${n} will be rounded to the closest Integer. For non-integers consider using gamma function instead.`)
        n = Math.round(n);
    }
    const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1 ) : 1;
    return recursively_compute(n);
}

console.log('factorial of -1 -->' + factorial(-1));
console.log('factorial of 5 -->' + factorial(5));


const subtruc = (a, b) => {
    return a - b;
}

console.log("the difference is --> ", subtruc(6,2));
let chicken = { name: "Lucy", molting: false};

console.log("chicken name -> ", chicken.name);

if (chicken.molting){
    console.log ("no");
    return true;
} else {
    console.log ("yes");
    return false;
}

console.log("chicken name", chicken.name);

const num = 6;

const result = (num % 2 != 0)? "odd" : "even";

console.log(`Number ${num} is ${result}.`);

