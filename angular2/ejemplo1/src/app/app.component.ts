import { Component } from '@angular/core';

interface item {
  detalle:string;
  tachado:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nombre = 'alguien!';
  // visible = true;
  // pruebaClasesCss = 'red';

  // items = [
  //   {cosa: 1 , check: true},
  //   {cosa: 2 , check: true},
  //   {cosa: 4 , check: true},
  //   {cosa: 3 , check: true},
  // ]
  // cambiarNombre(nombreHtml: string) {
  //   this.nombre = nombreHtml;
  // }
  lista: item[] = [];
  nombre: string;
  
  agregarToDo(nombreInput) {
    this.lista.push({detalle: nombreInput, tachado: false });
    this.nombre = "";
  }

  eliminarItem(item) {
    this.lista.splice(item, 1);
  }
}

