var x; //function -scoped variable
console.log (' x data type is --> ' + typeof x);
var p = undefined;
console.log(' p data type is --> ' + typeof p);
a=3;
console.log ('a data type is -->' + typeof a);
let q; 
//variable declaration , by default this variable is se to undef
    let r = "1";
console.log ('r data type is --> ' + typeof r);
    const y=5;
console.log ("r ->",r);
let z = 3.5;
console.log ('z date type is -->' + typeof z);
console.log ('z -- ',z);
    z="KEVIN"
console.log ('z data type is --> ' + typeof z);
    numberOfWheels =5;
console.log('x ->', x);
console.log('y -> ', y);
console.log('z -> ', z);

class Rectangule {
    constructor(heigth, width) {
        this.heigth = heigth
        this.width = width;

}
get area() {
    return this.calcArea();

}
calcArea() {
    return this.heigth *  this.width;
  }
}
const square = new Rectangule (6,6);
console.log("The area of a square of side 6 is  ", square.area);  

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
    const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1):1;
    return recursively_compute(n);
}
console.log(' factorial of -1 -->' + factorial (-1));
console.log(' factorial of -1 -->' + factorial (5));
console.log(' factorial of -1 -->' + factorial (5.3));
console.log(' factorial of -1 -->' + factorial (z));

const subtruct = (a,b) => {
    return a - b;
}

console.log("the diference is -->" , subtruct(6,2));

//Hacer un objeto C0RT0 ----
let chicken = {name: 'Jhonny', molting : false};

console.log("chicken name --> ", chicken.name);

console.log("the chicken named --> ", chicken.name);

if (chicken.molting){
    console.log("the chicken can't lay an egg");
} else{
    console.log("the chicken can lay an egg");
}


const num=6;
