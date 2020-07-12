import './assets/style/style.scss'
import './assets/animate.min.css'
new WOW().init();
const nav=document.getElementById('nav');
const navMenu=document.getElementById('nav_menu');

navMenu.addEventListener('click',event=>{
    event.preventDefault();
    nav.classList.toggle('active');
    nav.classList.toggle('animate__fadeIn');

})