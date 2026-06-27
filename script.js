// Navbar Background

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>80){

header.style.background="rgba(2,6,23,.92)";
header.style.backdropFilter="blur(18px)";

}else{

header.style.background="rgba(3,7,18,.75)";

}

});


// Counter Animation

const counters=document.querySelectorAll(".stat h2");

let started=false;

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-stats");

if(window.scrollY>hero.offsetTop-500 && !started){

started=true;

counters.forEach(counter=>{

const target=counter.innerText;

const number=parseInt(target);

if(isNaN(number)) return;

let count=0;

const interval=setInterval(()=>{

count+=Math.ceil(number/40);

if(count>=number){

count=number;

clearInterval(interval);

}

counter.innerText=count+"+";

},35);

});

}

});


// Contact Form

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! We'll contact you soon.");

form.reset();

});

const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(item=>{

const btn=item.querySelector(".faq-question");

btn.addEventListener("click",()=>{

const answer=item.querySelector(".faq-answer");

if(answer.style.maxHeight){

answer.style.maxHeight=null;

}else{

answer.style.maxHeight=answer.scrollHeight+"px";

}

});

});

/*=========================
SCROLL TO TOP
=========================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================
MOBILE MENU
=========================*/

const menuBtn=document.querySelector(".menu-toggle");
const menu=document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});

/*==================================
SCROLL REVEAL
===================================*/

const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight=window.innerHeight;

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<windowHeight-120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*==================================
CURSOR GLOW
===================================*/

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});