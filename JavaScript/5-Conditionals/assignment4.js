const score = 4;
const hoursPlayed = 400;
const price = 0;

if ((score >= 4 && price === 0) || score === 4 && ((hoursPlayed/price) >= 4) || (score === 5 && (hoursPlayed/price) >= 2)) {
    console.log(`The games was worth its price`);
} else {
    console.log(`The games was NOT worth its price`);
}