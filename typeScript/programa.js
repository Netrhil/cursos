var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var programa = /** @class */ (function () {
    function programa() {
    }
    programa.prototype.getNombre = function () {
        return this.nombre;
    };
    programa.prototype.setNombre = function (stringNombre) {
        this.nombre = stringNombre;
    };
    programa.prototype.getVersion = function () {
        return this.nombre;
    };
    programa.prototype.setVersion = function (stringVersion) {
        this.version = stringVersion;
    };
    return programa;
}());
var editorVideo = /** @class */ (function (_super) {
    __extends(editorVideo, _super);
    function editorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(editorVideo.prototype, "TimeLine", {
        get: function () {
            return this.timeLine;
        },
        set: function (valor) {
            this.timeLine = valor;
        },
        enumerable: true,
        configurable: true
    });
    return editorVideo;
}(programa));
var editor = new editorVideo();
editor.TimeLine = 2;
console.log(editor.TimeLine);
//Logica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new editorVideo();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    var listaHtml = "";
    programas.forEach(function (elemento) {
        listaHtml += "<li>" + elemento.getNombre() + "</li>";
    });
    var listadoHtml = document.getElementById("listado");
    listadoHtml.innerHTML = listaHtml;
}
