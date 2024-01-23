"use strict";

const books = [
    { name: "Dune", pages: 412 },
    { name: "Teh Eye of the World", pages: 782 }
];

const htmlContainer = document.querySelector(".container");
const addBookBtn = document.querySelector("#addBookBtn");
const bookList = document.querySelector("#bookList");

const createBookList = () => {
    books.forEach(book => {
        const bookTagP = document.createElement("p");
        bookTagP.setAttribute("class","book-item border-bottom pb-2");
        const bookNode = document.createTextNode(book.name + "(" + book.pages + " pages)");
        bookTagP.appendChild(bookNode);
        bookList.appendChild(bookTagP);
    });
};

addBookBtn.addEventListener("click", () => {
    // add new book object
    const newBookName = document.getElementById("bookName").value;
    const newPageCount = document.getElementById("pageCount").value;
    books.push({"name" : newBookName,"pages":newPageCount})
    // empty form
    document.getElementById("bookName").value="";
    document.getElementById("pageCount").value="";
    // clear HTML bookList
    const bookListItems = document.querySelectorAll(".book-item");
    if (bookListItems.length > 0) {
        bookListItems.forEach(item => {
            bookList.removeChild(item);
        });
    } // if
    createBookList();
});