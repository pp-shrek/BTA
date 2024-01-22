"use strict";

const table1 = document.querySelectorAll(".tbl1");
table1.forEach((tbl) => {
    tbl.addEventListener("mouseenter", (event) => {
        event.target.classList.toggle("bg-danger");
        event.target.classList.toggle("bg-warning");
    });
    tbl.addEventListener("mouseleave", (event) => {
        event.target.classList.toggle("bg-danger");
        event.target.classList.toggle("bg-warning");
    });
});

const table2 = document.querySelectorAll(".tbl2");
table2.forEach((tbl) => {
    tbl.addEventListener("mouseenter", (event) => {
        event.target.classList.toggle("bg-success");
        event.target.classList.toggle("bg-warning");
    });
    tbl.addEventListener("mouseleave", (event) => {
        event.target.classList.toggle("bg-success");
        event.target.classList.toggle("bg-warning");
    });
});