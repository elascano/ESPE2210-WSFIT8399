class Circle{
    constructor(radio, pi){
        this.radio = radio;
        this.pi = pi;
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        return this.pi*(this.radio*this.radio);
    }
}

const circle = new Circle(3.14, 3);

console.log("The area of a circle is ", circle.area);

//var 5 + 2 + 1
