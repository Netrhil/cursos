interface automovilBase{
    getModelo():string;
    getColor():string;
}

class automovil implements automovilBase{

    public color:string;
    public modelo:string;
    public velocidad:number;

    constructor(modeloInput:string = null){
        this.velocidad = 0;
        this.color = "negro";
        
        if (modeloInput != null) {
            this.modelo = modeloInput;            
        } else {
            this.modelo = "Marca generica";          
        }

    }
 
    public getColor():string {
        return this.color;        
    }

    public setColor(colorInput:string) {
        this.color = colorInput;        
    } 

    public getModelo():string {
        return this.modelo;        
    }

    public setModelo(modeloInput:string) {
        this.modelo = modeloInput;        
    }

    public acelerar() {
        this.velocidad++;       
    }
    
    public frenar() {
        this.velocidad--;        
    }
}

var auto = new automovil();
auto.setColor("Azul");


console.log(auto.getColor());
console.log(auto.getModelo());

