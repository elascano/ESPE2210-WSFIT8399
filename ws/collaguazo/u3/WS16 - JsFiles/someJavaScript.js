var x;
console.log('x data type is -->'+typeof x);
var p= undefined;
console.log('p data type is -->' +typeof p);
a =3;
console.log('p data type is -->' +typeof a);
let q;
let r="1";
console.log('r data type is -->' +typeof r);
const y=5;
console.log('r  -->' ,r);
let z=3.6;
console.log('z data type is -->' +typeof z);
console.log('z  -->' ,z);
z="Elian Collaguazo"
console.log('z data type is -->'+typeof z);
numberofwheels=5;
console.log(z,'has ',numberofwheels,' wheels');

console.log('x-->',x);

class Rectangle{
    constructor(height,width){
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
const square= new Rectangle(6,6);

console.log('The area of square of side 6 is',square.area);

function factorial(n){
    if(isNaN(n)){
        console.error("Non- numerical argument not allowed");
        return NaN;
    }
    if(n===0) 
       return 1;
    if(n<0)
       return undefined;
     if(n % 1){
        console.warn(`${n} will be to the closest integer. For non-integer consider us` );
        n=Math.round(n);
     }    
     const recursively_compute=a => a > 1 ? a * recursively_compute(a-1):1;
     return recursively_compute(n); 
}


console.log('Factorial of -1 -->'+factorial(-1));
console.log('Factorial of -1 -->'+factorial(5));

const substruct=(a,b) =>{
    return a-b;
}
console.log('the diference is -->', substruct(6,2));

//Declaramos un objeto sin su clase js tambien acepta eso
let chiken= { name:'Lucy', molting:false};

if(chiken.molting)
    console.log('the  chiken ',chiken.name ,' cannot lay eggs' )
else    
    console.log('the chiken ',chiken.name ,' can lay eggs' )

 const num=6;
 const result= (num % 2 != 0)? "odd":"even";
 
 //displa the result
 console.log(`Number ${num} is ${result}.`);
 console.log("Prueba de autoguardado")