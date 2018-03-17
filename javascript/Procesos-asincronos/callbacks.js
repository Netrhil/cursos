function salute(fullName) {
    console.log("Hola " + fullName)
}
/* Esta es la funcion callback, porque depende que la funcion
 * getName() se ejecute primero, para poder tener los parametros
 * necesarios Y ser invocada
 */


function getName(first, last, callback) {
    var fullName = first + " " + last

    callback(fullName)
}
/* Aqui, tenemos a la funcion "padre" de la cual depende la 
 *  callback para ser ejecutada, lo que hace es recibir 3 
 * parametros: "first" que es el primer nombre, "last" que seria 
 * el apellido, y "callback" que es el nombre de la funcion que sera
 * nuestro callback, como son parametros no es necesario que 
 * se llame callback, es solo por motivos ilustrativos
 */

getName("Rolin", "Azmitia", salute) // Imprime: "Hola Rolin Azmitia"