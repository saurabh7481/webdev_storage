window.addEventListener("DOMContentLoaded", showData());

const form = document.getElementById("my-form");

form.addEventListener("submit", saveData);

function saveData(e){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const obj = {
        name: name,
        email: email
    }
    localStorage.setItem("user@"+name, JSON.stringify(obj));
}

function showData(e){
    if(localStorage.length){
        const users = [];
        for(let i=0; i<localStorage.length; i++){
            const k = localStorage.key(i);
            users.push(JSON.parse(localStorage.getItem(k)));
        }
        const ul = document.getElementById("users");
        users.forEach(user => {
            console.log(user)
            const li = document.createElement("li");
            li.className = "item";
    
            li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));
            ul.appendChild(li);
        })
    }
    
}