// Se deja código comentado como muestra de funcionamiento para uso posterior

// function pintar(color) {
//     elemento = document.querySelector("#ele1");
//     elemento.style.backgroundColor = color;
// }
//Función con paso a paso. 
// elementId.addEventListener("click",function(color) {
//     color = "yellow";
//     elemento = document.querySelector("div");
//     elemento.style.backgroundColor = color;
// });
// elementId.addEventListener("click",function() {
//     elemento = document.querySelector("#ele1");
//     elemento.style.backgroundColor = 'yellow';
    
// });


elementId = document.querySelector("#ele1");
elementId.style.backgroundColor = "green";

elementId.addEventListener("click",function() {
    document.querySelector("#ele1").style.backgroundColor = 'yellow';
    
});