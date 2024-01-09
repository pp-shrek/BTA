interface Letter {
    [key : string] : number
} // Letter

const getCountOfLetters = (str : string) : Letter => {
    let letters : Letter = {};
    for (let i = 0; i<str.length; i++) {
        const letter : string = str.charAt(i);
        if (letter.trim() === "") {
            continue;
        } // if
        if (letter in letters){
            letters[letter]++;
        } // if
        else {
            letters[letter] = 1;
        } // else
    } // for
    // sort the keys of the return object alphabetically
    const sortedLetters : string[] = Object.keys(letters).sort();
    const returnLetters : Letter = {};
    sortedLetters.forEach (char => returnLetters[char] = letters[char]);
    return returnLetters;
} // getCountOfLetters

const result : Letter = getCountOfLetters("a black cat");
console.log(result);
/* prints 
{
	a: 3,
	b: 1,
	c: 2,
	k: 1,
	l: 1,
	t: 1
}
*/
