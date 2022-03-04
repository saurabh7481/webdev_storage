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
            console.log(res.data);
            document.getElementById("name").value = "";
            document.getElementById("email") = "";
        }).catch(err => {
            console.log(err);
        })
 }

function showData(e){
    axios.get("https://crudcrud.com/api/420fba99ab8f4462b7f8cbc31fb55d7c/appointments")
        .then(res => {
            const ul = document.getElementById("users");
            res.data.forEach(el => {
                const newUser = `<li id=${el._id}>${el.name} : ${el.email}
                                    <button onclick=deleteUser('${el._id}')> Delete</button>
                                    <button onclick=EditUser('${el._id}')> Edit</button>
                                </li>`

                ul.innerHTML = ul.innerHTML + newUser;
            })
        })
        .catch(err => {
            console.log(err);
        })
    // if(localStorage.length){
    //     const users = [];
    //     for(let i=0; i<localStorage.length; i++){
    //         const k = localStorage.key(i);
    //         users.push(JSON.parse(localStorage.getItem(k)));
    //     }
    //     const ul = document.getElementById("users");
    //     users.forEach(user => {
    //         const newUser = `<li id=${user.email}>${user.name} : ${user.email}
    //                             <button onclick=deleteUser('${user.email}')> Delete</button>
    //                             <button onclick=EditUser('${user.email}')> Edit</button>
    //                         </li>`

    //         ul.innerHTML = ul.innerHTML + newUser;
    //     })
    // }
    
}

function deleteUser(_id){
    axios.delete(`https://crudcrud.com/api/420fba99ab8f4462b7f8cbc31fb55d7c/appointments/${_id}`)
        .then(() => {
            console.log("Deleted!");
            removeFromUI(_id);

        })  
        .catch(err => {
            console.log(err);
        })


    // localStorage.removeItem(email);
    // removeFromUI(email);
}

function removeFromUI(id){
    const parent = document.getElementById("users");
    const toBeDeleted = document.getElementById(id);
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

