const axios = require("axios");

const getUniversities = async() => {
    try {
        const res = await axios.get("http://universities.hipolabs.com/search?country=Finland");
        return res.data;
    } // try
    catch (err) {
        console.log(err);
    } // catch
} // getUniversities

let universitiesNames = [];
let assy = async() => {
    const universitiesData = await getUniversities();
    // console.log(universitiesData);
    universitiesData.forEach(university => {
        universitiesNames.push(university.name);
    });
    // console.log(universitiesNames);
    console.table(universitiesNames);
} // assy
assy();

// const getUniversities2 = () => {
//     return new Promise((resolve, reject) => {
//         const result = axios.get("http://universities.hipolabs.com/search?country=Finland");
//         resolve(result);
//         reject("Something went wrong!");
//     })
// }

// const start = async() => {
//     try {
//         const universitiesData2 = await getUniversities2();
//         const result = await universitiesData2.json();
//         console.log(universitiesData2.data);
//     } // try
//     catch (error) {
//         console.log(`ERROR: ${error}`);
//     } // catch
// }

// start();
// const getValue = function () { 
//     return new Promise((res, rej) => {
//         const result = axios.get("http://universities.hipolabs.com/search?country=Finland");
//         res(result.data);
//         rej("error");
//         // try {
//         //     const res = axios.get("http://universities.hipolabs.com/search?country=Finland");
//         //     // console.log(res);
//         //     // console.log(res.status);
//         //     // console.log(res.data);
//         //     res(res.data);
//         // } // try
//         // catch (err) {
//         //     console.log(err);
//         // } // catch
//     })
// }; // getValue

// let data;
// let assy = async() => {
//     await getValue().then((reult) => {
//         data = reult;
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })
// } // assy
// assy();

// // let assy = async() => {
// //     await getValue().then((val) => {
// //         valueOneHere = val.value;
// //     })
// //     await getValue().then((val) => {
// //         valueTwoHere = val.value;
// //     })
// //     await console.log(`Value 1 is ${valueOneHere} and value 2 is ${valueTwoHere}`);
// // } // assy
// // assy();