var x;
console.log('x data type is --> '+ typeof x);
var p = undefined;
console.log('p data type is --> '+ typeof p);
a = 3;
console.log('a data type is --> '+ typeof a);
let q;
let r = "1";
console.log('r data type is --> '+ typeof r);
const y = 5;
console.log('r --> ', r);
let z = 3.6;
console.log('z data type is --> '+ typeof z);
console.log('z --> ', z);
z= "Juliana";
console.log('z data type is --> ' + typeof z);
numberOfWheels = 5;
console.log(z, 'has ', numberOfWheels, 'wheels');
console.log('x --> ', x);
console.log('y --> ', y);
console.log('z --> ', z);

class Rectangle{
    //it has 3 atributes: height, width, area
    constructor(height, width){
        this.height=height;
        this.width=width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(2.1, 2.1);

console.log("The area of a square of side 2.1 is ", square.area);

function factorial(n){
    if (isNaN(n)){
        console.error("Non-numerical argument not allowed.")
        return NaN;
    }
    if (n == 0)
        return 1;
    if (n < 0)
        return undefined;
    if (n % 1){
        console.warn('${n} will be rounded to the closest integer. For non-integer consider using gamma function instead.')
        n = Math.round(n);
    }

    const recursively_compute = a => a > 1 ?  a * recursively_compute(a - 1): 1; // ? --> if
    return recursively_compute(n);
}

console.log('factorial of -1 --> '+ factorial(-1));
console.log('factorial of 5 --> '+ factorial(5));
console.log('factorial of 5.3 --> '+ factorial(5.3));
console.log('factorial of Juliana --> '+ factorial("Juliana"));

const subtruct = (a, b) => {
    return a - b;
}

console.log ("The difference is --> ", subtruct(6, 2));

let chicken = { name : 'Lucy', molting: true};
    if (chicken.molting)
        console.log("The chicken", chicken.name, "is molting");
console.log("chicken name --> ", chicken.name);

const num = 6;

const result = (num % 2 != 0) ? "odd": "even";

console.log('Number ${num} is ${result}.');