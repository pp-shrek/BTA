import argon2 from "argon2";

async function hashit() {
    let hash;
    try {
        hash = await argon2.hash("jepuli");
        console.log(hash);
    } // try
    catch (err) {
        console.log(`Error ${err}`);
    } // catch
    try {
        if (await argon2.verify(hash, "jepuli")) {
            console.log(`Matched`);
        } // if
        else {
            console.log(`no match`);
        } // else
    } // try
    catch (err) {
        console.log(`Error ${err}`);
    } // catch
}

hashit();