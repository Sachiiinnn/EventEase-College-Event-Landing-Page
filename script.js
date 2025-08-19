const searchForm = document.querySelector('.searchForm');

document.querySelector('#searchButton').onclick = () =>{
    searchForm.classList.toggle("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

const formButton = document.querySelector('#loginButton');
const loginForm = document.querySelector('.loginFormContainer');
const formClose = document.querySelector('#formClose');
const reg = document.querySelector('.now');

formButton.addEventListener('click', () =>{
    loginForm.classList.add("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    searchForm.classList.remove("active")
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove("active")
})
reg.addEventListener('click', ()=>{
    registrationForm.classList.add('active');
    loginForm.classList.remove("active")
})



let menu = document.querySelector('#menuButton');
let navbar = document.querySelector('.navbar');
let Home = document.querySelector('.home')

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    Home.classList.toggle("active");
}

const targetDate = new Date("2025-09-20T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }


  updateCountdown();


  setInterval(updateCountdown, 1000);



  
const registerButton = document.getElementById('Register');
const registrationForm = document.querySelector('.registrationFormContainer');
const closeButton = document.getElementById('form1');
const log = document.querySelector('.log');

registerButton.addEventListener('click', () => {
  registrationForm.classList.add('active');
});

closeButton.addEventListener('click', () => {
  registrationForm.classList.remove('active');
});

log.addEventListener('click', () =>{
  loginForm.classList.add("active");
  registrationForm.classList.remove('active');
})

function openForgotPassword() {
  document.getElementById("forgotPassword").classList.add("active");
  loginForm.classList.remove('active');
}

function closeForgotPassword() {
  document.getElementById("forgotPassword").classList.remove("active");
  loginForm.classList.add('active');
}
