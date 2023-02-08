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
z="Lizeth";
console.log('z data type--> ', + typeof z);
numberOfWheels=5;

console.log('x -> ', x);
console.log('y -> ', y);
console.log('z -> ', z);

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(7, 7);
console.log("The area of a square of side is", square.area);

function factorial(n){
    if(isNaN(n)){
        console.error("Non-numerical argument not allowed.");
        return NaN;
    }
    if(n == 0){
        return 1;  //0! = 1
        if (n < 0)
            return undefined;
        if (n % 1){
            console.warn('${n} will be rounded to the closest integer. For non-integers consider using gamma functionvinstead.');
            n = Math.round(n);
        } 
    }   
    const recursively_compute = a => a > 1 ? a * recursively_computer(a-1): 1;
    return recursively_compute(n);   
}
console.log('factorial of -1 --> '+ factorial(-1));

const subtruct = (a, b) => {
    return a - b;
}
console.log("The difference is -->", subtruct(6, 2));

let chicken = {name: 'Lucy', molting: true};
if(chicken.molting == true){
    console.log("La gallina no puede poner huevos");
}
console.log("Chicken name", chicken.name);
const num=6; 

