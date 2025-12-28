const circle=document.getElementById("circle");

function start(){
circle.textContent="Дем ал";
circle.style.transform="scale(1.3)";

setTimeout(()=>{
circle.textContent="Ұстап тұр";
},4000);

setTimeout(()=>{
circle.textContent="Дем шығар";
circle.style.transform="scale(1)";
},6000);
}
