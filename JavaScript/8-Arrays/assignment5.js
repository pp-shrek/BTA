const dayInMonth = (monthNumb) => {
    const monthDays = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays[monthNumb];
} //dayInMonth

console.log(`${dayInMonth(5)}`);