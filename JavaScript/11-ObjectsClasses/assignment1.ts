interface RankScore {
    [key : string] : number
} // RankScore

const rankScores : RankScore = {
    S : 8,
    A : 6,
    B : 4,
    C : 3,
    D : 2,
    F : 0
} // rankScores

// A
const calculateTotalScore = (gradeString : string) : number => {
    let totalScore = 0;
    for (let i = 0; i < gradeString.length; i++) {
        const letter : string = gradeString.charAt(i);
        if (letter in rankScores) {
            totalScore += rankScores[letter];
        } // if
    } // for
    
    return totalScore;
} // calculateTotalScore
const totalScore = calculateTotalScore("DFCBDABSB");
console.log(totalScore); // prints 33

// B

const calculateAverageScore = (gradeString : string) : number => {
    return calculateTotalScore(gradeString) / gradeString.length;
} // calculateAverageScore

const averageScore = calculateAverageScore("DFCBDABSB");
console.log(averageScore); // prints 3.6666666666666665

// C
const gradeSequencesArray : string[] =[ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ];
const averageScores : number[] = gradeSequencesArray.map(calculateAverageScore);

console.log(averageScores);