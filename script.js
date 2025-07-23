const searchForm = document.querySelector('.searchForm');

document.querySelector('#searchButton').onclick = () =>{
    searchForm.classList.toggle("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

const formButton = document.querySelector('#loginButton');
const loginForm = document.querySelector('.loginFormContainer');
const formClose = document.querySelector('#formClose');

formButton.addEventListener('click', () =>{
    loginForm.classList.add("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    searchForm.classList.remove("active")
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove("active")
})



let menu = document.querySelector('#menuButton');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
}