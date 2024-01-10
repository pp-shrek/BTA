interface Grade {
    [key : string] : number
} // Grade
interface Student {
    name : string,
    credits : number,
    courseGrades : Grade
} // Student

const student : Student= {
    name: "Aili",
    credits : 45,
    courseGrades : {
        "Intro to Programming" : 4,
        "JavaScript Basics" : 3,
        "Functional Programming" : 5
    } // courseGrades
} // student

// 1
console.log(student);

// 2
student.courseGrades["Program Design"] = 3;
console.log(student);

// 3

student.courseGrades["JavaScript Basics"]=4;
console.log(student);