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

class Triangle extends Shape {
    constructor (width : number, height : number) {
        super(width,height);
    } // constructor
    public getArea () : number {
        return this.width * this.height / 2;
    } // getArea
} // Triangle

const rectangle = new Rectangle(2, 3);
console.log(rectangle);
console.log(rectangle.getArea());

const ellipse = new Ellipse(5,3);
console.log(ellipse);
console.log(ellipse.getArea());

const triangle = new Triangle(5,2);
console.log(triangle);
console.log(triangle.getArea());