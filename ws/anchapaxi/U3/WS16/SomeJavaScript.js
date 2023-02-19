var x; //function -scoped variable
console.log('x data type is --> ' + typeof x);
var p = undefined;
console.log('p data type is --> ' + typeof p);
a=3;
console.log('a data type is -->' + typeof a);
let q; //variable declaration, by default this variable is set to undef
    let r="1";
console.log('r data type is --> ' + typeof r);
    const y=5;
console.log("r -> r ",r);
    let z = 3.5; //block-scoped variable
console.log('z data type is --> ' + typeof z);
console.log('z --> ',z);
    z='Dayana';
console.log('z data type is --> ' + typeof z);
    numberOfWheels = 5;

console.log('x ->',x);
console.log('y-> ',y);
///    y = 10;
console.log('z-> ',z);

console.log('Dayana tiene', y);

class Rectangle{
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

const square = new Rectangle(6,6);

console.log("The area of a square of side 6 is",square.area);

function factorial(n){
    if(isNaN(n)) {
        console.error("Non-numerical argument not allowed.");
        return NaN;
    }
    if(n == 0)
        return 1; // 0! = 1
    if(n < 0)
        return undefined;
    if(n % 1){
        console.warn(`${n} will be rounded to the closest integer. For non-integers consider using gamma function instead.`);
        n = Mat.round(n);
    }
    const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1) : 1;
    return recursively_compute(n);    
}

console.log('factorial of -1 --> ' + factorial(-1));
console.log('factorial of 5 --> ' + factorial(5));
//console.log('factorial of 5.3 --> ' + factorial(5.3));
console.log('factorial of Dayana --> ' + factorial(z));

const subtruct = (a, b) => {
    return a - b;
}

console.log("the difference is --> ",subtruct(6,2));

let chicken = { name : 'Lucy', molting : true };

console.log("chicken --> ", chicken.name);
console.log("La gallina Lucy esta --> ", chicken.molting);
///Cuando esta mudando no puede poner huevos 
if(chicken.molting)
   console.log("Lucy can not lay an egg");

const num = 6;

const result = (num % 2 != 0) ? "odd" : "even";

//display the result

console.log(`Number ${num} is ${result}.`);


 
