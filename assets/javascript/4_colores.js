
element = document.querySelector("#n1");
element.addEventListener("click", function () {
    document.querySelector("#n1").style.backgroundColor = 'black';
});


element = document.querySelector("#n2");
element.addEventListener("click", function () {
    document.querySelector("#n2").style.backgroundColor = 'black';
});


element = document.querySelector("#n3");
element.addEventListener("click", function () {
    document.querySelector("#n3").style.backgroundColor = 'black';
});


element = document.querySelector("#n4");
element.addEventListener("click", function () {
    document.querySelector("#n4").style.backgroundColor = 'black';
});


//***//

let colorActual = "";

function cambiarColor(color) {
    colorActual = color;
    document.querySelector("#key").style.backgroundColor = color;
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    cambiarColor("pink");
    } else if (event.key === 's') {
    cambiarColor("orange");
    }else if (event.key === 'd') {
        cambiarColor("lightblue");
        }
    });

//***//

function crearNuevoDiv(color) {
    const nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor = color;
    document.body.appendChild(nuevoElemento);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
    crearNuevoDiv("purple");
    } else if (event.key === 'w') {
    crearNuevoDiv("grey");
    }else if (event.key === 'e') {
        crearNuevoDiv("brown");
        }
    });

    