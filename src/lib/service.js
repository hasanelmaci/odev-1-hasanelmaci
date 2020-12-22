const axios = require('axios');

async function getData(userId){

    const userInfo = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.data)

    const userPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.data)

    return console.log({
        userInfo,
        userPosts,
    })
}

export default getData