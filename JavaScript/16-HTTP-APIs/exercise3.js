const axios = require("axios");

const createPost = async() => {
    try {
        const res = await axios({
            method: 'post',
            // get('https://jsonplaceholder.typicode.com/comments', {params : {postId : postId}});
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: "Do coding",
                body: "bar",
                userId: 1
                },
        })
        console.log(res.status);
        // console.log(res.data);
    } // try
    catch (err) {
        console.log(err);
    } // catch
} // createPost

const updatePost = async(postId) => {
    try {
        const res = await axios({
            method: 'put',
            // get('https://jsonplaceholder.typicode.com/comments', {params : {postId : postId}});
            url: 'https://jsonplaceholder.typicode.com/posts/'+postId,
            data: {
                id: postId,
                title: "Do coding",
                body: "bar",
                userId: 1
                },
        })
        console.log(res.status);
        // console.log(res.data);
    } // try
    catch (err) {
        console.log(err);
    } // catch
} // updatePost

createPost();
updatePost(99);