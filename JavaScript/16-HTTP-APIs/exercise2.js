const axios = require("axios");

const getPostComments = async(postId) => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments', {params : {postId : postId}});
        console.log(res);
        console.log(res.status);
        console.log(res.data);
        // console.log(userRes.data);
        // console.log(res.data[0].id);
        // console.log(`Post # ${res.data[0].id}: ${res.data[0].title}`);
    } // try
    catch (err) {
        console.log(err);
    } // catch
} // getPostComments

getPostComments(99);