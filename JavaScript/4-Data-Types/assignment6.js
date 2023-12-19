const book1 = {
    name: "Dune",
    pageCount: 412,
    read: true,
};

const book2 = {
    name: "The Eye of the World",
    pageCount: 782,
    read: false,
};

book1.read = false;
console.log(book1);

book2.read = true;
console.log(book2);

const books = [
    book1,
    book2,
];

console.log(books);