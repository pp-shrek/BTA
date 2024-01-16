const axios = require("axios");

axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
        title: "Do coding",
        body: "bar",
        userId: 1
        },
    })
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error));

axios({
    method: 'put',
    url: 'https://jsonplaceholder.typicode.com/posts/99',
    data: {
        id: 99,
        title: "Do coding",
        body: "bar",
        userId: 1
        },
    })
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error));