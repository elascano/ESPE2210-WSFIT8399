var x; //function-scoped variable
console.log('x data type is -->' + typeof x);
var p = undefined;
console.log('p data type is -->' + typeof p);
a = 3;
console.log('a data type is -->' + typeof a);
let q;
    let r = "1";
console.log('r data type is -->' + typeof r);
    const y = 5;
console.log("r ->", r);
let z = "Jonathan";
console.log('z data type is -->' + typeof z);
    numberOfWheels = 5;


console.log('z has', numberOfWheels);

console.log('x ->', x)
console.log('y ->', x)
console.log('z ->', x)

class Rectangle{
    constructor(height, width){ 
        //  ATRUBUTO 1: HEIGHT
        //ATRIBUTO 2: WIDTH
        this.height= height;
        this.width = width;
    }
    get area(){
        //ATRIBUTO 3 AREA
        return this.calcArea();
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(8.3,8.3);

console.log("   The area of a square of side 8 is", square.area)



function factorial(n){
    if(isNaN(n)){
        console.error("Non numerical argument");
        return NaN;
    }
    if (n=== 0)
    return 1; //0!=1
    if (n <0)
    return undefined;
    if(n %1){
        console.warn(`${n} will be rounded to the closest integer. For non-integers cosnider using gamma function instead.`);
        n= Math.round(n);
    }
    const recursively_compute = a => a >1 ? a * recursively_compute (a-1):1;
    return recursively_compute(n);
}
console.log('factrial of -f --> ' + factorial(-1));
console.log('factrial of -f --> ' + factorial(5));
console.log('factrial of -f --> ' + factorial(5.3));
console.log('factrial of -f --> ' + factorial(z));


const subtruct = (a,b) => {
    return a - b;
}

console.log("the diference is -->" , subtruct(6,2));

//Hacer un objeto C0RT0 ----
let chicken = {name: 'Jhonny', molting : true};

console.log("chicken name --> ", chicken.name);

console.log("the chicken named --> ", chicken.name);

if (chicken.molting){
    console.log("the chicken can't lay an egg");
} else{
    console.log("the chicken can lay an egg");
}


const num=6;

const result = (num % 3 != 0)? "odd": "even";

console.log(`Number ${num} is ${result}.`);

