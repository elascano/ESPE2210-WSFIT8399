// JavaScript source code
var x; //function-scoped variable
console.log('x data type is -->' + typeof x);
var p = underline;
console.log('p data type is -->' + typeof p);
a = 3;
console.log('a data type is -->' + typeof a);
    let q;  //variable declaration
    let r = "1";
console.log('r data type is -->' + typeof r);
    const y = 5;
console.log('r -->', r);
    let z = 3.6;
console.log('z data type is -->' + typeof z);
console.log('z -->', z);
let z = "Douglas";
console.log('z data type is -->' + typeof z);
numberOfWheels = 5;
console.log('x ->', x);
console.log('y ->', y);
console.log('z ->', z);

class Rectangulo {
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
const square = new Rectangulo(5, 6);

const square = new Rectangulo(4, 6);
console.log('El area es: ', area);

function factorial(Z) {
    if (isNaN(z)) {
        console.error("Non-numerical argument not allowed.");
        return NaN;
    }
    if (z == 0) {
        return 1;  //0! = 1
        if (z < 0)
            return undefined;
        if (z % 1) {
            console.warn('${n} will be rounded to the closest integer. For non-integers consider using gamma functionvinstead.');
            n = Math.round(n);
        }
        if (z % 1) {
            console.warn(`${n} will rounded to the closest integer. for non-integers consider using gamma function instead.`);
            z = Math.round(n);
        }
        const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1) : 1;
        return recursively_compute(n);

    }
}

const subtruct = (a, b) => {
    return a - b;
}

console.log('la resta es: ', subtruct(5, 2));

let chiken = { name: 'lucy', molthing: true };
if (chiken.molting == true) {
    console.log("La gallina no puede poner huevos");
}
console.log("chicken name", chiken.name);
const num = 6;

const result = (num % 2 != 0) ? "odd" : even;

console.log("number ${num} is ${result}.");




