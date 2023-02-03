var x; //function-scoped variable
console.log("x data type is -->" + typeof x);
var p = undefined;
console.log("p data type is -->" + typeof p);
a = 3;
console.log("a data type is -->" + typeof a);
let q; //variable declaration, by default this variable is set to undef
let r = "1";
console.log("r ata type is -->" + typeof r);
const y = 5;
console.log("r -> ", r);
let z = 3.5; //block-scoped variable
console.log("z data type is -->" + typeof z);
console.log("z --> ", z);
z = "Nayeli";
console.log("z data type is --> " + typeof z);
numerOfWheels = 5;
console.log("x -> ", x);
console.log("y -> ", y);
console.log("z -> ", z);

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
const square = new Rectangle(5.5, 5.5);
console.log("The area of a square os side 6 is", square.area);

function factorial(n) {
  if (isNaN(n)) {
    console.error("Non-numerical argument not allowed.");
    return NaN;
  }
  if (n == 0) return 1; // 0!=1
  if (n < 0) return undefined;
  if (n % 1) {
    console.warn(
      `${n} willl be rounded to the closes integer. For non-integer consider using gamma function instead.`
    );
    n = Math.round(n);
  }
  const recursively_compute = (a) =>
    a > 1 ? a * recursively_compute(a - 1) : 1;
  return recursively_compute(n);
}
console.log("factorial of -f --> " + factorial(-1));
console.log("factorial of -f --> " + factorial(5));
console.log("factorial of -f --> " + factorial(5.3));
console.log("factorial of f --> " + factorial(z));

const subtruct = (a, b) => {
  return a - b;
};
console.log("the difference is --> ", subtruct(6, 2));

let chicken = { name: "Nay", molting: true };

console.log("the chicken named --> ", chicken.name);

if (chicken.molting) {
  console.log("the chicken can't lay an egg");
} else {
  console.log("the chicken can lay an egg");
}

console.log("chicken name", chicken.name);
const num = 6;
const result = num % 2 != 0 ? "odd" : "even";

//display the result

console.log(`Number ${num} is ${result}.`);