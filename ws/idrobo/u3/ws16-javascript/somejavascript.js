var x;
console.log('x data type is -->' + typeof x);
var p = undefined;
console.log('p data type is -->' + typeof p);
a = 3;
console.log('a data type is -->' + typeof a);
let q;
let r = "1";
console.log('r data type is -->' + typeof r);
const y = 5;
console.log("r -->", r);
let z = 3.5;
console.log('z data type is -->' + typeof z);
console.log('z -->', z);

z = "Cristian";
console.log('z data type is -->' + typeof z);
numberOfWheels = 5;
console.log("x -->", x);
console.log("y -->", y);
console.log("z -->", z);
console.log(z, "has", numberOfWheels, "wheels");

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
const square = new Rectangle(6.5, 6.5);
console.log("The area of a square of side 6.5 is", square.area);

function factorial(n) {
    if (isNaN(n)) {
        console.error("Non-numerical argument not allowed.");
        return NaN;
    }
    if (n === 0)
        return 1; //0! =1
    if (n < 0)
        return undefined;
    if (n % 1) {
        console.warn(`${n} will be reounded to the closest integer. For non-integers consider using gamma function instead.`);
        n = Math.round(n);
    }
    const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1) : 1;
    return recursively_compute(n);
}
console.log("factorial of -1 -->" + factorial(-1));
console.log("factorial of 5 -->" + factorial(5));

const subtruct = (a, b) => {
    return a - b;
}

console.log("The difference is --> ", subtruct(6, 2));
let chicken = { name: "Luci", molting: true };
console.log ("Chicken name",chicken.name);


if (chicken.molting){
    console.log ("Chicken name",chicken.name, "can not lay an egg");
    
}else{
    console.log ("Chicken name",chicken.name, "can lay an egg");
}

console.log("chicken name",chicken.name)
const num = 6;
const result = (num % 2 != 0) ? "odd ":"even";

console.log(`Number ${num} is ${result}.`);
