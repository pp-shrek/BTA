const person1Age = 15;
const person2Age = 24;

const isFirstPersonOlder = person1Age > person2Age;
console.log(isFirstPersonOlder);
console.log(typeof(isFirstPersonOlder));

// A
// code print "false"

// B
// isFirstPersonOlder type is Boolean

/// C

const firstClassGrade1 = 9;
const firstClassGrade2 = 6;
const firstClassGrade3 = 9;

const firstClassTotalGrades = 3;
const firstClassGradesAverage = (firstClassGrade1 + firstClassGrade2 + firstClassGrade3) / firstClassTotalGrades;

console.log("The first class average:", firstClassGradesAverage);

const secondClassGrade1 = 7;
const secondClassGrade2 = 10;
const secondClassGrade3 = 5;

const secondClassTotalGrades = 3;
const secondClassGradesAverage = (secondClassGrade1 + secondClassGrade2 + secondClassGrade3) / firstClassTotalGrades;

console.log("The second class average:", secondClassGradesAverage);

const isFirstClassHigherAverage = firstClassGradesAverage > secondClassGradesAverage;

console.log("The first class got higher average:", isFirstClassHigherAverage);