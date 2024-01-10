export {};

class Rectangle {
    private width : number;
    private height : number;

    constructor (width : number, height : number) {
        this.width = width;
        this.height = height;
    } // constructor

    public getArea () : number {
        return this.width * this.height;
    } // getArea
} // Rectangle

const rectangle = new Rectangle(2, 3);
console.log(rectangle);

console.log(rectangle.getArea());