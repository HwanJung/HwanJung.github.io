const loginForm = document.querySelector("#loginForm");
const login = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function onLogin(event){
    event.preventDefault();
    const name = login.value;
    localStorage.setItem("name", name);
    printName(name);
}

function printName(name){
    login.classList.add("hidden");
    loginForm.style.backgroundColor = "transparent";
    greeting.innerText = `| ${name} |`;
}

const savedName = localStorage.getItem("name");

if(savedName === null) {
    loginForm.addEventListener("submit", onLogin);
} else {
    printName(savedName);
}
