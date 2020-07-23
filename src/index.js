import './assets/style/style.scss'
import './assets/animate.min.css'
new WOW().init();
const nav=document.getElementById('nav');
const navMenu=document.getElementById('nav_menu');


const pageSpec=document.getElementById('pageSpec');

const changeButton=document.getElementById('change_button');
changeButton.childNodes.forEach(item=>{
    if(item.text.toLowerCase()===location.pathname.slice(1,3)){
        item.classList.add('change_button_active');
    }
})

if(pageSpec){
    pageSpec.addEventListener('click',(event)=>{
        event.preventDefault();
        console.log(event.target)
        if(event.target.lastChild.classList){
            event.target.lastChild.classList.toggle('specActive');
        }
    });
}

navMenu.addEventListener('click',event=>{
    event.preventDefault();
    nav.classList.toggle('active');
    nav.classList.toggle('animate__fadeIn');

})