const hello = (lang) => {
    if (lang === "fi") {
        console.log(`Heippa maailma!`);
    } // if
    if (lang === "se") {
        console.log(`Hejsan värld!`);
    } // if
    if (lang === "en") {
        console.log(`Hello world!`);
    } // if
} // hello

//const language = "se";

hello("fi");
hello("en");
hello("se");
