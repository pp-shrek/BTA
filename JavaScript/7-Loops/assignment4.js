function checkSentenceVowels(sentence) {

    // Check how many different vowels we have in the sentence

    const countOfAs = vowelCounter(sentence,'a');    
    const countOfEs = vowelCounter(sentence, 'e');
    const countOfIs = vowelCounter(sentence,'i');
    const countOfOs = vowelCounter(sentence, 'o');
    const countOfUs = vowelCounter(sentence, 'u');
    const countOfYs = vowelCounter(sentence, 'y');

    console.log("A letter count: " + countOfAs);
    console.log("E letter count: " + countOfEs);
    console.log("I letter count: " + countOfIs);
    console.log("O letter count: " + countOfOs);
    console.log("U letter count: " + countOfUs);
    console.log("Y letter count: " + countOfYs);

    const totalCount = countOfAs + countOfEs + countOfIs + countOfOs + countOfUs + countOfYs;

    console.log("Total vowel count: " + totalCount);
}

const vowelCounter = (tmpSentence, tmpVowel) => {
    let countOfVowel = 0;
    for (let i = 0; i < tmpSentence.length; i++) {
        if (tmpSentence.charAt(i).toLowerCase() === tmpVowel) {
            countOfVowel++;
        } // if
    } // for

    return countOfVowel;
} // vowelCounter


checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");