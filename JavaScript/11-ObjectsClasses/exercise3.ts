export{};
interface Course {
    name : string,
    grade : number
} // Course
// interface Grade {
//     [key : string] : number
// } // Grade
interface Student {
    name : string,
    credits : number,
    courses : Course[]
} // Student

const student : Student= {
    name: "Aili",
    credits : 45,
    courses : [
        { name : "Intro to Programming",
        grade : 3},
        { name : "JavaScript Basics",
        grade : 3},
        { name : "Functional Programming",
        grade : 5},
        { name : "Program Design",
        grade : 3}
] // courseGrades
} // student

// const student : Student= {
//     name: "Aili",
//     credits : 45,
//     courseGrades : {
//         "Intro to Programming" : 4,
//         "JavaScript Basics" : 3,
//         "Functional Programming" : 5
//     } // courseGrades
// } // student

// 1

console.log(student);
student.courses.forEach((course) => {
    console.log(course);
})

// 2

const refCourse : Course | undefined = student.courses.find((course : Course) => {
    return (course.name === "Intro to Programming");
}); // find
if (typeof(refCourse) != "undefined") {
    console.log(`${student.name} got ${refCourse.grade} from ${refCourse.name}`);
} // if
else {
    console.log(`course not found`);
} // else

// 3

const addCourse = (courseName : string, courseGrade : number) : void => {
    student.courses.push({name : courseName, grade : courseGrade});
} // addCourse

addCourse("C# Basics", 2);
console.log(student);