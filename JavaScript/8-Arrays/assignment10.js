const charIndex = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

const getCountOfLetters = (str) => {
    const letterCountArr = [];
    const charCount = 26;
    for (let i = 0; i < charCount; i++) {
        letterCountArr.push(0);
    } // for
    for (const tmpChar of str) {
        const letterIndex = charIndex[tmpChar];
        if (letterIndex !== undefined) {
            letterCountArr[letterIndex - 1]++;
        } // if
    } // for
    return letterCountArr;
} // getCountOfLetters

const result = getCountOfLetters("a black cat");
console.log(result); // prints [ 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, ... 1, 0, 0, 0, 0, 0, 0  ]
    // corresponding letters:    a  b  c  d  e  f  g, h, i, j, k, l, ... t, u, v, w, x, y, z 
