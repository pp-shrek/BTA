export {};

class Shape {
    protected width : number;
    protected height : number;

    constructor (width : number, height : number) {
        this.width = width;
        this.height = height;
    } // constructor

    public getArea () : number {
        return 0;
    } // getArea

} // Shape
class Rectangle extends Shape {

    constructor (width : number, height : number) {
        super(width, height);
    } // constructor

    public getArea () : number {
        return this.width * this.height;
    } // getArea
} // Rectangle

class Ellipse extends Shape {
    constructor (width : number, height : number) {
        super(width,height);
    } // constructor
    public getArea () : number {
        return Math.PI * this.width / 2 * this.height / 2;
    } // getArea
} // Ellipse

// class Triangle extends Shape {
//     constructor (width : number, height : number) {
//         super(width,height);
//     } // constructor
//     public getArea () : number {
//         return this.width * this.height / 2;
//     } // getArea
// } // Triangle

// const rectangle = new Rectangle(2, 3);
// console.log(rectangle);
// console.log(rectangle.getArea());

// const ellipse = new Ellipse(5,3);
// console.log(ellipse);
// console.log(ellipse.getArea());

// const triangle = new Triangle(5,2);
// console.log(triangle);
// console.log(triangle.getArea());

class Square extends Shape {
    constructor (width : number) {
        super(width,width);
    } // constructor
    public getArea(): number {
        return Math.pow(this.width,2);
    }
} // Square

class Circle extends Shape {
    constructor(width : number) {
        super(width,width);
    } // constructor
    public getArea(): number {
        return (Math.PI * Math.pow(this.width/2,2));
    } // getArea
} // Circle

const square1 = new Square(3);
console.log(square1.getArea());
const square2 = new Square(4);
console.log(square2.getArea());

const circle1 = new Circle(6);
console.log(circle1.getArea());
const circle2 = new Circle(14);
console.log(circle2.getArea());