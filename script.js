const searchForm = document.querySelector('.searchForm');

document.querySelector('#searchButton').onclick = () =>{
    searchForm.classList.toggle("active");
}

const formButton = document.querySelector('#loginButton');
const loginForm = document.querySelector('.loginFormContainer');
const formClose = document.querySelector('#formClose');

formButton.addEventListener('click', () =>{
    loginForm.classList.add("active");
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove("active")
})