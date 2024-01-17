// const axios = require("axios");

// const getUniversities = async() => {
//     try {
//         const res = await axios.get("http://universities.hipolabs.com/search?country=Finland");
//         return res.data;
//     } // try
//     catch (err) {
//         console.log(err);
//     } // catch
// } // getUniversities

const url = "http://universities.hipolabs.com/search?country=Finland";

const getUniversities = () => {
    return new Promise(function(resolve, reject) {
        fetch(url)
            // .then(resolve(response))
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(onFailure)
    })
} // getUniversities

const displayUniversities = (data) => {
    // console.log(`data: ${data}`);
    let universitiesNames = [];
    data.forEach(university => {
        universitiesNames.push(university.name);
        // console.log(university.name);
    });
    console.log(universitiesNames);
} // displayUniversities

const onFailure = (err) => {
    console.log(`ERROR: ${err}`);
} // onFailure

getUniversities()
    .then(displayUniversities)
    .catch(onFailure)