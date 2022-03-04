window.addEventListener("DOMContentLoaded", showData());

const form = document.getElementById("my-form");

form.addEventListener("submit", saveData);

function saveData(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const obj = {
        name: name,
        email: email
    }
//     localStorage.setItem(email, JSON.stringify(obj));
    axios.post('https://crudcrud.com/api/420fba99ab8f4462b7f8cbc31fb55d7c/appointments', obj)
        .then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
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
            const newUser = `<li id=${user.email}>${user.name} : ${user.email}
                                <button onclick=deleteUser('${user.email}')> Delete</button>
                                <button onclick=EditUser('${user.email}')> Edit</button>
                            </li>`

            ul.innerHTML = ul.innerHTML + newUser;
        })
    }
    
}

function deleteUser(email){
    localStorage.removeItem(email);
    removeFromUI(email);
}

function removeFromUI(email){
    const parent = document.getElementById("users");
    const toBeDeleted = document.getElementById(email);
    parent.removeChild(toBeDeleted);
}

function EditUser(email){
    const user =  JSON.parse(localStorage.getItem(email));
    const nameInput = document.getElementById("name");
    nameInput.value = user.name;

    const emailInput = document.getElementById("email");
    emailInput.value = user.email;

    removeFromUI(email);
}

