const students = [ { name: "Sami", score: 24.75 },
                   { name: "Heidi", score: 20.25 },
                   { name: "Jyrki", score: 27.5 },
                   { name: "Helinä", score: 26.0 },
                   { name: "Maria", score: 17.0 },
                   { name: "Yrjö", score: 14.5  } ];


// const getGrades = (students) => {
//     const grades =[];
//     for (const student of students) {
//         console.log(`${student.score}`);
//         if (student.score < 14) {
//             grades.push(0);
//         }// if
//         else if (student.score > 14 && student.score <= 17) {
//             grades.push(1);
//         } // else if
//         else if (student.score > 17 && student.score <= 20) {
//             grades.push(2);
//         } // else if
//         else if (student.score > 20 && student.score <= 23) {
//             grades.push(3);
//         } // else if
//         else if (student.score > 23 && student.score <= 26) {
//             grades.push(4);
//         } // else if
//         else {
//             grades.push(5);
//         } // else
//     }
//     return grades;
// } // getGrades
const getGrades = (students) => {
    return students.map((student) => {
        let grade = 0;
        if (student.score < 14) {
            grade = 0;
        }// if
        else if (student.score > 14 && student.score <= 17) {
            grade = 1;
        } // else if
        else if (student.score > 17 && student.score <= 20) {
            grade = 2;
        } // else if
        else if (student.score > 20 && student.score <= 23) {
            grade = 3;
        } // else if
        else if (student.score > 23 && student.score <= 26) {
            grade = 4;
        } // else if
        else {
            grade = 5;
        } // else
        // return grade;
        return {name: student.name, grade: grade};
    }) // map
} // getGrades
console.log(getGrades(students));
//console.log(`${getGrades(students)};`);