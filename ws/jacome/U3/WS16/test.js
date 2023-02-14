var x;
console.log('x data type is-->' + typeof x);
var p = undefined;
console.log('p data type is-->' + typeof p);
a = 3;
console.log('a data type is-->' + typeof a);
let q;
let r = "1";
console.log('r data type is-->' + typeof r);
const y = 5;
console.log("r-->", r);
let z = 6;
console.log('z data type is-->' + typeof z);
console.log('z-->', z);
z = "Ivonne";
console.log('z data type is -->' + typeof z);
number0fWheels = 5;
console.log('x->', x);
console.log('y->', y);
console.log('z->', z);
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

function factorial(n){
    if(isNaN(n)){
        console.error("Non-numerical argument not allowed.");
        return NaN;
    }
    if(n==0)
    return 1; //0!=1
    if(n<0)
    return undefined;
    if (n%1){
        console.warn('${n} will be rounded to the closest integer.For non-intergers consider using gamma function instead.')
        n=Math.round(n);
    }
    const recursively_compute= a => a > 1? a* recursively_compute(a -1):1;
    return recursively_compute(n);

}

const subtruct = (a, b) => {
    return a - b;
}

console.log('la resta es: ', subtruct(5,2));
let chiken = { name: 'lucy', molthing: true };
if (chiken.molting == true) {
    console.log("La gallina no puede poner huevos");
}
console.log("chicken name", chiken.name);
const num = 6;

const result=(num%2 !=0)? "odd":"even";
console.log('Number ${num} is ${result}. ');







