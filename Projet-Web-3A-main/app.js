let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
 if(window.scrollY > 60){
    document.querySelector('.scroll-top').classList.add('active');
 }else{
    document.querySelector('.scroll-top').classList.remove('active');
 }

}

function showContent(){
    document.querySelector('.loader-container').classList.add('hidden');
}

setTimeout(showContent, 3000);

var content = document.getElementsByTagName('body')[0];
var icon = document.getElementById('icon');




/*const btne = document.querySelector('.btne');
const box = document.querySelector('.box');
const mail = document.querySelector('#mail');*/ 
