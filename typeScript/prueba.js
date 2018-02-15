function holaMundo(nombre) {
    return "hola mundo! , soy " + nombre;
}
var nombre = "jose";
var sectionContainer = document.getElementById("container");
// sectionContainer.innerHTML = holaMundo(nombre);
alert("probando ts -w");
//Variables y tipos
var nombre = "jose";
var edad = 23;
var programador = true;
var arreglo = ["cosa", "cosa1", "cosa2"];
// sectionContainer.innerHTML = "nombre: " + nombre + " edad:" + edad;
//Var/Let
var a = 5;
var b = 7;
if (a === 5) {
    var a_1 = 2;
    var b = 12;
    console.log("Valores en el if : a = " + a_1 + " b = " + b);
}
console.log("Valores fuera del if : a = " + a + " b = " + b);
//funciones y tipado
function devuelveNumero(num) {
    return "el numero es :" + num;
}
console.log(devuelveNumero(34));
//POO
