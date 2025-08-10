# 🎉 EventEase – College Event Landing Page

**EventEase** is a single-page responsive website designed to showcase a college event such as a seminar, fest, or workshop. It offers a clean layout, animated sections, and a countdown timer — perfect for generating excitement and sharing event information.

---

## 📌 Features

- 🎯 Responsive single-page layout
- ⏳ Countdown timer to the event date
- ✨ Smooth CSS animations and transitions
- 📱 Mobile-friendly and fully responsive design
- 🔗 Navigation bar with smooth scroll
- 🖼️ Sections: About, Schedule, Speakers, Register, Contact

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**

---

## 👨‍💻 Contributor

- [Sachiiinnn](https://github.com/Sachiiinnn)


# Code

## HTML
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
</head>
<body>
    <header class="header">
        <a href="#" class="logo">
            <img src="https://www.gnitipu.in/front_assets/images/new%20logo%20gnit.jpeg" alt="">
        </a>

        <nav class="navbar">
            <a href="#Home" class="active">Home</a>
            <a href="#About">About</a>
            <a href="#Gallery">Gallery</a>
            <a href="#Register">Register</a>
            <a href="#Contact">Contact</a>
        </nav>

        <div class="icon">
            <div class="fas fa-search" id="searchButton"></div>
            <div class="fas fa-user" id="loginButton"></div>
            <div class="fas fa-bars" id="menuButton"></div>
        </div>

        <div class="searchForm">
            <input type="search" id="#searchBox" placeholder="Search here">
        </div>
    </header>

    <div class="loginFormContainer">
        <i class="fa fa-times" id="formClose"></i>
        <form action="">
            <h3>Login</h3>
            <input type="email" id="email" class="box" placeholder="abc@gmail.com">
            <input type="password" required id="password" class="box"  placeholder="Enter your password">
            <input type="submit" value="Login now" class="submit">
            <input type="checkbox" id="remeber">
            <label for="remeber">Remember Me</label>
            <p>Forgot Password? <a href="#">CLick me</a></p>
            <p>Don't have an account? <a href="#">Register now</a></p>
        </form>
    </div>
</body>
<script src="script.js"></script>
</html>

```

## CSS

``` css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
*{
    font-family: "Open Sans";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: 0.2s linear all;
}
html{
    font-size: 70%;
    scroll-padding-top: 9rem;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
::selection{
    /* background: ; */
    color: #27165c;
}
img{
    width: 300px;
    height: 100px;
}
.header{
    background: #27165c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.401);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    padding: 1.5rem 7%;
}

.header .navbar a{
    margin: 0 1rem;
    font-size: 1.5rem;
    color: white;
    border: 0.5rem;
    padding: 0.5rem 0.9rem;
}
.header .navbar a:hover,
.header .navbar a.active{
    color: #27165c;
    background: #f8c301;
    border-radius: 12%;
}

.header .icon div{
    color: white;
    margin-left: 2rem;
    font-size: 2rem;
    cursor: pointer;
}
.header .icon div:hover{
    color: #f8c301;
}
#menuButton{
    display: none;
}

.header .searchForm{
    position: absolute;
    top: 115%;
    right: 5%;
    height: 5rem;
    width: 30rem;
    transform: scale(0);
    display: flex;
    align-items: center;
    transform-origin: top;
    background: #ccc;
}
.header .searchForm.active{
    transform: scale(1);
}
.header .searchForm input{
    width: 100%;
    height: 100%;
    background: #ccc;
    padding: 1rem;
    color: #000;
    font-size: 1.6rem;
    text-transform: none;
}
.header .searchForm input::placeholder{
    color: #000;
}

.loginFormContainer{
    position: fixed;
    top: -100%;
    left: 0;
    z-index: 100000;
    min-height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.623);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginFormContainer.active{
    top: 0;
}

.loginFormContainer form{
    margin: 2rem;
    width: 50rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    background-color: white;
}

.loginFormContainer form h3{
    font-size: 3rem;
    color: #444;
    padding: 1rem 0;
    text-transform: uppercase;
    text-align: center;
}

.loginFormContainer form .box{
    width: 100%;
    margin: 10rem;
    padding: 1rem;
    font-size: 1.7rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.401);
    text-transform: none;
    margin: 0.6rem 0;
    color: #333;
}
.loginFormContainer #remember{
    margin: 2rem 0;
}
.loginFormContainer label{
    font-size: 1.5rem;
}
.loginFormContainer .submit{
    width: 100%;
    display: block;
    padding: 0.8rem;
    font-size: 1.5rem;
}
.loginFormContainer p{
    color: #666;
    padding: 0.5rem 0;
    font-size: 1.5rem;
}
.loginFormContainer p a{
    color: #27165c;
}
.loginFormContainer #formClose{
    position: absolute;
    top: 2rem;
    right: 3rem;
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
}
```

## JavaScript

``` javascript
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
```