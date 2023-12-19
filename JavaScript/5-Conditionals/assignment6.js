const balance = 0;
const isActive = true;
const checkBalance = true;

// check your balance
if (checkBalance) {
    // is account active and balance > 0
    if (!(isActive && balance > 0)) {
        // is account not active
        if (!isActive) {
            console.log(`Your account is not active.`);
        } else {
            // is balance = 0
            if (balance === 0) {
                console.log(`Your account is empty.`);
            } else {
                console.log(`Your balance is negative.`);
            } // if
        } // if
    } else {
        console.log(`Your balance is ${balance}.`);
    } // if
    } else {
        console.log(`Have a nice day!`);
} // if