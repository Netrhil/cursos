class Toggable {
    constructor(elemento) {
      // inicializar el estado interno
      this.el = el
      this.el.innerHTML = 'Off'
      this.activated = false
      this.onClick = this.onClick.bind(this)
      this.el.addEventListener('click', this.onClick)
      /*
        El this dentro del callback de la funcion addEventListener()
        es distinto al this de la clase , por eso debemos cambiar
        el contexto de la funcion onclick() para seguir referenciando
        a las variables de la clase.
      */
      
    }
    
    //El this de esta clase fue modificado en el constructor
    onClick(evento) { // parametro opcional
      this.activated = !this.activated
      this.toggleText()
    }
  
    toggleText() {
      this.el.innerHTML = this.activated ? 'On' : 'Off'
    }
  }
  
  const button = document.getElementById('boton')
  
  const miBoton = new Toggable(button)