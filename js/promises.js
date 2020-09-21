"use strict";


// fetch('https://api.github.com/repos/biancareusch/codeup-web-exercises', {headers: {'Authorization': gitkey}})
//     .then(response => {
//         response.json()
//             .then(data => {
//                     console.log('Last commit : ' + data.created_at)
//                 }
//                 // author: json.commit.author.login,
//                 // date: json.commit.commit.author.date,
//             );
//     })
//     .catch(error => console.log(error));


const findUser = (name) => {
    let userURL = `https://api.github.com/users/${name}/events`
    fetch(userURL, {headers: {'Authorization': gitkey}})
        .then(response => response.json())
        .then(data => {
            let commit = [];
            for (let event of data){
                if (event.type === "PushEvent"){
                    commit.push(event.created_at);
                }
                console.log(commit);
            }
        })
        .catch(error => console.log(error))
}

findUser("biancareusch");