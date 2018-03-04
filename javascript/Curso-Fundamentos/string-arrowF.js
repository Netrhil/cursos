let base = 4;
let altura = 5;

// Como funcion definida
// function areaTriangulo(base, altura) {
//     return (base * altura) / 2;
    
// }

//Como funcion anomia con arrow function

let areaTriangulo = (base, altura) => (base * altura)/2 // el return es implicito

console.log(`El triangulo es de base: ${base} y altura: ${altura} y su area es de ${areaTriangulo(base, altura)}`);

