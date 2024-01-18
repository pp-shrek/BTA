export{};
import fs from "fs";

interface Book {
    author : string,
    title : string,
    readingStatus : boolean,
    id : number
} // Book

let library : Array<Book>;

const loadFromJSON = () : void => {
    const library_string = fs.readFileSync("library.json", "utf-8");
    library = JSON.parse(library_string);
    // console.log(library);
} // loadFromJSON

const saveToJSON = () : void => {
    fs.writeFileSync("library.json", JSON.stringify(library),"utf-8");
} //saveToJSON

const addNewBook = (author : string, title : string, status : boolean, id : number) : void => {
    library.push({author : author, title : title, readingStatus : status, id : id});
} // addNewBook

const getBook = (id : number) : Book | undefined => {
    const resultBook : Book | undefined = library.find((book : Book) => {
        return (book.id === id);
    }); // find
    return resultBook;
} // getBook

const printBookData = (id : number) : void => {
    const theBook : Book | undefined = getBook(id);
    // console.log(theBook);
    if (typeof(theBook) != "undefined") {
        console.log(`Book #${theBook.id}, title: ${theBook.title}, author: ${theBook.author}, readingStatus is ${theBook.readingStatus}`);
    } // if
    else {
        console.log(`Book not found`);
    } // else
} // printBookData

const printReadingStatus = (author : string, title : string) : void => {
    const theBook : Book | undefined =library.find((book : Book) => {
        return (book.author === author && book.title === title);
    }); // find
    // console.log(theBook);
    if (typeof(theBook) != "undefined") {
        console.log(`Book title: ${theBook.title}, readingStatus is ${theBook.readingStatus}`);
    } // if
    else {
        console.log(`Book not found`);
    } // else
} // printReadingStatus

const readBook = (id : number) : void => {
    const tmpInex : Number = library.findIndex((book : Book) => {
        return (book.id === id)
    }); // findIndex
    if (tmpInex != -1) {
        library[tmpInex].readingStatus = true;
    } // if
    else {
        console.log(`Book not found`);
    } // else
    // console.log(tmpInex);
} // readBook

loadFromJSON();
addNewBook("Someone", "C# Basics", false, 4);
printBookData(1);
printReadingStatus("Someone", "C# Basics");
readBook(4);
printReadingStatus("Someone", "C# Basics");
saveToJSON();
