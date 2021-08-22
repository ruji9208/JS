const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
    /* if (username === "") {
        alert("Please write your name")
    } else if(username.length > 15) {
        alert("Your name is too long!")
    } */
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreeting(saveUsername);
}