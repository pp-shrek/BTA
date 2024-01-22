"use strict";

const table1 = document.querySelectorAll(".tbl1");
table1.forEach((tbl) => {
    tbl.addEventListener("click", () => {
        table1.forEach((tbl) => {
            tbl.classList.toggle("bg-danger");
        });
    });
});

const table2 = document.querySelectorAll(".tbl2");
table2.forEach((tbl) => {
    tbl.addEventListener("click", () => {
        table2.forEach((tbl) => {
            tbl.classList.toggle("bg-success");
        });
    });
});