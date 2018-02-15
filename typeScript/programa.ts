class programa {
    public nombre:string;
    public version:number;

    
    public getNombre() : string {
        return this.nombre;
    }
    
    public setNombre(stringNombre : string) {
        this.nombre = stringNombre;
    }

    public getVersion() : string {
        return this.nombre;
    }
    
    public setVersion(stringVersion : number) {
        this.version = stringVersion; 
    }    
    
}

class editorVideo extends programa {
    public timeLine:number;

    public get TimeLine() : number {
        return this.timeLine;
    }
    
    public set TimeLine(valor : number) {
        this.timeLine = valor;
    }    
  
}

var editor = new editorVideo();
editor.TimeLine = 2;
console.log(editor.TimeLine);

//Logica del formulario
var programas = [];

function guardar() {
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new editorVideo();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);

    var listaHtml:string = "";

    programas.forEach(elemento => {
        listaHtml += "<li>" + elemento.getNombre() + "</li>";       
    });

    var listadoHtml = <HTMLElement> document.getElementById("listado");
    listadoHtml.innerHTML = listaHtml;
    
}
