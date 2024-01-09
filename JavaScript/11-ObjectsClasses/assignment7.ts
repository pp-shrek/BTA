class Animal {
    protected weight : number;
    protected cuteness : number;

    public constructor (weight : number, cuteness : number) {
        this.weight = weight;
        this.cuteness = cuteness;
    } // constructor

    public makeSound() : void {
        console.log(`silence`);
    } // makeSound
} // Animal

class Cat extends Animal {
    public constructor (weight : number, cuteness : number) {
        super(weight, cuteness);
    } // constructor
    public makeSound() : void {
        console.log(`meow`);
    } // makeSound
} // Cat

class Dog extends Animal {
    private breed : string;
    public constructor (weight : number, cuteness : number, breed : string) {
        super(weight, cuteness);
        this.breed = breed;
    } // constructor
    public makeSound(): void {
        if (this.cuteness > 4) {
            console.log(`awoo`);
        } // if
        else {
            console.log(`bark`);
        } // else
    }
} // Dog

const animal = new Animal(6.5, 4.0);
animal.makeSound();  // prints "silence"
console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"

const cat = new Cat(4.5, 3.0);
cat.makeSound();  // prints "meow"
console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"

const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark"
