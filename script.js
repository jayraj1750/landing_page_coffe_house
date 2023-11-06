let navbar = document.querySelector('.header .navbar');

document.querySelector('#mebu=btn').oneclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').oneclick = () =>{
    navbar.classList.remove('active');
}