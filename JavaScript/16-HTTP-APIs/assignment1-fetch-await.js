const url = "http://universities.hipolabs.com/search?country=Finland";

const getUniversities = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
} // getUniversities

const handleUniversities = (data) => {
    // console.log(`data: ${data}`);
    let universitiesNames = [];
    data.forEach(university => {
        universitiesNames.push(university.name);
        // console.log(university);
    });
    return universitiesNames;
} // handleUniversities

const displayUniversities = (data) => {
    // console.log(`data: ${data}`);
    console.log(data);
} // displayUniversities

const onFailure = (err) => {
    console.log(`ERROR: ${err}`);
} // onFailure

getUniversities()
    .then(handleUniversities)
    .then(displayUniversities)
    .catch(onFailure)

