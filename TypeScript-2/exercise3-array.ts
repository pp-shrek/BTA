import { strict } from "assert";

const gradesArr : Array<number | string> = [];
gradesArr.push(4);
gradesArr.push(2);
gradesArr.push("3");
gradesArr.push(5);
gradesArr.push("1");
gradesArr.push("5");

// console.log(gradesArr);
let tmpGrade : number = 0;
gradesArr.forEach ((grade : number | string) => {
    // console.log(grade);
    if (typeof(grade) == "string") {
        tmpGrade = +grade;
    } // if
    else {
        tmpGrade = grade
    } // else
    if (tmpGrade > 3) {
        console.log(tmpGrade);
    } // if
}); // foreach