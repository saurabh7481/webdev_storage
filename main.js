if(localStorage.getItem('user') != null){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    showData(user);
}


const form = document.getElementById("my-form");

form.addEventListener("submit", saveData);

function saveData(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const obj = {
        name: name,
        email: email
    }
    localStorage.setItem("user", JSON.stringify(obj));
}

function showData(user){
    const ul = document.getElementById("users");
    const li = document.createElement("li");
    li.className = "item";

    li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));
    ul.appendChild(li);
}