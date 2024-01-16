const axios = require("axios");
// axios.get('https://jsonplaceholder.typicode.com/posts?id=99')
// .then(response => console.log(response.data))
// .catch(error => console.log(error));


const getPostById = async(postId) => {
    try {
        // const res = await axios.get("https://jsonplaceholder.typicode.com/posts?id=99");
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {params : {id : postId}});
        const userRes = await axios.get('https://jsonplaceholder.typicode.com/users', {params : {id : res.data[0].userId}});
        // console.log(res.data);
        // console.log(userRes.data);
        // console.log(res.data[0].id);
        // console.log(`Post # ${res.data[0].id}: ${res.data[0].title}`);
        console.log(`Post #${res.data[0].id} by ${userRes.data[0].name}: ${res.data[0].title}`);
    } // try
    catch (err) {
        console.log(err);
    } // catch
} // getPostById

const getPostByUserId = async(userId) => {
    try {
        // const res = await axios.get("https://jsonplaceholder.typicode.com/posts?id=99");
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {params : {userId : userId}});
        // console.log(res.data);
        res.data.forEach(element => {
            // console.log(element.id);
            console.log(`Post # ${element.id} by ${element.userId}: ${element.title}`);
        });
    } // try
    catch (err) {
        console.log(err);
    } // catch
} // getPostByUserId

getPostById(99);
// getPostByUserId(1);