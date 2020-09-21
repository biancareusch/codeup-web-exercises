"use strict";
const gitkey = 'fd736cf6c1bd3df18337b3c1fc8a92a6748b018b';

fetch('https://api.github.com/repos/biancareusch/codeup-web-exercises', {headers: {'Authorization': gitkey}})
    .then(response => {
        response.json()
            .then(data => {
                    console.log('Last commit : ' + data.created_at)
                }
                // author: json.commit.author.login,
                // date: json.commit.commit.author.date,
            );
    })
    .catch(error => console.log(error));


const findUser = (name) => {
    let userURL = `https://api.github.com/users/${name}/repos`
    fetch(userURL, {headers: {'Authorization': gitkey}})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

findUser("biancareusch");