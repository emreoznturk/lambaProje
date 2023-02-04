let ac=document.getElementById("open");
let kapat=document.getElementById("close");
let img=document.querySelector("img");

let acikSes=new Audio("on.mp3");
let kapaliSes=new Audio("off.mp3");


ac.addEventListener("click",()=>{
    acikSes.play();
    img.src="lambaacik.jpg"
})

kapat.addEventListener("click",()=>{
    kapaliSes.play();
    img.src="lambakapali.jpg"
})