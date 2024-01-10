export {};

class Rectangle {
    private width : number;
    private height : number;

    constructor (width : number, height : number) {
        this.width = width;
        this.height = height;
    } // constructor
} // Rectangle

const rectangle = new Rectangle(2, 3);
console.log(rectangle);