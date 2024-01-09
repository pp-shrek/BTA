class Room {
    width : number;
    height : number;
    furniture : string[];

    constructor (width : number, height : number) {
        this.width = width;
        this.height = height;
        this.furniture  = [];
    } // constructor

    getArea() : number {
        return this.width * this.height;
    } // getArea

    addFurniture(furniture : string) : void {
        this.furniture.push(furniture);
    }
} // Room
const room = new Room(4.5, 6.0);
// console.log(room); // Room { width: 4.5, height: 6 }

const area = room.getArea();
// console.log(area); // prints 27

room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log(room); // prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
