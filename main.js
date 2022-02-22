const form = document.getElementById("my-form");

form.addEventListener("submit", saveData);

function saveData(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
}