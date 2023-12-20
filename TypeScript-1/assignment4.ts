function upperCaseChar(text: string, indexOfChar: number) {
    const textBeforeIndex = text.substring(0, indexOfChar);
    const textAfterIndex = text.substring(indexOfChar + 1);
    const charAtIndex = text.charAt(indexOfChar).toUpperCase();
    console.log(textBeforeIndex + charAtIndex + textAfterIndex);
}

// Testing
upperCaseChar("Sunset and evening star", 19) 