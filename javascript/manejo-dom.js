//Formas de acceder a un formulario
document.forms[0].elements[0].value = "holaa";
document.formulario.campo.value = "hola 2";
document.getElementsByName("formulario").item[0];
console.log(document.formulario.campo);

var etiCampo = document.getElementById("etiCampo");
var campo1 = document.getElementById("campo-id");
etiCampo.textContent = "Pruebaa";

//event listener
etiCampo.addEventListener("click", function () {
    document.formulario.campo.focus();    
});

campo1.addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
});

//Manejo por clases
var itemsLi = document.getElementsByClassName("item");
var botonCambioEstilo = document.getElementById("boton-cambio-estilo");

botonCambioEstilo.addEventListener("click", function(){
    for (const item of itemsLi) {
        item.style.fontWeight = "900";        
    }
});

for (const li of itemsLi) {
    li.addEventListener("click",function(){
        this.style.color = "green";
    });    
}

//Agregar y quitar elementos
var nuevoDiv = document.createElement("div");
nuevoDiv.innerHTML = `<button id="boton-agregar-texto" onClick="agregarLorem()"> Agregar lorem</button> <button id="boton-quitar-texto" onClick="quitarLorem()"> eliminar lorem</button>`;
document.body.appendChild(nuevoDiv);

function agregarLorem() {
    var nuevoP = document.createElement("p");
    nuevoP.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed labore error iure expedita id eum totam, earum iusto quod libero nobis repellat accusantium a, asperiores accusamus alias fuga deserunt qui?";
    var div = document.getElementsByTagName("div")[0];         
    div.appendChild(nuevoP);
}

function quitarLorem() {
    var pExistentes = document.getElementsByTagName("p");       
    
    if (pExistentes.length != 0) {
        pExistentes[0].remove();
    }
    
}



