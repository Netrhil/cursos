function holaMundo (nombre){
    return "hola mundo! , soy " + nombre;
}

var nombre = "jose";

var sectionContainer = document.getElementById("container"); 
// sectionContainer.innerHTML = holaMundo(nombre);

alert("probando ts -w");

//Variables y tipos
var nombre:string = "jose";
var edad:number = 23;
var programador:boolean = true;
var arreglo: Array<string> = ["cosa", "cosa1", "cosa2"];

// sectionContainer.innerHTML = "nombre: " + nombre + " edad:" + edad;

//Var/Let
var a = 5;
var b = 7;

if (a === 5) {
    let a = 2;    
    var b = 12;

    console.log("Valores en el if : a = " + a + " b = " + b);    
}

console.log("Valores fuera del if : a = " + a + " b = " + b);

//funciones y tipado
function devuelveNumero(num:number):string{
    return "el numero es :" + num;    
}

console.log(devuelveNumero(34));

//POO

