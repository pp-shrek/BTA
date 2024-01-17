const axios = require("axios");
const url = "http://universities.hipolabs.com/search?country=Finland";

const getUniversities = async() => {
    const response = await axios.get(url);
    return response.data;
} // getUniversities

const handleUniversities = (data) => {
    const universities = data.map((element) => {
        return element.name;
    });
    // console.log(universities);
    return universities;
}
 // handleUniversities
const displayUniversities = (data) => {
    // console.log(`data: ${data}`);
    console.log(data);
} // displayUniversities

const onFailure = (err) => {
    console.log(`ERROR: ${err}`);
} // onFailure

getUniversities()
    .then (handleUniversities)
    .then(displayUniversities)
    .catch(onFailure)
