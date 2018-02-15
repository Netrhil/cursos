var automovil = /** @class */ (function () {
    function automovil(modeloInput) {
        if (modeloInput === void 0) { modeloInput = null; }
        this.velocidad = 0;
        this.color = "negro";
        if (modeloInput != null) {
            this.modelo = modeloInput;
        }
        else {
            this.modelo = "Marca generica";
        }
    }
    automovil.prototype.getColor = function () {
        return this.color;
    };
    automovil.prototype.setColor = function (colorInput) {
        this.color = colorInput;
    };
    automovil.prototype.getModelo = function () {
        return this.modelo;
    };
    automovil.prototype.setModelo = function (modeloInput) {
        this.modelo = modeloInput;
    };
    automovil.prototype.acelerar = function () {
        this.velocidad++;
    };
    automovil.prototype.frenar = function () {
        this.velocidad--;
    };
    return automovil;
}());
var auto = new automovil();
auto.setColor("Azul");
console.log(auto.getColor());
console.log(auto.getModelo());
