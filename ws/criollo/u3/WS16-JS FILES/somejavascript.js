var x; 
console.log('x data type is -->' + typeof x);
var p = undefined;
console.log('p data type is -->' + typeof p);
a=3;
console.log('a data type is -->' + typeof a);
 let q;
 let r = "1";
console.log('r data type is -->' + typeof r);
 const y=5;
console.log("r ->",r);
  let z=3.5;
console.log('z data type is  -->' + typeof z);
console.log('z -->',z);
 z= "Natasha";
console.log('z data type is -->' + typeof z);
 numberOfWheels =5;
 console.log('x ->',x);
 console.log('y ->',y);
 console.log('z ->',z);
 
 class Rectangle{
    constructor(height,widht){
        this.height = height;
        this.width = width;
    }
    get area(){
        retunr this.CalcAre();
    }
    calcArea(){
        return this.height * this.width;
    }
 }

 const square = new Rectangle(5,4);

 console.log("The area of a square of side",square.area);

 function factorial(n){
    if(isNaN(n)){
        console.error("Non-numerical argument not allowwed.");
        return NaN;

    }
    if (n==0)
        return 1;
    if (n < 0)
        return undefined;
    if (n % 1){
        console.warn('${n} will be rounded to the colsest integer. For non-integer);
        n= Math.round(n);
    }
    const recursive_compute = a => a > 1 ? a *recursively_compute(a-1);1;
    return recursively_compute(n);
 }
 console.log('factorial of -1 -->'+ factorial(-1));
 console.log('factorial of 3.5 -->' + factorial(3.5));
 console.log('factoril of Natasha -->' + factorial(z));

 const subtruct = (a,b) => {
    return a - b;
 }

 console.log("the diference is  -->", subtruct(6,2));

 let chiken = { name; 'Lucy', molting : true};

 console.log("chiken name", chiken.name);

 const num = 6;
if(chikenmolting)
    console.log(name,"can not leg and egg");
const num=6;
const result = (num % 2 !=0)? "odd" : "even"; 

console.log ('Number ${num} is ${result}.');node