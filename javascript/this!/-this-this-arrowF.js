class Persona{

    constructor(nombre,amigos=[]) {
        this.nombre=nombre;
        this.amigos=amigos;
    }
  
    listarAmigos() {
      /*Aqui this se esta llamando por cada uno
      de los amigos entonces this dentro del forEach
      no recuerda que es la persona que nos devolvio el
      constructor*/
      this.amigos.forEach(function (amigo) {
      console.log("Hola, mi nombre es: "+
      this.nombre+" y soy amigo de "+amigo);
      });
        /*Error "this.nombre"
        VM222:18 Uncaught TypeError: Cannot read property 'nombre' of undefined
        at <anonymous>:18:11
        at Array.forEach (<anonymous>)
        at Persona.listarAmigos (<anonymous>:16:30)
        at <anonymous>:1:6*/
  
      /*La primera solucion es una referencia,
      poner otro nombre para que en el scope
      de esta funcion podemos accederla ai*/
      const _this=this;
      this.amigos.forEach(function (amigo) {
      console.log("Hola, mi nombre es: "+
      _this.nombre+" y soy amigo de "+amigo);
  
      /*la segunda solucion es usando El método bind()
      crea una nueva función, que cuando es llamada,
      asigna a su operador  this el valor entregado,
      con una secuencia de argumentos dados
      precediendo a cualquiera entregados cuando la
      función es llamada. */
      this.amigos.forEach(function (amigo) {
      console.log("Hola, mi nombre es: "+
      this.nombre+" y soy amigo de "+amigo)
      }.bind(this))
  
      /*La tercera solucion es usando
      los arrow functions el this.nombre , javaScript hace
      el ".bind" automaticamente
      */
      this.amigos.forEach((amigo) => {
      console.log("Hola, mi nombre es: " +
      this.nombre+" y soy amigo de "+amigo)
      })
    
  }
  
const juan = new Persona("Juan",["Pedro","Richar","Pepe"])