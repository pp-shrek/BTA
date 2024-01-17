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