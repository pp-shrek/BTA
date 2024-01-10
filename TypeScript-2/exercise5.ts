interface Boat {
    hullBreached : boolean,
    fillLevel : number,
    sinked? : boolean
} // Boat

let boat : Boat = {
    hullBreached : true,
    fillLevel : 0
};

const isItSinking = () : void => {
    // if (boat.hullBreached) {
    //     while (boat.fillLevel < 100) {
    //         if (boat.fillLevel === 0) {
    //             boat.fillLevel = 1 * 1.2;
    //         } // if
    //         else {
    //             boat.fillLevel *= 1.2;
    //         } // else
    //         console.log(boat.fillLevel);
    //     } // while
    // } // if
    while (boat.hullBreached) {
        if (boat.fillLevel === 0) {
            boat.fillLevel = 1 * 1.2;
        } // if
        else {
            boat.fillLevel *= 1.2;
        } // else
        // console.log(boat.fillLevel);
        if (boat.fillLevel >= 100) {
            boat.fillLevel = 100;
            boat.hullBreached = false;
            boat = {... boat, sinked : true};
        } // if
    } // while
} // isItSinking

isItSinking();
console.log(boat);