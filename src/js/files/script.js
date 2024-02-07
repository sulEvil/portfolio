// Подключение функционала
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import {makeItRain} from "./../effects/rain.js"

import { fire } from "../effects/ash.js";
import { setLanguage } from "../language.js";
let menuBtn = document.querySelector(".edsavlen");
let mobileMenu = document.querySelector('.mobile');
let mobileList = document.querySelector('.mobile__list');
let mobileLinks = document.querySelectorAll('.mobile__link');

function mobileLinksTab(bool = true){
   if(bool){
      mobileLinks.forEach(item => {
         let tab = Number(item.getAttribute('tabindex'))
         item.setAttribute('tabindex', Number(!tab))
         console.log(item.getAttribute('tabindex'))
      })
   } else {
      mobileLinks.forEach(item => {
         let tab = Number(item.getAttribute('tabindex'))
         item.setAttribute('tabindex', -1)
         console.log(item.getAttribute('tabindex'))
      })
   }
   
}

document.querySelector('.wrapper').addEventListener('click', (e) => {
   if(!e.target.classList.contains('edsavlen') && !e.target.classList.contains('mobile__list')){
      menuBtn.classList.remove("aktivatsiya");
      mobileMenu.classList.remove('mobile_active');
      mobileLinksTab(false)
   }
})

menuBtn.addEventListener("click",(e)=>{
   e.target.classList.toggle("aktivatsiya");
   mobileMenu.classList.toggle('mobile_active');
   mobileLinksTab()
})

document.querySelector('.header__menu-btn').addEventListener("keyup",(e)=>{
   if (e.keyCode === 13) {
      menuBtn.classList.toggle("aktivatsiya");
      mobileMenu.classList.toggle('mobile_active');
      mobileLinksTab()
    }
})

// Эффект дождя
makeItRain('.background');
// Эффект дождя ======================
fire({});

// Хедер
function getCoords(elem) {
   return {
     top: headerPos.top + window.pageYOffset,
   };
 }

let header = document.querySelector('.header');
let headerPos = header.getBoundingClientRect();
let links = document.querySelectorAll('.header-list__link');
const observer = new IntersectionObserver((entries) => {
   entries.forEach(item => {
      if(item.isIntersecting){
         links.forEach(link => {
            let id = link.getAttribute('href').replace('#', '');
            if(id === item.target.id){
               link.classList.add('active')
            } else {
               link.classList.remove('active')
            }
         })
         
      }
   })
}, {threshold: 0.5})
document.querySelectorAll('.section').forEach((section) => observer.observe(section))
document.addEventListener("scroll", (event) => {   
   if(window.scrollY !== 0 && !header.classList.contains('header_move')){
      header.classList.add('header_move')
   }
   if(window.scrollY === 0 && header.classList.contains('header_move')){
      header.classList.remove('header_move')
   }

 });

 



// Хедер ====

setLanguage('ru')