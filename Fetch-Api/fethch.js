fetch("data/settings.json").then(
    response=> response.json()
 
).then(responseJson=>{
    console.log(responseJson);
    console.log(responseJson.username);
})

//URL
let userListDOM=document.querySelector("#userList")
fetch("https://jsonplaceholder.typicode.com/posts").then(
    data => data.json()).then(data=>{ 
       data.forEach(element => {
            let liDOM= document.createElement('li')
            liDOM.innerHTML=element.title
            userListDOM.appendChild(liDOM)
       });
    }
    )