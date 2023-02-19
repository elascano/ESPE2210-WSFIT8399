var x; //function-secoped variable
console.log('x data type is --- ' + typeof x);
var p= undefined;
console.log('p data type is --- ' + typeof p);
    a=3;
console.log('a data type is ----' + typeof a);
    let q; //variable declaration, by default this variable is see to undef
    let r="1";
console.log('r data type is ----' + typeof r);
    const y=5;
console.log("r ---- ",r);
    let z = 3.5; //block-scoped variable
console.log('z data type is --- ' + typeof z);
console.log('z --- ',z);
    z= "Edison";
console.log('z data type is ---' + typeof z);
numberOfWheels = 5;

console.log('x -- ', x);
console.log('y -- ', y);
console.log('z -- ', z);

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width;
    }
}
const square = new Rectangle (8,4);
console.log("The area of a square of side 6 is", square.area);
function factorial(n){
    if (isNaN(n)){
        console.error("Non-numerical argument not allowed.");
        return NaN;
    }
    if (n == 0)
        return 1; // 0!=1
    if (n<0)
        return undefined;
    if (n % 1){
        console.warn('${n} will be rounded to the closest ineger. For non=integers');
        n = Math.round(n);
    }
    const recursively_compute = a => a > 1 ? a * recursively_compute(a - 1) :1; 
    return recursively_compute(n);
}
console.log('factorial of -1 --->' + factorial(-1));
console.log('factorial of 5 --->' + factorial(5));
console.log('factorial of 5.3 --->' + factorial(5.3));
console.log('factorial of Angie --->' + factorial(z));

const subtruct = (a,b) => {
    return a - b;
}
console.log ("the difference is -->" , subtruct(6,2));

let chicken = {name : 'Lucy', molting : true};
if (chiken.molting)
    console.log('the  chiken ', chiken.name, ' is molting', chiken.molting)
else
    console.log('the chiken ', chiken.name, ' isnt molting', chiken.molting)
console.log("Chiken name --> ", chicken.name);
const num = 6;
const result = (num % 2 != 0) ? "odd" : "even";
//display the result
console.log ('Number $ {num} is $ {result},');

